import React, { useState } from 'react';
import "./style.css"

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [item, setItem] = useState([]);

    // add the item function 
    const addItem = () => {
        if (!inputData) {
            alert("plz fill the data")
        } else {
            setItem([...item, inputData]);
            setInputData("");
        }
    };

    return (
        <>
            <div className="main">
                <div className="imges">
                    <figure>
                        <img src="img/icon.png" alt="icon" />
                        <figcaption>Add your items</figcaption>
                    </figure>

                    <div>
                        <input className="input-form" type="text" placeholder='Add your item' value={inputData} onChange={(Event) => setInputData(Event.target.value)} />
                    </div>

                    <div className='plus-icon'>
                        <i class="fas fa-plus" onClick={addItem}></i>
                    </div>


                    <div className="showItem">
                        {
                            item.map((curElem) => {
                                return (
                                    <div className="multiple-icon" key={inputData}>
                                        <input className="input-two" type="text" />
                                        <h4>{curElem}</h4>
                                        <i class="fas fa-edit"></i>
                                        <i class="fas fa-trash-alt"></i>
                                    </div>

                                );
                            })
                        }
                    </div>
                    
                    <div className="showIcon">
                        <button className='btn'>checkList</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Todo