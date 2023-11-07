import React from 'react'
import styles from "./Navigation.module.css"
import { Container } from '@material-ui/core'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src='/images/Frame 2 1.png' alt='logo image' />
        </div>
        <ul>
            <li>Home</li>          
            <li>About</li>
            <li>Contact</li>  
        </ul>
    </nav>
  )
}

export default Navigation
