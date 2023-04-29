import { Footer } from '.';

export default {
    title: 'Footer',
    component: Footer,
    args: {
        footerHtml: `<p><a href="https://github.com/humberto789">Feito por Humberto Vitalino</a></p>`,
    },
};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args}></Footer>
        </div>
    );
};
