import React from 'react';
import logo from '../../assets/logo-devflix.png'
import './menu.css'
import ButtonLink from '../../components/ButtonLink'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function Menu() {
    return (
        <header>
            <nav className="menu" >
                <Link to="/">
                    <img src={logo} alt="Logo DevFlix" className="logo"/>
                </Link>

                <Button as={ Link } to="/cadastro/video" className="buttonLink" >Novo video</Button>
            </nav>
        </header>
    )
}

export default Menu;