import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TodoList} from "./components/TodoList";
import {CreateTodoList} from "./components/CreateTodoList";

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
                    },
                    {
                        id: v1(),
                        title: 'Redux',
                        isDone: false
                    },
                    {
                        id: v1(),
                        title: 'MobX',
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
                    },
                    {
                        id: v1(),
                        title: 'Slayer',
                        isDone: false
                    },
                    {
                        id: v1(),
                        title: 'Bon Jovi',
                        isDone: false
                    }
                ]
            }
        ]
    )

    //reducers
    const addTask = (todoListID: string, title: string) => {
        // console.log(title)
        setTodoLists(todoLists.map(el =>
                el.id === todoListID
                    ? {...el, tasks: [{id: v1(), title, isDone: false}, ...el.tasks]}
                    : el
            )
        )
    }

    function addNewTodoList(newListTitle: string) {
        setTodoLists([...todoLists, {id: v1(), title: newListTitle, filter: 'all', tasks: []}])
    }

    function changeFilter(todoListID: string, filter: filterType) {

        setTodoLists(todoLists.map(el =>
                el.id === todoListID
                    ? {...el, filter}
                    : el
            )
        )
    }

    function changeStatus(todoListID: string, taskID: string, isDone: boolean) {
        setTodoLists(todoLists.map(el => el.id === todoListID ? {
            ...el,
            tasks: el.tasks.map(t => t.id === taskID ? {...t, isDone: !isDone} : t)
        } : el))
    }

    function deleteTask(todoListID: string, taskID: string) {
        setTodoLists(todoLists.map(el => el.id === todoListID ? {...el, tasks: el.tasks.filter(t => t.id !== taskID)} : el))
    }

    function deleteTodoList(todoListID: string) {
        setTodoLists(todoLists.filter(el => el.id !== todoListID))
    }

    return (
        <div className='appWrap'>
            <CreateTodoList
                addNewTodoList={addNewTodoList}/>
            <div className={'todoListsWrapper'}>
                {todoLists.map(el =>

                    <TodoList
                        key={el.id}
                        taskListID={el.id}
                        tasks={el.tasks}
                        todoListTitle={el.title}
                        filter={el.filter}
                        addTask={addTask}
                        changeFilter={changeFilter}
                        deleteTodoList={deleteTodoList}
                        changeStatus={changeStatus}
                        deleteTask={deleteTask}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
