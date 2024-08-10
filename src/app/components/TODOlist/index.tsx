'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTodosLoading} from "@/store/getTODOHistory/action";
import {TODOInterface} from "@/app/components/TODOlist/todo.intrface";
import TodoItem from "@/app/components/TodoItem";
import {createTodoLoading} from "@/store/createTodo/action";
import TodoModal from "@/app/components/TodoModal";
export default function TODOlist() {

    const [history, setHistory] = useState<TODOInterface[]>();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    const todosHistoryStates = useSelector((state: any)=>state.todosHistory);
    const newTodoStates = useSelector((state: any)=>state.createTodo);
    const changedTodoStates = useSelector((state: any)=>state.editTodo);


    useEffect(() => {
        dispatch(getTodosLoading())
    }, [newTodoStates.isDone, changedTodoStates.isDone ]);

    useEffect(() => {
        console.log('todosHistoryStates',todosHistoryStates.response)
        setHistory(todosHistoryStates.response)
    }, [todosHistoryStates.isDone]);

    return (
        <div>
            <h1>TO DO :</h1>
            <button className={'text-5xl'} onClick={()=>setModalIsOpen(true)}>+</button>
            <ul className={'p-16 space-y-3'}>
                {
                    Object.values(history||[]).map((item)=>{
                        return (
                            <li key={item.id}>
                                <TodoItem {...item} />
                            </li>
                        )
                    })
                }
            </ul>
            {modalIsOpen && <TodoModal data={null} setModalIsOpen={setModalIsOpen}/>}
        </div>
    )
}