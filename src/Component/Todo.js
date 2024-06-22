import React, { useState, useEffect } from 'react';
import "./style.css"
// import userEvent from '@testing-library/user-event';
// import { cleanup } from '@testing-library/react';

// local data ko wapes lane ke liye ishka upyog kitya janrha h 

const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [item, setItem] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);


    // add the item function 
    const addItem = () => {
        if (!inputData) {
            alert("plz fill the data");
        } else if (inputData && toggleButton) {
            setItem(
                item.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return {...curElem, name: inputData };
                    }
                    return curElem;
                })
            )

                
            setInputData("")
            setIsEditItem(null);
            setToggleButton(false);

        }else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            };
            setItem([...item, myNewInputData]);
            setInputData("");
        }
    };

    //edit butoom ko edit kr rhe h 
    const editItem = (index) => {
        const item_todo_edite = item.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edite.name)
        setIsEditItem(index);
        setToggleButton(true);
    }; 


    // how to delete Item section
    const deleteItem = (index) => {
        const updatedItem = item.filter((curElem) => {
            return curElem.id !== index;
        });
        setItem(updatedItem);
    }

    // remove all elements 
    const removeAll = () => {
        setItem([])
    }

    // Adding Data in local Storage 
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(item));
    }, [item]);




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
                        {toggleButton ? (
                            <i className="fas fa-edit" onClick={addItem}></i>
                        ) : (
                            <i className="fas fa-plus" onClick={addItem}></i>

                        )}

                    </div>


                    <div className="showItem">
                        {
                            item.map((curElem) => {
                                return (
                                    <div className="multiple-icon" key={curElem.id}>
                                        <input className="input-two" type="text" />
                                        <h4>{curElem.name}</h4>
                                        <i className="fas fa-edit" onClick={() => editItem(curElem.id)}></i>
                                        <i className="fas fa-trash-alt" onClick={() => deleteItem(curElem.id)}></i>
                                    </div>

                                );
                            })
                        }
                    </div>

                    <div className="showIcon">
                        <button className='btn' onClick={removeAll}>
                            checkList
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Todo








