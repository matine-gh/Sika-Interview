export interface TODOInterface {
    id?: string,
    done: boolean,
    title: string,
}

export interface ModalPropsInterface {
    data: TODOInterface | null,
    setModalIsOpen: (arg: boolean)=>void,
}