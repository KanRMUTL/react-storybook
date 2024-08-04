import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Main/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    buttonLabel: 'Go somewhere',
  },
};

export const LoadingCard: Story = {
  args: {
    isLoading: true,
    ...DefaultCard.args
  }
}