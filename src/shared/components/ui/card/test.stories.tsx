import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Card } from '.'; // Adjust the import path as necessary

const meta = {
    title: 'Shared/Card',
    component: () => <Card />, // Placeholder for the actual Card component
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        backgroundColor: '#ffffff',
    },
};

export const WithContent: Story = {
    args: {
        children: (
            <div>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </div>
        ),
    },
};