import React from "react";
import "./Buttion.css"
import {Link} from "react-router-dom"



const STYLES=["btn--primary","btn--outline","btn--test"]
const SIZES =['btn--medium',"btn--large"]


export const Buttion=({
    children,type,onClick,buttionStyle,buttonSize
})=>{
    const  checkButtionStyle =STYLES.includes(buttionStyle)?buttionStyle:STYLES[0]

    const checkButtonSize =SIZES.includes(buttonSize)?buttonSize:SIZES[0]


    return(
        <Link to="/sign-up" className="btn-mobile">
            <button className={`btn ${checkButtionStyle} ${checkButtonSize}`} onClick={onClick}
            type={type}
            >
            {children}


            </button>
        </Link>
    )
}