import styled from 'styled-components';

export const Item = styled.li`
    list-style-type: none;
    margin: 0 12px;
`;

export const ItemLink = styled.a`
    text-decoration: none;
    color: black;
    position: relative;
    border: none;
    background: none;
    width: fit-content;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #fff;
        transform: scaleX(0);
        transform-origin: right center;
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1),
            -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transition-duration: 0.6s, 0.6s;
        transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1),
            cubic-bezier(0.19, 1, 0.22, 1);
        transition-delay: 0s, 0s;
        transition-property: transform, -webkit-transform;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: left center;
        transition-duration: 0.4s;
    }
`;
