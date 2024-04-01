import React, { useState } from "react";
import "./taskCard.css";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/date.svg";
import { type ITaskLists } from "../task-list/TaskList";
import EditMenuCard from "../editMenu/EditMenuCard";
import Priority from "../priority/Priority";
import Dropdown from "../dropdown/Dropdown";
import { type ITask } from "../../pages/taskBoard/data";
import CardBoard from "../cardBoard/CardBoard";

export interface TTasks {
    name: string;
    id: number;
    description: string;
    date: string;
    priority: string;
}
interface ITaskCard {
    key: number;
    task: ITask;
    listId: number;
    taskLists: ITaskLists[];
}
export default function TaskCard({ task, taskLists, listId }: ITaskCard): JSX.Element {
    const [cardBoardModal, setCardBoardModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const listStatus = taskLists.filter((val) => val.id !== listId);

    return (
        <div className="tc-container">
            {cardBoardModal && <CardBoard toClose={setCardBoardModal} />}
            <div
                onClick={() => {
                    setCardBoardModal(true);
                }}
                className="tc-btn-close-wrapper">
                <div className="tc-header">
                    <h3>{task.name}</h3>
                </div>
                <p className="tc-description">{task.description}</p>
                <span className="tc-date">
                    <DateIcon className="tc-date-icon" />
                    {task.date}
                </span>
                <Priority priority={task.priority} />
            </div>
            <div className="tk-menu-icon tl-header-menu">
                <MenuIcon
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                    className="tl-header-menu-icon"
                />
                {menuOpen && <EditMenuCard toClose={setMenuOpen} />}
            </div>
            <div className="tc-input-status">
                <Dropdown listStatus={listStatus} />
            </div>
        </div>
    );
}
