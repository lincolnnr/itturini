import Growth from '../../assets/Growth-curve-amico.png';

import { Main, Header } from './styles';

export function Principal() {
    return (
        <Main>
            <Header>
                <div>
                    <article>
                        <h1>Solução completa para seu négocio</h1>
                        <h3>Somos uma equipe de especialistas. Oferecemos o suporte e as ferramentas para turbinar o seu negócio. Confira!</h3>

                        <button type="button">
                            Fale com especialista
                        </button>
                    </article>
                    <img src={Growth} alt=""/>
                </div>
            </Header>
            
        </Main>
        )
}