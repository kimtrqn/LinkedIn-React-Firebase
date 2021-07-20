import styled from 'styled-components';
import user from '../images/user.svg';
import photoIcon from '../images/photo-icon.svg';
import eventIcon from  '../images/event-icon.svg';
import videoIcon from '../images/video-icon.svg';
import articleIcon from '../images/article-icon.svg';
import threeDots from '../images/ellipses.svg';
import sharedImg from '../images/share-image.svg';

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

                    <button>
                        <img src={videoIcon} alt="" />
                        <span>Video</span>
                    </button>

                    <button>
                        <img src={eventIcon} alt="" />
                        <span>Event</span>
                    </button>

                    <button>
                        <img src={articleIcon} alt="" />
                        <span>Write article</span>
                    </button>
                </div>
            </Sharebox>

            <Article>
                <SharedActor>
                    <a>
                        <img src={user} alt="" />
                        <div>
                            <span>Title</span>
                            <span>Info</span>
                            <span>Date</span>
                        </div>
                    </a>
                    <button>
                        <img src={threeDots} alt="" />
                    </button>
                </SharedActor>
            </Article>
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

    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }

        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
            
            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }

            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius:  35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: white;
                text-align: white;
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img {
                    margin: 0  4px 0 -2px;
                }

                span {
                    color: #70b5f9;
                }
            }
        }
    }
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;
                
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }

`;