import React, { useState } from "react";
import "./taskBoardPage.css";
import TaskList from "../../components/task-list/TaskList";
import { ReactComponent as HistoryIcon } from "../../assets/icons/history.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add-white.svg";
import History from "../../components/history/History";
import { getCategoriesByParams } from "../../queries/list.query";
import Loading from "../../components/loading/Loading";
import { tasksStatus } from "./data";

export default function TaskBoardPage(): JSX.Element {
    const { isLoading, data: response } = getCategoriesByParams();
    const [historyModal, setHistoryModal] = useState(false);

    if (isLoading) {
        console.log("loading");
        return <Loading />;
    }

    return (
        <div className="task-board-container">
            {historyModal && <History toClose={setHistoryModal} />}

            <div className="tb-header">
                <h1>My Task Board</h1>
                <div className="tb-header-buttons-container">
                    <button
                        onClick={() => {
                            setHistoryModal(true);
                        }}
                        className="tb-header-button tb-button-his">
                        <HistoryIcon className="tb-button-icon" />
                        History
                    </button>
                    <button className="tb-header-button tb-button-add">
                        <AddIcon className="tb-button-icon" />
                        Create new list
                    </button>
                </div>
            </div>
            <div className="tb-column-container">
                {response?.data.map((i, key) => (
                    <TaskList
                        title={i.name}
                        id={i.id}
                        key={key}
                        tasks={tasksStatus(response?.data)}
                        taskLists={response?.data}
                    />
                ))}
            </div>
        </div>
    );
}
