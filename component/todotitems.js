import React, { Component } from "react";
import "./todoitems.css";

class Todoitems extends Component {
    state = {
        id: "",
        name: "",
        age: ""
    }
    getDataOfInput = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })



    }

    FOfForm = (e) => {
        if (e.target.name.value === "") {
            return false;
        } else if (e.target.age.value === "") {
            return false;
        } else {
            e.preventDefault();
            this.state.id = Math.random()
            let dataOfProps = this.props.sendToTodo;

            dataOfProps(this.state);
            this.setState({
                id: "",
                name: "",
                age: ""
            })

        }

    }
    render() {

        return (
            <div>

                <form action="" onSubmit={this.FOfForm}>
                    <input type="text" placeholder="Enter the name .." onChange={this.getDataOfInput} id="name" value={this.state.name}></input>
                    <input type="number" placeholder="Enter the age .." onChange={this.getDataOfInput} id="age" value={this.state.age}></input>
                    <input type="submit" value="add"></input>

                </form>
            </div>
        )
    }
}

export default Todoitems;