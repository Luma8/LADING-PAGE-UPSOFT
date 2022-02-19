import React from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
import Gif from './Gif';
import ParticlesBackground from '../components/Styles/ParticlesBackground';
import logo from '../assets/logoUpsoft.png';

//imagens
import Programing from '../assets/Img/Sistemas.png';
import Ideia from '../assets/Img/ProgrammerBro.png';

//video
import V1 from '../assets/Videos/V1.mp4';

export default function Home() {

    //Animation's

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
                                    <div className='d-flex justify-content-center'>
                                        <img src={logo} alt="Logo" className="logo" />
                                    </div>
                                    <h1 className="text-center HeaderTittle">
                                        SOFTWAREHOUSE
                                    </h1>
                                    <p className="text-center Headersubtilte">Venha construir seu sonho com a gente.</p>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={1}>
                        <div className="sectionBackgroundWhite">
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1 className='colorWhite'>Aplicativos</h1>
                                    <div className='container space-between'>
                                        <div className='encurt'>
                                            <p className='jayce'><h2 className='Subtittle'>Criação e desenvolvimento de soluções digitais para mobile</h2> Transforme a experiência da sua emrpesa através de projetos customizados, proporcionando acessibilidade, mais oportunidade de vendas, rentabilidade, automação e alcance do seu produto. Criando um aplicativo único, personalizado e fortalecendo a sua marca, com uma plataforma intuitivo e fácil de usar, tornando o seu sonho em um empreendimento de sucesso.
                                            </p>
                                        </div>
                                        <img className='imgIdeia' src={Ideia} alt="Ideia" />
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <div className='section3'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1 className='colorBlack'>Sistemas</h1>
                                    <div className='container space-between mt-5'>
                                        <div className='encurt'>
                                            <p><h2 className='Subtittle'>Desenvolvimento de aplicações e sistemas Web</h2>
                                               Ajudamos a constuir a sua ideia, pensando no processo e modelo de negócio da sua empresa, focando sempre na otimização e aumento da produtividade, elaborando e publicando o seu projeto do inicio ao fim, utilizando as melhores linguagens e tecnologias, além de estarmos prontos para todo o suporte necessário.
                                            </p>
                                        </div>
                                        <img className='imgPrograming' src={Programing} alt="Programing"/>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <div className='sectionWhite'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <video width="100%" height="100%" controls>
                                        <source src={V1} type='video/mp4' />
                                    </video>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                </ScrollContainer>
            </HeaderStyle>
            <Gif />
            <Footer />
        </>
    )
}
