import styled from 'styled-components';
import { Link } from 'react-router-dom';
import loginLogo from '../images/login-logo.svg';

const Login = (props) => {

    return (
        <Container>
            <Nav>
                <Link to='/'>
                    <img src={loginLogo} alt="" />
                </Link>
            </Nav>
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
    

    & > Link {
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;



