import React , {useState,useContext}  from 'react'


const ModalContext = React.createContext()

export function useModal(){
    return useContext(ModalContext)
}

export function ModalProvider({children}) {

    const [OpenModal, setOpenModal] = useState(false)

    const ToggleModal = (event) => {
        event.preventDefault()
        setOpenModal(!OpenModal)
    }

    const value = {
        OpenModal,
        ToggleModal
    }



    return <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
}