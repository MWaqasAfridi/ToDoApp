import React, { useState } from 'react'

const Todos = () => {
    const [initial, setInitial] = useState();
    const [data, setData] = useState([]);

    const getInput = (event) => {
        // console.log(event.target.value);
        setInitial(event.target.value)
    }
    const getData = () => {
        //   console.log(initial);
        let store = [...data, initial]
        // console.log(store)
        setData(store);
        setInitial("")
    }
    const deleteTask = (index) => {
        //   console.log(index);
        const filterData = data.filter((currelement, id) => {
            return id != index
        })
        setData(filterData);
    }

    return (
        <>
            <div className="container">
                <div className="inputTask">
                    <h1>Todo App</h1>
                    <input type="text"
                        placeholder='Enter Your Task ...'
                        onChange={getInput}
                        value={initial}
                    />
                    <button onClick={getData}>Add</button>
                    <div>
                        {
                            data.map((currValue, index) => {
                                return (
                                    <>
                                        <div className="taskData">
                                            <p>{currValue}<span onClick={() => deleteTask(index)}>&times;</span></p>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Todos