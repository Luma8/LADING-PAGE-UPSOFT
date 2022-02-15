import React, { useRef } from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Zoom } from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
import ParticlesBackgroundBlack from '../components/Styles/ParticlesBackgroundBlack';
import emailjs from '@emailjs/browser';
//imagens
import './styles.css';
import ServiceSuport from '../assets/Img/ServiceSuport.png';
import Portifolio from '../assets/Img/Portifoil.png'
import ContatoSuport from '../assets/Img/ContatoSuport.png';
import { MdComputer } from 'react-icons/md';


export default function Contacts() {
    //Debugs Particles

    //Animation's
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_0j332qp', 'template_c2t0x09', form.current, 'user_wUF2hsJZIHUZJ6wNGh4X5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_0j332qp',
    //         'template_c2t0x09',
    //         e.target,
    //         'user_wUF2hsJZIHUZJ6wNGh4X5'
    //     ).then(res=> {
    //         console.log(res);
    //     }).catch(err=> console.log(err))
    // }

    return (
        <>
            <HeaderStyle>
                <NavBar />
                <ParticlesBackgroundBlack />
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <div className="section0">
                            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, 200))}>
                                <div className="container">
                                    <h1 className="text-center HeaderTittle">
                                        CONTATO
                                    </h1>
                                    <img className='Imagecenter' src={ContatoSuport} />
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
                                    <h1>Entre em contato</h1>
                                    {/* Formulario */}
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className='space-between2 spaceAgest mt-4'>
                                            <div className='d-grid'>
                                                <h4>Nome</h4>
                                                <input type="text" name="name" className='InputInc' placeholder='Nome...' />
                                            </div>
                                            <div className='d-grid'>
                                                <h4>Email</h4>
                                                <input type="email" name="user_email" className='InputInc' placeholder='Email...' />
                                            </div>
                                        </div>
                                        <div className='LeftCast'>
                                        <h4>Telefone</h4>
                                        <input type="Phone" name="Phone" className='InputInc' placeholder='Telefone...' />
                                    </div>
                                        <div className='LeftCast'>
                                            <h4>Mensagem</h4>
                                            <textarea name='message' rows='4' placeholder='Mensagem...' />
                                        </div>
                                        <div className='mt-4 d-flex justify-content-center'>
                                            <input type="submit" value="Enviar" className='Entrar'/>
                                        </div>
                                    </form>
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
