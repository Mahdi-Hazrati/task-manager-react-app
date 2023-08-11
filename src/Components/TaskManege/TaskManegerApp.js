import "./TaskManegerApp.css";
import HeaderSection from "./HeaderText";
import TaskButton from "./TaskButton";
import TaskViewer from "./Tasks";
import AddTaskMain from "./AddTaskToList";
import React, { useState, useEffect } from "react";

function Main() {
  const [ShowAddNewTaskForm, setShowAddNewTaskForm] = useState(false)
  const [tasks, setTask] = useState([])
  // ---------------------------------//
  useEffect(() => {
    const GetTask = async () => {
      const TaskFromWebServer = await fetchTask()
      setTask(TaskFromWebServer)
    };
    GetTask()

  }, [])

  const fetchTask = async () => {
    const result = await fetch("http://localhost:8001/task")
    const data = await result.json()
    return data

  }
  // ---------------------------------//


  // این تابع تسک ها رو پاک می کنه
  const DeleteTask = async (Task_ID) => {
    await fetch(`http://localhost:8001/task/${Task_ID}`, { method: 'DELETE', })
    console.log(`تسک با آیدی ${Task_ID} از لیست تسک ها پاک شد`);
    setTask(tasks.filter((Task) => Task.ID !== Task_ID));
  };
  //  این فانکشن تسک ها رو انتخاب  می کنه
  const ToggleTaskReminder = (Toggle_Task_ID) => {
    console.log(`تسک با آیدی ${Toggle_Task_ID} از لیست تسک ها انتخاب شد`);
    setTask(tasks.map((Task) => (Task.ID === Toggle_Task_ID ? { ...Task, REMINDER: !Task.REMINDER } : Task)));
  };
  //  این فانکشن تسک های جدید اضافه می کنه
  const AddTask = async (NEWTask) => {
    const result = await fetch('http://localhost:8001/task', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(NEWTask)
    })
    const newData = await result.json()
    setTask([...tasks, newData])
  };
  //  این تابع بخش فرم را خاموش روشن می کند
  const TaskAddFormShow = () => {
    setShowAddNewTaskForm(!ShowAddNewTaskForm)
  }



  return (
    <div className="container">
      <header className="header">

        <HeaderSection innerText="کار های روزمره" />
        <TaskButton
          // [0]: Background Wheb close && BorderColor when Active
          // [1]: Background When Active
          // [2]: Text color  When close
          ElementColor={["tomato", "white", "gray"]}
          Show_Close_Text={["بستن", "جدید"]}
          WhenClickOn={TaskAddFormShow}
          Show_or_Hide={ShowAddNewTaskForm}
        />
      </header>
      {/* زمانی که داخل این عبارت trueشود فرم نمایش داداه میشود */}
      {ShowAddNewTaskForm && <AddTaskMain WhenAddTask={AddTask} />}
      {tasks.length > 0 ? (
        <TaskViewer
          ListOfTask={tasks}
          WhenClickOnTrash={DeleteTask}
          OnToggleTask={ToggleTaskReminder}
        />
      ) : (
        "هیچ تسکی وجود ندارد"
      )}
    </div>
  );
}
export default Main;
