import { LogoLink } from '.';

export default {
    title: 'LogoLink',
    component: LogoLink,
    args: {
        text: 'LogoLink',
        srcImg: 'assets/images/logo.svg',
        link: 'http://localhost',
    },
};

export const ImageOnly = (args) => {
    return (
        <div>
            <LogoLink {...args}></LogoLink>
        </div>
    );
};

export const TextOnly = (args) => {
    return (
        <div>
            <LogoLink {...args}></LogoLink>
        </div>
    );
};

TextOnly.args = {
    srcImg: '',
};
