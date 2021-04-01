import styled from 'styled-components';

export const Main = styled.main`
    background: var(--grey);
`;

export const Header = styled.section`
    position: relative;
    background: var(--grey);
    height: 50vh;
    top: -180px;

    div{
        max-width: 1120px;
        margin: 0 auto;
        padding: 2rem 1rem 12rem;
    
        display: flex;
        align-items: center;
        justify-content: space-between;

        article{
            align-items: center;
            justify-content: space-between;

            h1{
                font-size: 3rem;
                color: var(--blue);
            }

            h3{
                font-size: 1.2rem;
                color: var(--text-title);
            }

            button{
                font-size: 1rem;
                color: #FFF;
                background: var(--blue-light);
                border: 0;
                
                margin-top: 10px;

                padding: 0 2rem;
                border-radius: 0.25rem;
                height: 3rem;
                
                transition: filter 0.2s;
                
                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    }
`;