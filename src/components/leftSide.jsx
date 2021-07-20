import styled from 'styled-components';
import photo from '../images/photo.svg';
import cardBg from '../images/card-bg.svg';

const bG = {
    backgroundImage: `url(${cardBg})`
}

const LeftSide = (props) => {

    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground style={bG}/>
                    <a>
                        <Photo />
                        <Link>Welcome, there!</Link>
                    </a>

                    <a>
                        <AddPhotoText>Add a photo</AddPhotoText>
                    </a>
                </UserInfo>
            </ArtCard>
        </Container>
    )
};

export default LeftSide;

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
  /* background: url("../images/card-bg.svg"); */
  background-color: teal;
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const  Photo = styled.div`

`;

const Link = styled.div`

`;

const AddPhotoText = styled.div`

`;



