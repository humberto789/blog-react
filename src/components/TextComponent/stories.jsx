import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Totam veniam dolore autem, dolorem voluptatibus eius veritatis
        obcaecati esse temporibus ullam hic nemo minima
        similique repellat ex quia debitis harum voluptate?`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};
