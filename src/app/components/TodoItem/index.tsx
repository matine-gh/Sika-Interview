import {TODOInterface} from "@/app/components/TODOlist/todo.intrface";
import TodoModal from "@/app/components/TodoModal";
import {useEffect, useState} from "react";
import {editTodoLoading} from "@/store/editTodo/action";
import {useDispatch} from "react-redux";

export default function TodoItem({...todoItem}: TODOInterface) {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    const onChecked = () => {
        dispatch(editTodoLoading({
            id: todoItem.id,
            done: !todoItem.done,
            title: todoItem.title
        }))
    }
    return (
        <div className={'border-primary-12 border-2'}>
            <button onClick={()=>setModalIsOpen(true)}>edit</button>
            <p>{todoItem.title}</p>
            <input type={"checkbox"}
                   checked={todoItem.done}
                   onChange={onChecked}/>
            {modalIsOpen && <TodoModal data={todoItem} setModalIsOpen={setModalIsOpen}/>}
        </div>
    )
}