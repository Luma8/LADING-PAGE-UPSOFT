import React from 'react';
import { HeaderStyle } from "../components/Styles/Styled"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import NavBar from "./Navbar";
import Footer from './Footer';
//imagens
import Prof from '../assets/Img/Prof.png';

export default function WorkUs() {
    return (
        <>
            <HeaderStyle>
                <NavBar />
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <div className="SectionSobre">
                            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, 200))}>
                                <div className="container">
                                    <h1 className="text-center HeaderTittle">
                                        SOBRE A UPSOFT
                                    </h1>
                                    <p className="text-center Headersubtilte">Software house.</p>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>

                    <ScrollPage page={1}>
                        <div className="section3">
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1 className='text-center mt-5'>A UPSOFT</h1>
                                    <div className='container space-between mt-5'>
                                        <p>A Upsoft traz inovação para desenvolver o seu projeto do início ao fim. Ajudaremos você à construir ideias para grandes negócios com o que há de melhor em tecnologias, metodologias e profissionais. Investir em um aplicativo corporativo e website para sua empresa possibilita uma relação mais direta com seu cliente oferecendo vantagens como: mais oportunidade de vendas, rentabilidade, automação, maior alcance do produto, praticidade e credibilidade no mercado. Temos uma equipe empenhada na construção do seu projeto executando regras de negócios como solução de fluxo, traçando procedimentos a cerca de identificar as necessidades do cliente e métodos com foco e acessibilidade para o usuário tendo uma plataforma intuitiva e fácil de usar. Além de estarmos prontos para manter o suporte com intuito de monitorar e auxiliar o cliente em qualquer demanda referente ao aplicativo
                                        </p>
                                    </div>
                                </div>
                            </Animator>
                        </div>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <div className='sectionWhite'>
                            <Animator animation={batch(Fade(), MoveOut(0, 200))}>
                                <div className='container'>
                                    <br></br>
                                    <br></br>
                                    <h1>Mussum Ipsum, cacilds vidis litro abe</h1>
                                    <div className='container space-between mt-5'>
                                        <img className='imgPrograming' src={Prof} alt="Pelobemtodos"/>
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
