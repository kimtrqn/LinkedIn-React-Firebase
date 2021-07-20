import styled from 'styled-components';
import user from '../images/user.svg';
import photoIcon from '../images/photo-icon.svg';

const Main = (props) => {

    return (
        <Container>
            <Sharebox>
                <div>
                    <img src={user} alt="" />
                    <button>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src={photoIcon} alt="" />
                        <span>Photo</span>
                    </button>

                    <button></button>
                </div>
            </Sharebox>
        </Container>
    )
};

export default Main;

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color:  #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
`;