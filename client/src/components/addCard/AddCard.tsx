import React from "react";
import "./addCard.css";
import { type IToClose } from "../../types/hook.types";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { type SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/Input";
// import { ReactComponent as StatusIcon } from "../../assets/icons/status.svg";
// import { ReactComponent as DateIcon } from "../../assets/icons/date.svg";
// import { ReactComponent as PriorityIcon } from "../../assets/icons/priority.svg";
export interface ICardForm {
    name: string;
    description: string;
    priority: string;
}
export default function AddCard({ toClose }: IToClose): JSX.Element {
    const { register, handleSubmit } = useForm<ICardForm>();
    const onSubmit: SubmitHandler<ICardForm> = (data) => {
        console.log("data", data);
    };
    return (
        <div className="add-card-wrapper modal-wrapper">
            <div
                onClick={() => {
                    toClose(false);
                }}
                className="modal-to-close-btn"></div>
            <div className="modal-container add-card-container">
                <div className="add-modal-header cb-head-line">
                    <div
                        onClick={() => {
                            toClose(false);
                        }}>
                        <CloseIcon className="close-btn" />
                    </div>
                </div>
                <div className="cb-body">
                    <div className="cb-b-data">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <input {...register("name")} type="test" /> */}
                            <Input register={register} />
                            <button>send</button>
                        </form>
                        {/* <div className="cd-d-header">
                            <h2>Task name</h2>
                            <button className="cb-edit-btn">Save</button>
                        </div> */}
                        {/* <div className="cb-point-data">
                            <span>
                                <StatusIcon className="cb-point-icon" />
                                Status
                            </span>
                            <input type="text" />
                        </div>
                        <div className="cb-point-data">
                            <span>
                                <DateIcon className="cb-point-icon" />
                                Due date
                            </span>
                            <input type="text" />
                        </div>
                        <div className="cb-point-data">
                            <span>
                                <PriorityIcon className="cb-point-icon" />
                                Priority
                            </span>
                            <input type="text" />
                        </div>
                        <div className="cb-description-container">
                            <h2>Description</h2>
                            <input type="text" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
