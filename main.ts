#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
let todoList: string [] = [];
let condition = true;
console.log(chalk.blue("\t <<<=============================================>>>"));

  console.log(chalk.magenta("\n \t Welcome to Muhammad Talha -Todo-List Application \n"));

  console.log(chalk.blue("\t <<<=============================================>>>"));

let main = async () => {
  while(condition){
    let option = await inquirer.prompt([
      {
        name :"choices",
        type: "list",
        message : " Select an option you want to do :",
        choices : ["Add Task","Delete Task","Update Task","View Todo-List","Exist"]
      }
    ]);
    if (option.choices === "Add Task"){
      await addTask ();
    }
    else if(option.choices === "Delete Task"){
      await deleteTask ();
    }
    else if (option.choices === "Update Task"){
      await updateTask ();
    }
    else if(option.choices ==="View Todo-List"){
       viewTask ();
    }
    else if (option.choices === "Exist"){
      condition = false ;
    }
  }
}

// Function to Add task in Todo List 
let addTask = async ()=> {
  let newTask = await inquirer.prompt([
    {
      name :"task",
      type : "input",
      message : "Enter your new Task",
    }
  ]);
  todoList.push(newTask.task);
  console.log(`\n ${newTask.task} Task is added Successfully in Todo-List `);
}

// view to all Todo List Tasks
let viewTask = () => {
  console.log("Your Todo List");
  todoList.forEach((task,index)=>{
    console.log(`${index + 1}: ${task}`)
  })
}

// Function to delete a Task from List 
let deleteTask = async () => {
  await viewTask ();
  let taskIndex = await inquirer.prompt ([
    {
      name : "index",
      type : "number",
      message : "Enter the index  no of Task you want to delete from List : "
    }
  ]);
  let deleteTask = todoList.splice(taskIndex.index - 1);
  console.log(`\n ${deleteTask} This message is deleted successfully from your Todo-List`)
}

//Function of update Todo List
let updateTask = async () => {
  await viewTask ()
  let update_Task_Index = await inquirer.prompt([
    {
      name : "index",
      type : "number",
      message : "Enter the index NO of Task you want to update :"
    },
    {
      name : "new_task",
      type : "input",
      message : "Now Enter new Task name : "
    }
  ]);
  todoList[update_Task_Index.index - 1] = update_Task_Index.new_task;
  console.log(`\n Task at index no ${update_Task_Index.index - 1} update succesfully [For update List check option "view To Do List"]`)
}

main ();