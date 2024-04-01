import React, { useState } from "react";
import "./editMenu.css";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as TrashCan } from "../../assets/icons/trash-can.svg";
import { deleteTask } from "../../queries/delete-task.query";
import { useNavigate } from "react-router-dom";

interface IEditMenu {
    toClose: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
}
export default function EditMenuCard({ toClose, id }: IEditMenu): JSX.Element {
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const navigate = useNavigate();
    const { status } = deleteTask(deleteId);

    if (status === "success") {
        navigate(0);
    }

    return (
        <div>
            <div className="em-container">
                <button className="em-button">
                    <Edit className="em-btn-icon" /> <span>Edit</span>
                </button>
                <button
                    onClick={() => {
                        setDeleteId(id);
                    }}
                    className="em-button">
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
