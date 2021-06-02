import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const FooterContainer = styled.div`
    width: 100%;
    background: black;
    min-height: 283px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    color: white;

    @media screen and (max-width: 768px) {
        height: 373px;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }

    @media screen and (max-width: 768px) {

    }

`
export const FooterLinks = styled.div`
    margin: 0 auto;


`

export const FooterList = styled.ul`
    list-style: none;
    display: flex;
    width: 265px;
    justify-content: space-between;
    margin-bottom: 30px;

`

export const FooterItem = styled.li`
    

`
export const FooterLink = styled(LinkR)`
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 52px;
    color: white;
    
`

export const SocialLinks = styled.div`
    width: 246px;
    margin-top: 30px;
    font-size: 25px;
    display: flex;
    justify-content: space-around;

`

export const FooterForm = styled.div`
    margin: 0 auto;
    margin-top: 50px;

p {
    font-size: 24px;
    line-height: 40px;
}

form {
    margin: 0 auto;
    width: auto;
}

input[type="text"] {
    width: 372px;
    height: 72px;
    padding-left: 30px;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 20px;
    line-height: 36px;
}

input[type="submit"] {
    width: 267px;
    height: 72px;
    border-radius: 60px;
    border: 1px solid black;
    cursor: pointer;
    margin-left: 30px;
    font-size: 24px;
    font-weight: 400;
    transition: .3s all ease-in-out;

    &:focus {
        outline: none;
        transform: scale(.95)
    }
}

@media screen and (max-width: 768px) {

    p {
        font-size: 22px;
        line-height: 37px;
        text-align: center;
    }

    input[type="text"] {
        width: 343px;
        height: 66px;
        font-size: 16px;
        line-height: 36px;
        margin-top: 0;
    }

    input[type="submit"] {
        width: 245px;
        height: 66px;
        margin-left: 10px;
        font-size: 22px;
    }
}

@media screen and (max-width: 414px) {

    p {
        font-size: 16px;
        line-height: 46px;
        text-align: center;
    }

    input[type="text"] {
        width: 207px;
        height: 48px;
        font-size: 16px;
        padding-left: 10px;
        line-height: 46px;
    }

    input[type="submit"] {
        width: 149px;
        height: 48px;
        // margin-left: 5px;
        font-size: 16px;
        
    }
}

`
