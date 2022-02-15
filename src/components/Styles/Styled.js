import styled from "styled-components";
import Bg2 from '../../assets/background-img/Background1.png';

export const HeaderStyle = styled.div`
    div.encurt{
        width: 30vw;
        @media(max-width: 500px){
                width: 100%;
            } 
    }
    p.jayce{
        font-size: 1.2rem !important;
            @media(max-width: 500px){
                font-size: 0.9rem !important;
            }
    }
    h2.Subtittle{
        font-weight: bold;
        font-size: 1.6rem;
        margin-bottom: 5vh;
    }
    h1.colorWhite{
        color: #7495b6 !important;
    }
    h1.colorBlack{
        color: #0a417e !important;
        
    }
    div.encurt-2{
        width: 40vw;
        @media(max-width: 500px){
                width: 100%;
            } 
    }
    div.space-between{
        display: flex;
        justify-content: space-between;
        align-items: center;      
            @media(max-width: 500px){
                margin-top: 5vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }  
    }
    div.space-between2{
        display: flex;
        justify-content: space-between;
        align-items: center;      
        @media(max-width: 500px){
               display: flex;
               flex-direction: column;
               justify-content: start;
               align-items: start;
               margin-left: 10vw;
            }  
        }
        div.space-between3{
            display: flex;
            justify-content: space-between;
            align-items: center;      
                @media(max-width: 500px){
                    margin-top: 5vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }  
        }
    div.SectionSobre{
        background-image: url(${Bg2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        color: white;
    }
    div.Windowslide{
        overflow-y: scroll;
        margin-right: 10vw;
    }
    img.logo{
        width: 10vw;
            @media(max-width: 500px){
                width: 25vw;
            }
    }
    img.Gifs{
        width: 30vw;
        @media(max-width: 500px){
            width: 70vw;
            height: 70vh;
        }
    }
    div.section0{
        color: white;
        height: 100%;
    }
    div.flowpodcast{
        overflow-y: scroll
    }
    div.CardBronze{
        border: 3px solid #FF8C8C;
        border-radius: 10px;
        width: 25vw;
        height: 70vh;
        @media(max-width: 500px){
            width: 80vw;
            height: 20vh;
        }   
        p.F-1{
            font-size: 1.2rem;
            @media(max-width: 500px){
            font-size: 0.8rem;
            }
        }
    }
    div.CardPrata{
        border: 3px solid #2489FF;
        border-radius: 10px;
        width: 25vw;
        height: 70vh;   
        @media(max-width: 500px){
            width: 80vw;
            height: 20vh;
        }   
        p.F-1{
            font-size: 1.2rem;
            @media(max-width: 500px){
            font-size: 0.8rem;
            }
        }
    }
    textarea{
        border: none;
        width: 75vw;
        height: 25vh;
        @media(max-width: 500px){
            width: 80vw;
        }
    }
    input.Entrar{
        background-color: white;
        border-radius: 5px;
        border: none;
        width: 10vw;
        height: 5vh;
        font-weight: bold;
        color: #7EB3E3;
            &:hover{
                border: 2px solid white;
                background: #7EB3E3;
                color: white;
            }
        @media(max-width: 500px){
            width: 40vw;
            height: 10vh;
            font-size: 1.5rem;
        }
    }
    div.LeftCast{
        margin-left: 5vw;
    }
    div.spaceAgest{
        margin-right: 5vw;
        margin-left: 5vw;
    }
    input.InputInc{
        border: none;
        border-radius: 5px;
        width: 30vw;
        @media(max-width: 500px){
        width: 80vw;
        }
    }
    div.CardGold{
        border: 3px solid #FAFF00;
        border-radius: 10px;
        width: 25vw;
        height: 70vh;   
        @media(max-width: 500px){
            width: 80vw;
            height: 30vh;
        }   
        p.F-1{
            font-size: 1.2rem;
            @media(max-width: 500px){
            font-size: 0.8rem;
            }
        }
    }
    img.Imagecenter{
        width: 30vw;
        @media(max-width: 500px){
            width: 100vw;
        }
    }
    div.sectionBackgroundWhite{
        background-color: white;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
            div.RowInjector{
                display: flex;
                flex-direction: column;
                
            }
            p{
                font-size: 1.3rem;
                @media(max-width: 400px){
                    font-size: 1.2rem;
                }
            }
            img.imgIdeia{
               width: 40vw;
                @media(max-width: 500px){
                    width: 100vw;
                }
            }
    }
    div.sectionWhite{
        background-color: white;
        height: 200vh;
    }
    div.section3{
        background-color: #7EB3E3;
        color: white;
        height: 100%;
            img.imgPrograming{
                width: 35vw;
            }
    }
    
    div.section4{
        background-color: white;
        color: black;
        height: 100%;
            img.imgPrograming{
                width: 35vw;
            }
    }
    div.section2{
        background-color: green;
        color: white;
        height: 100%;
    }
    div.Card{
        background-color: #76D7C4 ;
        height: 45vh;
        width: 30vw;
        border-radius: 5px;
        margin-left: 1vw;
        margin-right: 1vw;
            @media(max-width: 400px){
                margin-left: 0;
                margin-right: 0;
                height: 25vh;
                margin-top: 1vh;
                width: 80vw;
            }
    }
    div.DisplayCard{
        display: flex; 
        justify-content: center;
            @media(max-width: 400px){
                display: grid;
                justify-content: center;
            }
    }
    h2 , h3 , h4{
        /* font-family: 'The Nautigal', cursive; */
        font-family: 'Montserrat', sans-serif;
    }
    h1{
        font-family: 'Raleway', sans-serif;
    }
    p{
        font-family: 'Raleway', sans-serif;
    }
    img.IconService{
        width: 10vw;
    }s
    p.Headersubtilte{
        font-size: 1.5rem;
        text-shadow: 0px 2px 0px rgb(0, 0, 0.002);
            @media(max-width: 800px){
                font-size: 1rem;
            }
            @media(max-width: 400px){
                font-size: 0.8rem;
            }
    }
    h1.HeaderTittle{
        font-size: 4rem;
        font-weight: bold;
        text-shadow: 0px 4px 0px rgb(0, 0, 0.002);
            @media(max-width: 800px){
                font-size: 3rem;
            }
            @media(max-width: 400px){
                font-size: 2.5rem;
            }
    }
    h1.about{
        font-weight: bold;
    }
`
export const NavBarStyle = styled.nav`

`