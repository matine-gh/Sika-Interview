import {ModalPropsInterface} from "@/app/components/TODOlist/todo.intrface";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTodoInit, createTodoLoading} from "@/store/createTodo/action";
import {editTodoInit, editTodoLoading} from "@/store/editTodo/action";

export default function TodoModal({data, setModalIsOpen}: ModalPropsInterface) {
    const [done, setDone] = useState<boolean>(data?.done || false);
    const [title, setTitle] = useState<string>(data?.title || '');


    const dispatch = useDispatch();
    const newTodoStates = useSelector((state: any)=>state.createTodo);
    const changedTodoStates = useSelector((state: any)=>state.editTodo);

    const submit = () => {
        if (data?.id) {
            dispatch(editTodoLoading({
                id: data.id,
                done: done,
                title: title,
            }))
        }else {
            dispatch(createTodoLoading({
                done: done,
                title: title,
            }))
        }
    }

    useEffect(() => {
        if (newTodoStates.isDone) {
            setModalIsOpen(false)
            dispatch(createTodoInit())
        }
    }, [newTodoStates.isDone]);

    useEffect(() => {
        if (changedTodoStates.isDone) {
            setModalIsOpen(false)
            dispatch(editTodoInit())
        }
    }, [changedTodoStates.isDone]);
    const router = useRouter()
    return (
        <div
            className={"bg-secondary-17 bg-opacity-40 fixed inset-0 w-full h-full z-50"}>
            <div
                className={"bg-success-01 right-0 rounded-2xl z-2 max-w-112 m-auto shadow-lg absolute inset-0 h-fit pb-14 pt-8 text-center max-w-lg md:w-1/2 max-md:w-11/12"}>
                <div className={'container'+' '+'text-success-10 text-center space-y-8'}>
                    <input type={"checkbox"} checked={done} onChange={()=>setDone(!done)}/>
                    <label>Todo Title: </label>
                    <input type={"text"}
                           placeholder={'Todo Title'}
                           value={title}
                           onChange={(event)=>setTitle(event.target.value)}/>
                    <button className={'primary-button'+' '+'min-w-32'}
                            onClick={()=>setModalIsOpen(false)}
                    >Cancel</button>
                    <button onClick={()=>submit()}>Submit</button>
                </div>
            </div>
        </div>
    )
}