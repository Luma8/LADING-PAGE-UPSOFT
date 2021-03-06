import React from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky} from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
import ParticlesBackground from '../components/Styles/ParticlesBackground';
//imagens
import './styles.css';
import ServiceSuport from '../assets/Img/ServiceSuport.png';
import Portifolio from '../assets/Img/Portifoil.png'


export default function Portifoil() {
    return (
        <>
            <HeaderStyle>
                <NavBar />
                <ParticlesBackground />
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <div className="section0">
                            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, 200))}>
                                <div className="container">
                                    <h1 className="text-center HeaderTittle">
                                        PORTFÓLIO
                                    </h1>
                                    <img className='Imagecenter' src={Portifolio} alt="Portifolio"/>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <div className='section3'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1>Mussum Ipsum, cacilds vidis litro abe</h1>
                                    <div className='container space-between mt-5'>
                                        <img className='imgPrograming' src={ServiceSuport} alt="ServiceSuport"/>
                                        <div className='encurt-2'>
                                            <p>Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha
                                                terra sou euzis!Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
                                                Nam vulputate dapibus.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
                                                tristique interdum.Manduma pindureta quium dia nois paga.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                </ScrollContainer>
            </HeaderStyle>
            <Footer />
        </>
    )
}
