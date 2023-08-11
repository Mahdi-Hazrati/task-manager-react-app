import {FaRegCalendarAlt, FaTrash } from "react-icons/fa";
// -------------------------------//
function MainTaskView({ ViewTask, OnDeleteTask, OnToggleTask}) {
    return (
        <div className={`task ${ViewTask.REMINDER ? 'reminder':""}`} onDoubleClick={() => OnToggleTask(ViewTask.ID)}>
            <h3>{ViewTask.TEXT} <FaTrash id="FaTrashIcon" onClick={() => OnDeleteTask(ViewTask.ID)} /></h3>
            <p><FaRegCalendarAlt  id="FaCalendatIcon"/>{" "+ViewTask.DATE}</p>
        </div>
    )
}

export default MainTaskView;