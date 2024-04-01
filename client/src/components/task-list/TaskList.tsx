import React, { useState } from "react";
import "./taskList.css";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import TaskCard from "../task-card/TaskCard";
import EditMenuList from "../editMenu/EditMenuList";
import AddCard from "../addCard/AddCard";

export interface ITasks {
    id: number;
    name: string;
    description: string;
    dueDate: string;
    priority: string;
    taskListId: number;
}
export interface ITaskLists {
    name: string;
    id: number;
    tasks: ITasks[];
}
interface ITaskList {
    title: string;
    id: number;
    taskLists: ITaskLists[];
}

export default function TaskList({ title, id, taskLists }: ITaskList): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    const [addCardModal, setAddCardModal] = useState(false);

    const tasksNoId = taskLists.find((v) => v.id === id);
    // const testOp = [];
    // testOp.push(taskLists);

    return (
        <div className="task-list-container">
            <div className="tl-header">
                <div className="tl-header-title">
                    <h2>{title}</h2>
                    <span>{tasksNoId?.tasks.length}</span>
                </div>
                <div className="tl-header-menu">
                    <Menu
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                        className="tl-header-menu-icon"
                    />
                    {menuOpen && (
                        <EditMenuList setAddCardModal={setAddCardModal} toClose={setMenuOpen} />
                    )}
                </div>
            </div>
            {addCardModal && (
                <AddCard toClose={setAddCardModal} listStatus={taskLists} listId={id} />
            )}
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
                {tasksNoId?.tasks.map((i, key) => (
                    <TaskCard taskLists={taskLists} listId={id} key={key} data={i} />
                ))}
            </div>
        </div>
    );
}
