import React from "react";
import "./dropdown.css";

export default function Dropdown(): JSX.Element {
    return (
        <select className="dropdown-input" name="select" defaultValue={"value0"}>
            <option value="value0" disabled>
                Move to:
            </option>
            <option value="value1">list 1</option>
            <option value="value2">list 2</option>
            <option value="value3">list 3</option>
        </select>
    );
}
