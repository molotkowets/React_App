import React from "react";
import "./history.css";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

interface IHistory {
    toClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function History({ toClose }: IHistory): JSX.Element {
    function toCloseHistory(): void {
        toClose(false);
        console.log("closeHistory");
    }
    return (
        <div className="history-container">
            <div onClick={toCloseHistory} className="h-to-close-btn"></div>
            <div className="h-list-wrapper">
                <div className="h-l-header">
                    <h2>History</h2>
                    <CloseIcon onClick={toCloseHistory} className="h-l-h-close-btn" />
                </div>
            </div>
        </div>
    );
}
