import React from 'react'
import { ImCancelCircle } from "react-icons/im";


function Toast({toggle, toast}) {
    let message
    if (toast.status == 'success') {
        message = "Thank you for contacting cityTech. A specialist would get to you shortly"
    }
    if (toast.status == 'error') {
        message = "Please ensure to fill all fields, Thank you."
    }
    if (toast.status == 'server_error') {
        message = "Sorry there was an error sending your message, please check connection and try again"
    }
    
    return (
        <div className={`toast ${toast.status == 'success'? 'success' : 'error'}`}>
            <div className='cancel'><ImCancelCircle onClick={toggle}/></div>
            <p>{message}</p>
        </div>
    )
}

export default Toast
