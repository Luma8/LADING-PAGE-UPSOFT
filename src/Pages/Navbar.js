import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/logoUpsoft.png';

export default function Navbar() {
    
    const navigate = useNavigate();

    const [isopen, setIsopen] = useState(false);
    const [navBar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <NavBarStyled>
            <nav className={navBar ? 'Navbar-Active' : 'Navbar'}>
                <Logo src={logo} alt="logo" />
                <Hamburger onClick={() => setIsopen(!isopen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isopen={isopen}>
                    <MenuLink onClick={() => navigate('/home')}>INICIO</MenuLink>
                    <MenuLink onClick={() => navigate('/sobre')}>SOBRE</MenuLink>
                    <MenuLink onClick={() => navigate('/service')}>SERVIÇOS</MenuLink>
                    {/* <MenuLink onClick={() => navigate('/port')}>PORTFÓLIO</MenuLink> */}
                    <MenuLink onClick={() => navigate('/cont')}>CONTATO</MenuLink>
                    <MenuLink onClick={() => navigate('/workUs')}>TRABALHE CONOSCO</MenuLink>
                </Menu>
            </nav>
        </NavBarStyled>
    );
}

const NavBarStyled = styled.nav`
    nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 2rem;
    z-index: 1 !important; 
    position: fixed;
}
    nav.Navbar{
        transition: all 0.3s ease-in;
        background: transparent;
        @media(max-width: 800px){
            background-color: black;
        }
    }
    nav.Navbar-Active{
        transition: all 0.3s ease-in;
        background-color: black;
    }
   
`

const Logo = styled.img`
    width: 6vw;
        @media(max-width: 800px)
        {
            width: 10vw;
        }
`
const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
        span{
            height: 2px;
            width: 25px;
            background: white;
            margin-bottom: 4px;
            border-radius: 5px;
        }
        @media(max-width: 768px){
            display: flex;
        }
`
const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in;
        &:hover{
            color: #369AA8;
        }
`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
        @media(max-width: 768px){
            overflow: hidden;
            flex-direction: column;
            width: 100%;
            max-height: ${({ isopen }) => (isopen ? "300px" : "0")};
            transition: max-height 0.3s ease-in;
        }
`
