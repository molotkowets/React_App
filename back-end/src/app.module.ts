import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TaskManagementModule } from './task-management/task-management.module';
import { join, relative } from 'path';
import { LoggerModule, Params } from 'nestjs-pino';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbDir = relative(process.cwd(), __dirname);

        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: +configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USER'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          autoLoadEntities: true,
          migrations: [join(dbDir, 'migrations', '*.{ts,js}')],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TaskManagementModule,
    LoggerModule.forRootAsync({
      useFactory: (): Params => ({
        pinoHttp: [
          {
            level: 'info',
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
              },
            },
          },
          process.stdout,
        ],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
