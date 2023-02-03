import styled from 'styled-components';

export const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    font-family: 'Roboto', sans-serif;
`;

export const SectionContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
    outline: 1px solid white;
`;

export const SectionImage = styled.img`
    position: absolute;
`;

export const SectionContent = styled.div`
    position: absolute;
    bottom: 15%;
    left: 50px;
    color: white;
    text-transform: uppercase;

    h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 300;
        position: relative;
    }

    h3 {
        margin: 0;
        font-size: 46px;
        font-weight: 600;
    }
`;

export const SectionLink = styled.a`
    font-size: 16px;
    color: white;
    position: relative;
    margin-top: 30px;
    padding: 0 15px;
    border: 2px solid white;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;

    &:hover {
        color: black;
        background: white;
    }
`;

export const SectionArrowContainer = styled.div``;
