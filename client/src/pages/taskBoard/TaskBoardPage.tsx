import React, { useState } from "react";
import "./taskBoardPage.css";
import TaskList from "../../components/task-list/TaskList";
import { ReactComponent as HistoryIcon } from "../../assets/icons/history.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add-white.svg";
import History from "../../components/history/History";

export default function TaskBoardPage(): JSX.Element {
    const [historyModal, setHistoryModal] = useState(false);
    const TDescription =
        "Task description should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.";
    const taskLists = [...Array(3)].map((u, i) => ({ name: `text-${i}`, id: i }));
    const tasks = [...Array(3)].map((u, i) => ({
        name: `Task-${i}`,
        id: i,
        description: TDescription,
        date: "Wed, 19 Apr",
        priority: "Low",
    }));

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
                {taskLists.map((i, key) => (
                    <TaskList
                        title={i.name}
                        id={i.id}
                        key={key}
                        tasks={tasks}
                        taskLists={taskLists}
                    />
                ))}
            </div>
        </div>
    );
}
