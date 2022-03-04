import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TodoList} from "./components/TodoList";

//types
type todoList = {
    id: string
    title: string
    filter: filterType
    tasks: task[]
}
export type filterType = 'all' | 'completed' | 'active'
export type task = {
    id: string
    title: string
    isDone: boolean
}

//reducers
const addTask = (todoListID: string, taskID: string, title: string) => {
    console.log(title)
}

function App() {
    const [todoLists, setTodoLists] = useState<todoList[]>([
            {
                id: v1(),
                title: "What to do",
                filter: 'all',
                tasks: [
                    {
                        id: v1(),
                        title: 'HTML',
                        isDone: true
                    },
                    {
                        id: v1(),
                        title: 'React',
                        isDone: false
                    }
                ]
            },
            {
                id: v1(),
                title: "What to Listen",
                filter: 'all',
                tasks: [
                    {
                        id: v1(),
                        title: 'Metallica',
                        isDone: true
                    },
                    {
                        id: v1(),
                        title: 'Offspring',
                        isDone: false
                    }
                ]
            }
        ]
    )

    return (
        <div>
            {todoLists.map(el =>
                <TodoList
                    key={el.id}
                    taskListID={el.id}
                    tasks={el.tasks}
                    todoListTitle={el.title}
                    addTask={addTask}
                />
            )}

        </div>
    );
}

export default App;
