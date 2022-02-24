import React, { useRef, useState } from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import PopUp from '../components/PopUp';

//imagens
import Prof from '../assets/Img/Contact us-pana.png';
import styled from 'styled-components';

export default function WorkUs() {

    const [buttonPopup, setButtonPopup] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_0j332qp', 'template_gy4psik', form.current, 'user_wUF2hsJZIHUZJ6wNGh4X5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <>
            <HeaderStyle>
                <NavBar />
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <div className="SectionWorkUs">
                            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, 200))}>
                                <div className="container">
                                    <h1 className="text-center HeaderTittle">
                                        TRABALHE CONOSCO
                                    </h1>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <div className='sectionWhite'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1>Venha Trabalhar Conosco</h1>
                                    <div className='container space-between mt-5'>
                                        <div className='encurt-2'>
                                            <Paragraf>Se você é designer,  programador ou atua na área administrativa, cadastre seu currículo conosco que iremos chamá-lo assim que surgir uma vaga na nossa empresa. Venha fazer parte da equipe upsoft.
                                            </Paragraf>
                                        </div>
                                        <img className='panamCont' src={Prof} alt="Pelobemtodos" />
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                </ScrollContainer>
                <FormularioWu>
                    <div className='container'>
                        <br></br>
                        <br></br>
                        <h1 className='tittle'>
                            Formulario De inscrição
                        </h1>
                        <form ref={form} onSubmit={sendEmail} className="d-grid justify-content-center">
                            <lable>
                                Nome Completo
                            </lable>
                            <input type="text" name="name" placeholder='Nome Completo' className='Texts mt-1 mb-3' />
                            <lable>
                                Email
                            </lable>
                            <input type="email" name="user_email" placeholder='email' className='Texts mt-1 mb-3' />
                            <lable>
                                Telefone
                            </lable>
                            <input type='number' placeholder='(83) 9 9999-9999' name='phone' className='Texts mt-1 mb-3' />
                            <label>
                                Cargo
                            </label>
                            <select name="select" className='mt-1 mb-3'>
                                <option value="Administrativo">Administrativo</option>
                                <option value="Financerio">Financerio</option>
                                <option value="Financerio">Programador Front-end</option>
                                <option value="Financerio">Programador Back-end</option>
                                <option value="Financerio">Designer</option>
                            </select>
                            <p>Envie Seu curriculo para esse email: <a href='upsoft.softwarehouse@gmail.com'>upsoft.softwarehouse@gmail.com</a></p>
                            <div className='d-flex justify-content-center mb-5'>
                                <input onClick={() => setButtonPopup(true)} className='Enviar' value="Enviar" type="submit" />
                            </div>
                            <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <h1>Enviado!</h1>
                                <p>Obrigado por enviar sua inscrição, Não esqueça de enviar o curriculo para o email com o seu nome :D, entraremos em contato embreve.</p>
                            </PopUp>
                        </form>
                    </div>
                </FormularioWu>
            </HeaderStyle>
            <Footer />
        </>
    )
}

const FormularioWu = styled.div`
    width: 100%;
    background-color: #7EB3E3;
        h1.tittle{
            color: white;
            font-weight: bold;
        }
        input.Texts{
            border: none;
            width: 40vw;
            outline: none;
            border-radius: 5px;
            @media(max-width: 500px){
                width: 95vw;
            }
        }
        select{
            border: none;
            outline: none;
            border-radius: 5px;
        }
        input.Enviar{
            border: none;
            width: 20vw;
            background-color: white;
            border: 1px solid white;
            border-radius: 5px;
                &:hover{
                    background-color: #7EB3E3;
                    color: white;
                }
        }
`
const Paragraf = styled.p`
    font-size: 1.3rem;
`