import { Component } from "react";
import TaskAddForm from "../TaskAddForm/TaskAddForm";
import ClearButton from "../ClearButton/ClearButton";
import Task from "../Task/Task";
import './app.sass'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {task:'Учить React', id: 1},
            ],
        }
    }
    deleteItem =(id)=>{
        this.setState(({data})=> {
            return {
              data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (task) => {
    
      if(!task){
        alert('Введите корректные данные!')
        return this.addItem;
      }

      const newItem = {
          task,
          id: this.maxId++
      }
  
      this.setState(({data}) => {
          const newArr = [...data, newItem];
          return {
              data: newArr
          }
      });
      console.log(this.maxId)
    }
  

    render(){
      const {data} = this.state;
      let totalNumTask = data.length;
        return (
            <div className="App">
                <header className="App_header">
                    <h1>Your to-do list</h1>
                </header>
                  
                <section className="App_wrapper">
                    <TaskAddForm onAdd={this.addItem}/>
                    <Task data = {data}/>
                    <ClearButton length = {totalNumTask}/>
                </section> 

                <footer className="App_footer">
                  <h2>Not everyone can truly succeed in everything. But success only comes with self-management and determination</h2>
                </footer> 
            </div>
        );
    }
}

export default App;