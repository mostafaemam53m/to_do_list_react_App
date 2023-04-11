import React from "react";
import './todolist.css';

const Todolist = (props) => {
    const deletItem = props.deletItem;

    let allitems = props.send_items;
    let test = Object(allitems).length;
    let length = Object(allitems).length;
    // console.log(test)

    let data = length ? (allitems.map((e) => {
        return (
            <div key={e.id}>
                {/* <span>{e.id}</span> */}
                <span>{e.name}</span>
                <span>{e.age}</span>
                <span onClick={() => { deletItem(e.id) }}>&times;</span>


            </div>
        )
    })) :
        (<div className="massage_no_items"><p>no items to show</p></div>
        )
    return (
        <div className="all_data_of_table">
            <div className="header_of_table">
                <span>Name</span>
                <span>Age</span>
                <span>Delet</span>
            </div>
            <div className="divOfState">
                {data}

            </div>
        </div>
    )

}

export default Todolist;