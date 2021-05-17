import React from 'react'

function Contact() {
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
            <form action="">
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Message" />
                <button type='submit'
                className="req--btn"
              >
                <a href="">Send</a>
              </button>
            </form>
        </div>
    </main>  
        </>
    )
}

export default Contact
