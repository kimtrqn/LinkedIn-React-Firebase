import styled from 'styled-components';
import { Link } from 'react-router-dom';
import loginLogo from '../images/login-logo.svg';

const Login = (props) => {

    return (
        <Container>
            <Nav>
                <Link className='link' to='/'>
                    <img src={loginLogo} alt="" />
                </Link>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>

            </Section>
        </Container>
    )
};

export default Login;


//styled css with styled components


const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.div`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap; /* wont go to new line */
    

    & > .link {
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        border-radius: 24px;
    }
`;
const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration:  167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);

    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        
    }
`;


const Section = styled.section`
    align-content: start;
    display: flex;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
`;


