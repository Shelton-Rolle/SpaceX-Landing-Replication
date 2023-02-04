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
    transform: translate3d(0px, 0px, 0px);
    min-width: 130px;
    padding: 0 15px;
    margin: 30px 0 0;
    border: 2px solid #fff;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    font-weight: 700;
    font-style: normal;
    transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
        background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
    transition-duration: 1s, 1s;
    transition-timing-function: cubic-bezier(0.25, 1, 0.25, 1),
        cubic-bezier(0.25, 1, 0.25, 1);
    transition-delay: 0s, 0s;
    transition-property: color, background-color;

    span {
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        padding: 15px 0;
        width: 100%;
    }

    &:hover {
        background-color: #fff;

        span {
            color: black;
        }
    }
`;

export const SectionArrowContainer = styled.div``;
