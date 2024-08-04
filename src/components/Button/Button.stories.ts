// Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import './button.css';

const meta: Meta<typeof Button> = {
  title: 'Main/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySolidSmall: Story = {
  args: {
    label: 'Primary Solid Small',
    color: 'primary',
    border: 'solid',
    size: 'small',
  }
};

export const PrimarySolidMedium: Story = {
  args: {
    label: 'Primary Solid Medium',
    color: 'primary',
    border: 'solid',
    size: 'medium',
  }
};

export const PrimarySolidLarge: Story = {
  args: {
    label: 'Primary Solid Large',
    color: 'primary',
    border: 'solid',
    size: 'large',
  }
};

export const PrimaryRoundedSmall: Story = {
  args: {
    label: 'Primary Rounded Small',
    color: 'primary',
    border: 'rounded',
    size: 'small',
  }
};

export const PrimaryRoundedMedium: Story = {
  args: {
    label: 'Primary Rounded Medium',
    color: 'primary',
    border: 'rounded',
    size: 'medium',
  }
};

export const PrimaryRoundedLarge: Story = {
  args: {
    label: 'Primary Rounded Large',
    color: 'primary',
    border: 'rounded',
    size: 'large',
  }
};

export const SecondarySolidSmall: Story = {
  args: {
    label: 'Secondary Solid Small',
    color: 'secondary',
    border: 'solid',
    size: 'small',
  }
};

export const SecondarySolidMedium: Story = {
  args: {
    label: 'Secondary Solid Medium',
    color: 'secondary',
    border: 'solid',
    size: 'medium',
  }
};

export const SecondarySolidLarge: Story = {
  args: {
    label: 'Secondary Solid Large',
    color: 'secondary',
    border: 'solid',
    size: 'large',
  }
};

export const SecondaryRoundedSmall: Story = {
  args: {
    label: 'Secondary Rounded Small',
    color: 'secondary',
    border: 'rounded',
    size: 'small',
  }
};

export const SecondaryRoundedMedium: Story = {
  args: {
    label: 'Secondary Rounded Medium',
    color: 'secondary',
    border: 'rounded',
    size: 'medium',
  }
};

export const SecondaryRoundedLarge: Story = {
  args: {
    label: 'Secondary Rounded Large',
    color: 'secondary',
    border: 'rounded',
    size: 'large',
  }
};

export const SuccessSolidSmall: Story = {
  args: {
    label: 'Success Solid Small',
    color: 'success',
    border: 'solid',
    size: 'small',
  }
};

export const SuccessSolidMedium: Story = {
  args: {
    label: 'Success Solid Medium',
    color: 'success',
    border: 'solid',
    size: 'medium',
  }
};

export const SuccessSolidLarge: Story = {
  args: {
    label: 'Success Solid Large',
    color: 'success',
    border: 'solid',
    size: 'large',
  }
};

export const SuccessRoundedSmall: Story = {
  args: {
    label: 'Success Rounded Small',
    color: 'success',
    border: 'rounded',
    size: 'small',
  }
};

export const SuccessRoundedMedium: Story = {
  args: {
    label: 'Success Rounded Medium',
    color: 'success',
    border: 'rounded',
    size: 'medium',
  }
};

export const SuccessRoundedLarge: Story = {
  args: {
    label: 'Success Rounded Large',
    color: 'success',
    border: 'rounded',
    size: 'large',
  }
};

export const WarningSolidSmall: Story = {
  args: {
    label: 'Warning Solid Small',
    color: 'warning',
    border: 'solid',
    size: 'small',
  }
};

export const WarningSolidMedium: Story = {
  args: {
    label: 'Warning Solid Medium',
    color: 'warning',
    border: 'solid',
    size: 'medium',
  }
};

export const WarningSolidLarge: Story = {
  args: {
    label: 'Warning Solid Large',
    color: 'warning',
    border: 'solid',
    size: 'large',
  }
};

export const WarningRoundedSmall: Story = {
  args: {
    label: 'Warning Rounded Small',
    color: 'warning',
    border: 'rounded',
    size: 'small',
  }
};

export const WarningRoundedMedium: Story = {
  args: {
    label: 'Warning Rounded Medium',
    color: 'warning',
    border: 'rounded',
    size: 'medium',
  }
};

export const WarningRoundedLarge: Story = {
  args: {
    label: 'Warning Rounded Large',
    color: 'warning',
    border: 'rounded',
    size: 'large',
  }
};