import React from "react";
import "./editMenu.css";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as TrashCan } from "../../assets/icons/trash-can.svg";

interface IEditMenu {
    toClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function EditMenuList({ toClose }: IEditMenu): JSX.Element {
    return (
        <div>
            <div className="em-container">
                <button className="em-button">
                    <Edit className="em-btn-icon" /> <span>Edit</span>
                </button>
                <button className="em-button">
                    <Add className="em-btn-icon" />
                    <span>Add new card</span>
                </button>
                <button className="em-button">
                    <TrashCan className="em-btn-icon" /> <span>Delete</span>
                </button>
            </div>
            <div
                onClick={() => {
                    toClose(false);
                }}
                className="em-background-button-close"></div>
        </div>
    );
}
