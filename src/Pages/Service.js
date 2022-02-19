import React from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky,} from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
import ParticlesBackground from '../components/Styles/ParticlesBackground';
//imagens
import './styles.css';
import ServiceSuport from '../assets/Img/ServiceSuport.png';
import ECommerce from '../assets/Img/E-commerce.png';
import Methods from '../assets/Img/Methods.png';
import Dashboard from '../assets/Img/Dashboard.png';
import DeveloperService from '../assets/Img/DeveloperService.png';
import { MdComputer, } from 'react-icons/md';


export default function Service() {
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
                                        SERVIÇOS
                                    </h1>
                                    <img className='Imagecenter' src={DeveloperService} alt="DeveloperService"/>
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
                                    <div className='container space-between mt-5'>
                                        <div className='encurt-2'>
                                            <h1 className='mb-5'>Confira alguns de nossos Serviços:</h1>
                                            <p>
                                                Somos especialistas no desenvolvimento de softwares modernos, Contamos com uma equipe multidisciplinar e qualificada, trazendo inovação e soluções inteligente, proporcionando resultados incomparáveis.
                                            </p>
                                        </div>
                                        <img className='imgPrograming' src={ServiceSuport} alt="ServiceSuport"/>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <div className="sectionBackgroundWhite">
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container flowpodcast'>
                                    <br></br>
                                    <br></br>
                                    <h1 className='text-center'>OS SERVIÇOS SÂO</h1>
                                    <div className='space-between mt-5'>
                                        <div className='CardBronze container'>
                                            <div className='d-flex mt-2 teste' >
                                                <MdComputer className='ComputerService' />
                                            </div>
                                            <p className='text-center'>Bronze</p>
                                            <p className='F-1'>Confecção da ATP e MVP
                                                Confecção da aplicação
                                                Entrega da aplicacação finalizada
                                                Criação da marca paga à parte
                                                Acompanhamento do projeto pelo cliente
                                                Manutenção da aplicação paga por demanda</p>
                                        </div>
                                        <div className='CardPrata container'>
                                            <div className='d-flex mt-2 teste' >
                                                <MdComputer className='ComputerService' />
                                            </div>
                                            <p className='text-center'>Prata</p>
                                            <p className='F-1'>Confecção da ATP e MVP
                                                Confecção da aplicação
                                                Entrega da aplicação finalizada
                                                Criação da marca
                                                Acompanhamento do projeto pelo cliente
                                                Manutenção da aplicação paga à parte mensalmente
                                                Confecção dos termos de uso</p>
                                        </div>
                                        <div className='CardGold container'>
                                            <div className='d-flex mt-2 teste' >
                                                <MdComputer className='ComputerService' />
                                            </div>
                                            <p className='text-center'>Ouro</p>
                                            <p className='F-1'>Confecção da ATP e MVP
                                                Confecção da aplicação
                                                Entrega da aplicação finalizada
                                                Criação da marca
                                                Acompanhamento do projeto pelo cliente
                                                Manutenção do aplicativo paga à parte mensalmente
                                                Confecção dos termos de uso
                                                Criação de audiovisual para lançamento no 1º mês
                                                Marketing Digital incluso para clientes da manutenção</p>
                                        </div>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <div className='section3'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1 className='colorBlack'>E-Commerces</h1>
                                    <div className='container space-between mt-5'>
                                        <div className='encurt-2'>
                                            <p>
                                                <h2 className='Subtittle'>Maior alcance de sua marca, flexibilidade e expansão do seu negócio</h2>
                                                com o avanço da tecnologia, a tendência da categoria compras virtuais amplia-se em crescimento acelerado, Potencialize suas vendas no meio digital com mais praticidade, Utilizamos estratégias avançadas de business intelligence para traçar metas e consolidar sua ideia, oferecendo mútiplas funcionalidades e melhores soluções para cada projeto.
                                            </p>
                                        </div>
                                        <img className='imgPrograming' src={ECommerce} alt="Ecommerce"/>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={4}>
                        <div className='section4'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1 className='colorBlack'>Metodologias ágeis de desenvolvimento</h1>
                                    <div className='container space-between mt-5'>
                                        <div className='encurt-2'>
                                            <p>
                                                <h2 className='Subtittle'>Processo colaborativo, maior interatividade e ferramentas que auxiliam na construção do seu projeto</h2>
                                                Estratégias personalizadas, teste contínuos e total conforto e segurança em relação aos prazos estabelecidos, com entregas semanais, otimizando fluxos de trabalho e produtividade, elevando as perspectivas de sucesso do seu negócio.
                                            </p>
                                        </div>
                                        <img className='imgPrograming' src={Methods} alt="Methods"/>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={5}>
                        <div className='section3'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                   
                                    <div className='container space-between mt-5'>
                                        <div className='encurt-2'>
                                            <h2 className='SubTittle'>  <h1 className='colorBlack'>Dashboards</h1>Acompanhe a performance do seu negócio através de informações, métricas e indicadores-chaves</h2>
                                        </div>
                                        <img className='imgPrograming' src={Dashboard} alt="Dashboard"/>
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
