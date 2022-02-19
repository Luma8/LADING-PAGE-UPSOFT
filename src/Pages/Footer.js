import React from 'react';
import styled from 'styled-components';
import Whatsaap from '../assets/Icons/Whatsaap.png';
import Instagram from '../assets/Icons/Instagram.png';
import Facebook from '../assets/Icons/Facebook.png';
import Linkedin from '../assets/Icons/Linkedin.png';

export default function Footer() {
    return (
        <FooterStyle>
            <footer>
                <div className='container'>
                    {/* <h1 className='text-center'>UPSOFT© 2022</h1>
                     */}
                    <div className='DOL'>
                        <h1>© 2021 Upsoft</h1>
                    </div>
                    <div className='rowS'>
                        <img src={Whatsaap} alt="Whatsaap"/>
                        <p>(83)9 3576-5032 ou (83) 988550479</p>
                    </div>
                    <div className='rowS'>
                        <img src={Instagram} alt="Instagram"/>
                        <p>@up.softwarehouse</p>
                    </div>
                    <div className='rowS'>
                        <img src={Facebook} alt="Facebook"/>
                        <p>https://www.facebook.com/profile.php?id=100075133330426</p>
                    </div>
                    {/* <div className='rowS'>
                        <img src={Linkedin} alt="Linkedin"/>
                        <p>(83)9 9999-9999</p>
                    </div> */}
                </div>
            </footer>
        </FooterStyle>
    );
}

const FooterStyle = styled.div`
    footer{
        background-color: black;
        position: absolute;
        width: 100%;
        padding-top: 5%;
        padding-bottom: 5%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
            h1{
                color: white;
                font-size: 20px;
            }
            div.rowS{
                display: block;
                /* justify-content:  */
            }
            div.DOL{
                display: flex;
                justify-content: center;
                align-items: center;
            }
    }
`
