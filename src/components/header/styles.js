import React from "react";
import styled from "styled-components";
import { Navbar } from "../navbar/navbar";
export const HeaderContainer = styled.div`
display: flex;
flex-direction:column;
background-color: black;
justify-content:space-around;
align-items:center;
width: 100%;
padding: 25px 0;
    gap:30px;
    



`

export const HeroContainer = styled.div`

    display:flex;
    
    width:80%;
    justify-content:center;
    align-items:center;
    text-align:center;
    border-color:blue;
    border-style:solid;
    border-radius:10px;
`

export const HeroText = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:60%;
    padding-bottom:50px;
    
h1{
    margin-top:2rem;
        text-align:center;
        font-size:40px;
        color:white;
}
p{
    display:flex;
    justify-content:center;
    text-align:center;
    font-size:25px;
    width:50%;
    color:white;
    

}


`
export const HeroImage = styled.div`

    padding:15px;        
    img{
        border-radius:40px;
        width:500px;
        height:350px;
    }

`

