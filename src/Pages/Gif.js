import React from 'react'
import styled from 'styled-components';

import gif1 from '../assets/Gifs/gif1.gif';
import gif2 from '../assets/Gifs/gif2.gif';
import gif3 from '../assets/Gifs/gif3.gif';
import gif4 from '../assets/Gifs/gif4.gif';
import gif5 from '../assets/Gifs/gif5.gif';
import gif6 from '../assets/Gifs/gif6.gif';

export default function Gif() {

    return (
        <Styles>
            <div className='sectionWhite'>
                <div className='container'>
                    <h1>Tecnologias</h1>
                    <div className='container Windowslide space-between mt-5'>
                        <img src={gif1} alt="gif1" className="Gifs" />
                        <img src={gif4} alt="gif1" className="Gifs" />
                        <img src={gif3} alt="gif1" className="Gifs" />
                    </div>
                    <div className='container Windowslide space-between mt-5'>
                        <img src={gif2} alt="gif1" className="Gifs" />
                        <img src={gif5} alt="gif1" className="Gifs" />
                        <img src={gif6} alt="gif1" className="Gifs" />
                    </div>
                </div>
            </div>
        </Styles>
    )
}

const Styles = styled.div`
    div.sectionWhite{
        position: relative;
        width: 100%;
        padding-top: 5%;
        padding-bottom: 5%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
            div.space-between{
                display: flex;
                justify-content: space-between;
                align-items: center;
                    @media(max-width: 500px){
                        flex-direction: column;
                    }
            }
            img.Gifs{
                width: 25vw;
                border-radius: 10px;
                @media(max-width: 500px){
                    width: 100vw;
                    border-radius: 0px;
                    margin-top: 2vh;
            }
    }
`