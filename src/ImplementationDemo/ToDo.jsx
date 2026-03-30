import React, { useState } from 'react'

const ToDo = () => {

    const initialTasks = [
        { id: 0, text: 'Visit Kafka Museum', done: true },
        { id: 1, text: 'Watch a puppet show', done: false },
        { id: 2, text: 'Lennon Wall pic', done: false },
    ];

    const [taskslist, setTaskslist] = useState([...initialTasks]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === "") return;

        setTaskslist([
            ...taskslist,
            {
                id: Date.now(),
                text: newTask,
                done: false,
            },
        ]);

        setNewTask('');
    }

    const updateTask = (taskID, updatedTask) => {

        setTaskslist(
            taskslist.map((task) => 
                task.id === taskID ? { ...task, text: updatedTask } : task
            )
        )
    }

    const deleteTask = (taskID) => {
        setTaskslist(taskslist.filter((t) => t.id !== taskID));
    }

    const toggleTaskCompletion = (taskID) => {
        setTaskslist(taskslist.map(task =>
            task.id
                === taskID ? { ...task, done: !task.done } : task));
    };

    return (
        <div>
            <div>
                <label>Add a task: </label>
                <input name="add task" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                {taskslist && taskslist.length > 0 &&
                    taskslist.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                            toggleTaskCompletion={toggleTaskCompletion}
                        />
                    ))}
            </div>
        </div>
    )
}

const Task = (props) => {
    const { task, updateTask, deleteTask, toggleTaskCompletion } = props

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEdit = () => {
        if (isEditing) {
            updateTask(task.id, editedText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '5px 0', padding: '5px 0' }}>
            <input type="checkbox" checked={task.done} onChange={() => toggleTaskCompletion(task.id)} />
            {isEditing ?
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                /> :
                <label style={{ textDecoration: task.done ? 'line-through' : 'none' }} >{task.text}</label>
            }
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default ToDo