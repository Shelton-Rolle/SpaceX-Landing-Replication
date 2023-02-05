import styled from 'styled-components';

export const Nav = styled.header`
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
`;

export const NavContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const LogoContainer = styled.div`
    width: 210px;
`;

export const ListContainer = styled.ul`
    display: flex;
`;
