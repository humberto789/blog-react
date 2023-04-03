import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
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
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionContainer {...args}></SectionContainer>
        </div>
    );
};
