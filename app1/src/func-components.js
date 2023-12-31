import React from 'react'
import {Calendar} from './class-components';
export function Header() {
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        textDecoration: 'none'
    }
    return (
        <div style={{ backgroundColor: '#ccc' , margin: 0 ,position:'fixed' , top:0 , width:'100%' }}>
            <a href='/' style={aStyle}>Home</a> |&nbsp;
            <a href='/' style={aStyle}>React</a> |&nbsp;
            <a href='/' style={aStyle}>React Native</a>
            <div style={{textAlign:'end' , margin: '7px' ,position:'fixed' , top:0 , width:'98%' , color:'white'}}>
                <Calendar />
            </div>
        </div>
    )
}

export function Content() {
    return (
        <div style={{ textAlign: 'center'}}>
            <h2>Hello <br />react & React Native</h2>
            <br /><br /><br />
        </div>
    )
}

export const Footer = () =>  {
    return (
        <div style={{ textAlign: 'center' , background:'gray' ,margin: 0 ,marginTop: '3rem',position:'fixed',bottom: 0,width:'100%' }}>
            &copy; {new Date().getFullYear()} Apinun Umbao @KMUTNB:EnET-C All rights reserved
        </div>
    )
}

