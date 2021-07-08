import React, {useState, useEffect} from 'react'
import { FooterContainer, FooterForm, FooterItem, FooterLinks, FooterList, SocialLinks, FooterLink } from './FooterElements'
import {SiTwitter, SiFacebook} from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import Toast from '../../generics/Toast'


function Footer() {

    const [subscriber, setSubscriber] = useState('');
    const [toast, setToast] = useState({show: false, status: ''})

    useEffect(() => {
        if(toast.show){
            setTimeout(() => {
                setToast({...toast, show: false})
            }, 5000);
        }
      }, [toast])

      const toggleToast = () => setToast({...toast, show: !toast.show})
      
      const subscribed = (e) => {
        e.preventDefault()
        setToast({show: true, status: 'subscribed'})
    }

    return (
        <>
            <FooterContainer>
                <FooterLinks>
                    <FooterList>
                        <FooterItem>
                            <FooterLink to="/about">ABOUT US</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/services">OUR SERVICES</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to="/blog">BLOG</FooterLink>
                        </FooterItem>
                    </FooterList>
                    <SocialLinks>
                        <SiFacebook />
                        <SiTwitter />
                        <AiFillInstagram />
                    </SocialLinks>
                </FooterLinks>
                <FooterForm>
                    <p>Be the first to see new blog posts</p>
                    <form onSubmit={subscribed}>
                        <input type="text" placeholder="Your email address" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </FooterForm>
                {toast.show ? <Toast toast={toast} toggle={toggleToast}/> : ""}
            </FooterContainer>
        </>
    )
}

export default Footer
