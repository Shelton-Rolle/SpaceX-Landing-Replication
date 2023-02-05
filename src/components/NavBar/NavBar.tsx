import { NavItemI } from '../NavItem/NavItem';
import { Logo } from './logo';
import { NavList } from './NavList';
import { Nav, NavContentContainer, LogoContainer } from './styles';

const NavItems: NavItemI[] = [
    {
        label: 'Falcon 9',
        href: '/',
    },
    {
        label: 'Falcon Heavy',
        href: '/',
    },
    {
        label: 'Dragon',
        href: '/',
    },
    {
        label: 'Starship',
        href: '/',
    },
    {
        label: 'Human Spaceflight',
        href: '/',
    },
    {
        label: 'Rideshare',
        href: '/',
    },
    {
        label: 'Starshield',
        href: '/',
    },
    {
        label: 'Starlink',
        href: '/',
    },
];

export const NavBar = () => {
    return (
        <Nav>
            <NavContentContainer>
                <LogoContainer>
                    <a href="/">
                        <Logo />
                    </a>
                </LogoContainer>
                <NavList items={NavItems} />
            </NavContentContainer>
        </Nav>
    );
};
