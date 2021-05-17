import React, {useState} from 'react'
import Footer from '../components/footer/Index'
import Navbar from '../components/navbar/Index'
import Sidebar from '../components/sidebar/Index'
import '../App.css'

function Templates(props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <body>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <div>{props.children}</div> 
            <Footer />     
        </body>
    )
}

export default Templates
