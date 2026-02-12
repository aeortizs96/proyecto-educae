
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CodeEditor from './CodeEditor.vue';

const meta: Meta<typeof CodeEditor> = {
  title: 'Componentes/Editor/CodeEditor',
  component: CodeEditor,
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const Predeterminado: Story = {
  render: () => ({
    components: { CodeEditor },
    template: '<CodeEditor />',
  }),
};