import PropTypes from 'prop-types';
import {FaPencilAlt, FaTrashRestoreAlt } from 'react-icons/fa';
let TaskButton = ({ Show_Close_Text, ElementColor, WhenClickOn, Show_or_Hide }) => {
    return (
        <>
            {Show_or_Hide ? <FaTrashRestoreAlt /> : <FaPencilAlt />}
            <button
                className="btn"
                style={Show_or_Hide ? { backgroundColor: ElementColor[1], border: `1px solid ${ElementColor[0]}`, color: ElementColor[2] } : { backgroundColor: ElementColor[0], color: ElementColor[1] }}
                onClick={WhenClickOn}
            >{Show_or_Hide ? Show_Close_Text[0] : Show_Close_Text[1]}
            </button>
        </>
    )
};
TaskButton.defaultProps = {
    Show_Close_Text: ["متن پیشفرض بستن ", "متن پیشفرض باز کردن"],
    ElementColor: ["tomato", "white", "black"]
};
TaskButton.propTypes = {
    Show_Close_Text: PropTypes.array,
    ElementColor: PropTypes.array,
}

export default TaskButton;

// جزو اولین کامپوننت های طراحی شده توسط مهدی در اوایل یادگیری ری اکت