import React, { useState } from "react";
import "./taskList.css";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import TaskCard from "../task-card/TaskCard";
import EditMenuList from "../editMenu/EditMenuList";
import { type IResponse } from "../../pages/taskBoard/data";
import AddCard from "../addCard/AddCard";
// import { type IToClose } from "../../types/hook.types";

export interface ITaskLists {
    name: string;
    id: number;
}
interface ITaskList {
    title: string;
    id: number;
    tasks: IResponse[];
    taskLists: ITaskLists[];
    // toCloseAddBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskList({
    title,
    id,
    tasks,
    taskLists,
    // toCloseAddBtn,
}: ITaskList): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    const [addCardModal, setAddCardModal] = useState(false);

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
            {addCardModal && <AddCard toClose={setAddCardModal} />}
            <div className="tl-button-container">
                <button
                    onClick={() => {
                        setAddCardModal(true);
                    }}
                    className="tl-button-add">
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
