import { Item, ItemLink } from './styles';

export interface NavItemI {
    label: string;
    href: string;
}

interface NavItemProps {
    item: NavItemI;
}

export const NavItem = ({ item }: NavItemProps) => {
    const { href, label } = item;

    return (
        <Item>
            <ItemLink href={href}>{label}</ItemLink>
        </Item>
    );
};
