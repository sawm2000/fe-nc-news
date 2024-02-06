import { useState } from "react"

function Expand ({children}){
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen (){
        setIsOpen((currentIsOpen)=> !currentIsOpen)
    }

    return(
        <>
        <button onClick={handleOpen}>
        {isOpen ? "Hide" : "Add comment"}
        </button>
        <p>{isOpen ? <div>{children}</div> : null}</p>
        </> 
    )


}

export default Expand