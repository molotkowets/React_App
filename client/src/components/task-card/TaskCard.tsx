import React, { useState } from "react";
import "./taskCard.css";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
// import { ReactComponent as DropDownIcon } from "../../assets/icons/drop-down.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/date.svg";
import { type ITaskLists } from "../task-list/TaskList";
import EditMenuCard from "../editMenu/EditMenuCard";
import Priority from "../priority/Priority";
import Dropdown from "../dropdown/Dropdown";

export interface TTasks {
    name: string;
    id: number;
    description: string;
    date: string;
    priority: string;
}
interface ITaskCard {
    key: number;
    task: TTasks;
    taskLists: ITaskLists[];
}
export default function TaskCard({ task, taskLists }: ITaskCard): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);

    // console.log("taskLists", taskLists);
    return (
        <div className="tc-container">
            <div className="tc-header">
                <h3>{task.name}</h3>
                <div className="tl-header-menu">
                    <MenuIcon
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                        className="tl-header-menu-icon"
                    />
                    {menuOpen && <EditMenuCard toClose={setMenuOpen} />}
                </div>
            </div>
            <p className="tc-description">{task.description}</p>
            <span className="tc-date">
                <DateIcon className="tc-date-icon" />
                {task.date}
            </span>
            <Priority priority={task.priority} />
            <div className="tc-input-status">
                {/* <select name="select">
                    <option value="" disabled selected>
                        Move to:
                    </option>
                    <option value="value1">list 1</option>
                    <option value="value2">list 2</option>
                    <option value="value3">list 3</option>
                </select> */}
                {/* <DropDownIcon /> */}
                <Dropdown />
            </div>
        </div>
    );
}
