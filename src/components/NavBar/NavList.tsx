import { NavItem, NavItemI } from '../NavItem/NavItem';
import { ListContainer } from './styles';

interface NavListProps {
    items: NavItemI[];
}

export const NavList = ({ items }: NavListProps) => {
    return (
        <ListContainer>
            {items.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
        </ListContainer>
    );
};
