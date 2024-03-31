import React from "react";
import "./dropdown.css";
import { type ITaskLists } from "../task-list/TaskList";

interface IDropDown {
    listStatus: ITaskLists[];
}
export default function Dropdown({ listStatus }: IDropDown): JSX.Element {
    return (
        <select className="dropdown-input" name="select" defaultValue={"value0"}>
            <option value="value0" disabled>
                Move to:
            </option>
            {listStatus.map((v, key) => (
                <option key={key} value={v.id}>
                    {v.name}
                </option>
            ))}
        </select>
    );
}
