import React from "react";
import "./css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import AddNewTask from "../pages/home/AddNewTask";
import FilterButtons from "../pages/home/FilterButtons";
import FilterInputField from "../pages/home/FilterInputField";
import ListTasks from "../pages/home/ListTasks";
import TaskStatusOverview from "../pages/home/TaskStatusOverview";


function Home() {
  return (
    <>
      <div className="home-form-container ">
        <Header />
        <AddNewTask />
        <FilterButtons />
        <FilterInputField/>
        <ListTasks></ListTasks>
        <TaskStatusOverview></TaskStatusOverview>
      </div>
    </>
  );
}

export default Home;


