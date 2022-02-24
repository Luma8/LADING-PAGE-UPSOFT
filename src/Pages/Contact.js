import React, { useRef, useState } from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
import ParticlesBackgroundBlack from '../components/Styles/ParticlesBackgroundBlack';
import emailjs from '@emailjs/browser';
import PopUp from '../components/PopUp';
//imagens
import './styles.css';
import ContatoSuport from '../assets/Img/ContatoSuport.png';


export default function Contacts() {
    //Debugs Particles

    //Animation's
    // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    // const FadeUp = batch(Fade(), Move(), Sticky());

    const [buttonPopup, setButtonPopup] = useState(false);

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
                                    <img className='Imagecenter' alt='contatoIMg' src={ContatoSuport} />
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
                                            <input type="number" name="Phone" className='InputInc' placeholder='Telefone...' />
                                        </div>
                                        <div className='LeftCast'>
                                            <h4>Mensagem</h4>
                                            <textarea name='message' rows='4' placeholder='Mensagem...' />
                                        </div>
                                        <div className='mt-4 d-flex justify-content-center'>
                                            <input onClick={() => setButtonPopup(true)} type="submit" value="Enviar" className='Entrar' />
                                        </div>
                                        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                                            <h1>Enviado!</h1>
                                            <p>Obrigado por enviar sua mensagem, entraremos em contato embreve.</p>
                                        </PopUp>
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
