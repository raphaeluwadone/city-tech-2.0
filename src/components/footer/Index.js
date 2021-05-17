import React from 'react'
import { FooterContainer, FooterForm, FooterItem, FooterLinks, FooterList, SocialLinks, FooterLink } from './FooterElements'
import {SiTwitter, SiFacebook} from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'

function Footer() {
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
                    <form>
                        <input type="text" placeholder="Your email address" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </FooterForm>
            </FooterContainer>
        </>
    )
}

export default Footer
