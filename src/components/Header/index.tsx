import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";

import logoImg from '../../assets/itturini.png';
import { Container, Content, Nav } from './styles';

export function Header() {
    return (
        <Container>
            <Nav>
                <img src={logoImg} alt="iTTurini"/>
                <ul>
                    <li><a href="#">Soluções</a>
                        <ul>
                        <li><a href="#">
                                Delivery
                                <span>Plataforma de delivery, Take Away, Cardápio virtual</span>
                            </a></li>
                            <li><a href="#">
                                E-commerce
                                <span>Plataforma completa para lojas virtuais</span>
                            </a></li>
                            <li><a href="#">
                                Software on Demand
                                <span>Desenvolvimento de softwares que facilitam e potencializam a administração de seus negócio</span>
                            </a></li>
                            <li><a href="#">
                                Sites
                                <span>Desenvolvimento de sites e landing pages exibido automaticamente em diferentes dispositivos</span>
                            </a></li>
                            <li><a href="#">
                                Cloud
                                <span>Seu site/ sitema com Hospedagem SSL grátis</span>
                            </a></li>
                            <li><a href="#">Design</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <Content>
                    <button type="button">
                        <AiFillInstagram />
                    </button>
                    <button type="button">
                        <AiFillFacebook />
                    </button>
                    <button type="button">
                        <AiOutlineWhatsApp />
                    </button>
                </Content>
            </Nav>
        </Container>
    )
}