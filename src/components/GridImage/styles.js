import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
    ${({ theme }) => css`
        > ${TextComponent} {
            margin-bottom: ${theme.spacing.xhuge};
        }
    `}
`;

export const Grid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacing.large};

        @media ${theme.media.lteMedium} {
            grid-template-columns: 1fr;
        }
    `}
`;

export const GridElement = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
        transition: all 300ms ease-in-out;
    `}
`;

export const Image = styled.img`
    ${({ theme }) => css`
        width: 100%;

        &:hover {
            transform: scale(1.2) rotate(10deg);
        }
    `}
`;
