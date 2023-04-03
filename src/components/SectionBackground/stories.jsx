import { SectionBackground } from '.';

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>SectionBackground</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates exercitationem voluptatem enim animi, quidem odit
                    molestiae est reprehenderit maxime cupiditate incidunt
                    ducimus autem dolore veniam obcaecati illo consequatur non
                    necessitatibus?
                </p>
            </div>
        ),
    },
    argTypes: {
        children: { type: '' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionBackground {...args}></SectionBackground>
        </div>
    );
};
