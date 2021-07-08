import React from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

function TopArrow({url}) {

    return (
        <>
            <Link to={url} className="arrow_body">
                <RiArrowUpSLine className="arrow" />
            </Link>  
        </>
    )
}

export default TopArrow
