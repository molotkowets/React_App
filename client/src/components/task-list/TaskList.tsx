import React, { useState } from "react";
import "./taskList.css";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import TaskCard from "../task-card/TaskCard";
import EditMenuList from "../editMenu/EditMenuList";
import { type IResponse } from "../../pages/taskBoard/data";

export interface ITaskLists {
    name: string;
    id: number;
}
interface ITaskList {
    title: string;
    id: number;
    tasks: IResponse[];
    taskLists: ITaskLists[];
}
export default function TaskList({ title, id, tasks, taskLists }: ITaskList): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    const tasksNoId = tasks.find((v, i) => v.idStatus === id);
    return (
        <div className="task-list-container">
            <div className="tl-header">
                <div className="tl-header-title">
                    <h2>{title}</h2>
                    <span>{id}</span>
                </div>
                <div className="tl-header-menu">
                    <Menu
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                        className="tl-header-menu-icon"
                    />
                    {menuOpen && <EditMenuList toClose={setMenuOpen} />}
                </div>
            </div>
            <div className="tl-button-container">
                <button className="tl-button-add">
                    <Add className="tl-button-add-icon" />
                    <span>Add new card</span>
                </button>
            </div>
            <div className="tl-task-cads">
                {tasksNoId?.data.map((i, key) => (
                    <TaskCard listId={id} key={key} task={i} taskLists={taskLists} />
                ))}
            </div>
        </div>
    );
}
