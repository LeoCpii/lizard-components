import { html, TemplateResult } from 'lit';
import '../src/button-component.js';

export default {
    title: 'lz-button',
    component: 'ButtonComponent',
    argTypes: {
        label: { control: 'text' }
    },
};

interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    label?: string;
}

const Template: Story<ArgTypes> = ({
    label = 'Hello world'
}: ArgTypes) => html`
    <lz-button .label=${label}></lz-button>
  `;

export const Regular = Template.bind({});

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'My title'
};