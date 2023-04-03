import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import linksMock from '../NavLinks/mock';

const logoData = {
    text: 'Logo',
    link: '#target',
    srcImg: '',
};

describe('<Menu />', () => {
    it('should render logo and main menu nav', () => {
        renderTheme(<Menu links={linksMock} logoData={logoData} />);
        expect(
            screen.getByRole('heading', { name: 'Logo' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('navigation', { name: 'Main menu' }),
        ).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = renderTheme(
            <Menu links={linksMock} logoData={logoData} />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render menu mobile and button for open and close the menu', () => {
        const { container } = renderTheme(
            <Menu links={linksMock} logoData={logoData} />,
        );

        const button = screen.getByLabelText('Open/Close menu');
        const menuContainer = button.nextSibling;

        expect(button).toHaveStyleRule('display', 'none');
        expect(button).toHaveStyleRule('display', 'flex', {
            media: theme.media.lteMedium,
        });

        expect(menuContainer).toHaveStyleRule('opacity', '0', {
            media: theme.media.lteMedium,
        });
        expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

        fireEvent.click(button);

        expect(menuContainer).toHaveStyleRule('opacity', '1', {
            media: theme.media.lteMedium,
        });
        expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

        fireEvent.click(menuContainer);

        expect(menuContainer).toHaveStyleRule('opacity', '0', {
            media: theme.media.lteMedium,
        });
        expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    });

    it('should not render links', () => {
        const { container } = renderTheme(<Menu logoData={logoData} />);

        expect(
            screen.getByRole('navigation', { name: 'Main menu' }).firstChild,
        ).not.toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
