import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
    it('should render two column grid', () => {
        const { container } = renderTheme(<GridTwoColumn {...mock} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
