
import React, { Component } from "react";
import Todoitems from "./component/todotitems";
import Todolist from "./component/todolist";
import "./App.css";
class App extends Component {
  state = {
    items: [

      { id: 1, name: "mostafa", age: 25 },
      { id: 2, name: "mohamed", age: 20 },
      { id: 3, name: "ali", age: 21 },
      { id: 4, name: "yaser", age: 23 },

    ]
  }
  deletItem = (target) => {
    // console.log(target);
    let items = this.state.items;
    let target_item = items.findIndex((items) => {
      return items.id === target;
    })

    items.splice(target_item, 1);
    this.setState({
      items: items
    })

  }
  getStateFromTodo = (newState) => {
    this.state.items.push(newState);
    let allState = this.state.items;
    this.setState({
      items: allState
    })
    // console.log(newState);
    // console.log(this.state.items)



  }
  render() {
    return (
      <div className="App">

        <h1 className="title"><p>Todo list</p></h1>
        <div className="table">
          <Todolist send_items={this.state.items} deletItem={this.deletItem} />
          <Todoitems sendToTodo={this.getStateFromTodo} />
        </div>

      </div>
    )
  }

}

export default App;
