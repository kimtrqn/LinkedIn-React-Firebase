import styled from 'styled-components';
import homeLogo from '../images/home-logo.svg';
import searchIcon from '../images/search-icon.svg';

const Header = (props) => {
    
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src={homeLogo} alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src={searchIcon} alt="" />
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    )
};

export default Header;


const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0 , 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100vw;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    & > div {
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`


`;