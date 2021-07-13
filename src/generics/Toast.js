import React from 'react'
import { ImCancelCircle } from "react-icons/im";


function Toast({toggle, toast}) {
    let message
    let toastClass = toast.status === 'error' || toast.status === 'server_error' ? 'error' : 'success'
    if (toast.status == 'success') {
        message = "Thank you for contacting cityTech. A specialist would get to you shortly"
    }
    if (toast.status == 'subscribed') {
        message = "Thank you for Subscribing. Get ready for the latest Tech insights"
    }
    if (toast.status == 'error') {
        message = "Please ensure to fill all fields, Thank you."
    }
    if (toast.status == 'server_error') {
        message = "Sorry there was an error sending your message, please check connection and try again"
    }
    
    return (
        <div className={`toast ${toastClass}`}>
            <div className='cancel'><ImCancelCircle onClick={toggle}/></div>
            <p>{message}</p>
        </div>
    )
}

export default Toast
