import styled from 'styled-components';

export const Container = styled.header`
    background: var(--grey);
`;

export const Content = styled.div`
    align-items: center;
    display: inline-block;
    

    button{
        font-size: 1.6rem;
        color: var(--blue-dark);
        border: 0;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.5);
        }
    }
    
`;

export const Nav = styled.nav`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        border-radius: 0.5rem;
        display: flex;

        list-style:none;
        background: var(--shape);
        

        li{   
            position:relative;
            border-right: 1px solid #c0c0c0;

            a{
                color: var(--blue-dark);
                text-decoration:none;
                padding: 20px 30px;
                display:block;

                transition: filter 0.2s;
        
                &:hover{
                    filter: grayscale(100%);
                }
            }

            &:hover ul{
                display:block
            }

            ul{
                position:absolute;
                top:60px;
                left:0;
                background-color: var(--grey);
                display: none;


                li{
                    position:relative;
                    display: block;
                    border: 0;
                    min-width: 400px;
                }

                a{
                    color: var(--blue-dark);
                    text-decoration:none;
                    padding: 10px 30px;
                    display:block;

                    transition: filter 0.2s;
        
                    &:hover{
                        filter: grayscale(100%);
                    }

                    span {
                        display: block;
                        font-size: .8rem;
                        color: var(--text-body);
                    }
                }
            }
        }
    }
`;