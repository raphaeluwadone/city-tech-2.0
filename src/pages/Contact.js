import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import Toast from '../generics/Toast';

function Contact() {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [toast, setToast] = useState({show: false, status: ''})

    function formSubmit(e) {
        e.preventDefault();

        if(message && phone && email){
            emailjs.sendForm('service_j5qimqd', 'template_j8vwjmi', e.target, 'user_zets8ccql8GmuvqEeOi3c')
            .then((result) => {
                console.log(result.text);
                setToast({show: true, status: 'success'})
            }, (error) => {
                console.log(error.text);
                setToast({show: true, status: 'server_error'})
            });
            setEmail('');
            setMessage('');
            setPhone('');
        }

        else {
            setToast({show: true, status: 'error'})
            console.log(message);
        }
      }

      useEffect(() => {
        if(toast.show){
            setTimeout(() => {
                setToast({...toast, show: false})
            }, 5000);
        }
      }, [toast])

      const toggleToast = () => setToast({...toast, show: !toast.show})
          
      

    return (
        <>
           <main className="main__contact">
        <div className="contact__content">
            <h2>
                Have A Question? Want To Get Started? 
            </h2>
            <p>
                Fill this form and a CityTech Pro will be in contact with you right away.
            </p>
        </div>
        <div className="contact__form">
            <form onSubmit={formSubmit}>
                <input type="email" name='sender_email' placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="phone" name='phone' placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" name='message' placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type='submit'
                className="req--btn"
              >
                Send
              </button>
            </form>

        </div>
        {toast.show ? <Toast toast={toast} toggle={toggleToast}/> : ""}
    </main>  
        </>
    )
}

export default Contact
