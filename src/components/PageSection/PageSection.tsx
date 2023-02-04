import {
    Section,
    SectionContainer,
    SectionContent,
    SectionImage,
    SectionLink,
} from './styles';

interface PageSectionProps {
    subHeading?: string;
    mainHeading: string;
    linkLabel: string;
    src: string;
    alt: string;
    href: string;
}

export const PageSection = ({
    subHeading,
    mainHeading,
    linkLabel,
    src,
    alt,
    href,
}: PageSectionProps) => {
    return (
        <Section>
            <SectionImage src={src} alt={alt} />
            <SectionContainer>
                <SectionContent>
                    <h2>{subHeading}</h2>
                    <h3>{mainHeading}</h3>
                    <SectionLink href={href}>
                        <span>{linkLabel}</span>
                    </SectionLink>
                </SectionContent>
            </SectionContainer>
        </Section>
    );
};
