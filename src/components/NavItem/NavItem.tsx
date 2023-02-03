import { Item, ItemLink } from './styles';

interface NavItemProps {
    label: string;
    href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
    return (
        <Item>
            <ItemLink href={href}>{label}</ItemLink>
        </Item>
    );
};
