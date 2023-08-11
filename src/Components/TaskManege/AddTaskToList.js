import { useState } from "react";

const AddTaskMainRunTime = ({ WhenAddTask }) => {
  const [TEXT, setText] = useState('')
  const [DATE, setDay] = useState('')
  const [REMINDER, setReminder] = useState(false)
  // -------------------------------------------//
  const SaveNewTask = (e) => {
    e.preventDefault();
    if (!Text || !DATE) {
      alert("لطفا یک مورد را وارد کنید")
      return;
    }
    WhenAddTask({ TEXT, DATE, REMINDER })
    setText("")
    setDay("")
    setReminder(false)

  };
  return (
    <form className="add-form" onSubmit={SaveNewTask}>
      <div className="form-control">
        <label>تسک</label>
        <input
          type="text"
          placeholder="اضافه کردن تسک "
          value={TEXT}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>روز</label>
        <input
          type="text"
          placeholder="اضافه کردن روز "
          value={DATE}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>اضافه کردن یادآور</label>
        <input
          type="checkbox"
          checked={REMINDER}
          value={REMINDER}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="SubmitButton">
        <input
          type="submit"
          value="اضافه کردن"
          className="btn btn-block"
        />

      </div>

    </form>
  );
};

export default AddTaskMainRunTime;
;
