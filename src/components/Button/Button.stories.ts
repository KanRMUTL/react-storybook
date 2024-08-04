import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Main/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select'
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const PrimarySolidSmall: Story = {
  args: {
    ...Default.args,
    color: 'primary',
    border: 'solid',
    size: 'small',
  }
};

export const PrimarySolidMedium: Story = {
  args: {
    ...PrimarySolidSmall.args,
    size: 'medium',
  }
};

export const PrimarySolidLarge: Story = {
  args: {
    ...PrimarySolidMedium.args,
    size: 'large',
  }
};

export const PrimaryRoundedSmall: Story = {
  args: {
    ...PrimarySolidSmall.args,
    border: 'rounded',
  }
};

export const PrimaryRoundedMedium: Story = {
  args: {
    ...PrimaryRoundedSmall.args,
    size: 'medium',
  }
};

export const PrimaryRoundedLarge: Story = {
  args: {
    ...PrimaryRoundedMedium.args,
    size: 'large',
  }
};

export const SecondarySolidSmall: Story = {
  args: {
    ...Default.args,
    color: 'secondary',
    border: 'solid',
    size: 'small',
  }
};

export const SecondarySolidMedium: Story = {
  args: {
    ...SecondarySolidSmall.args,
    size: 'medium',
  }
};

export const SecondarySolidLarge: Story = {
  args: {
    ...SecondarySolidMedium.args,
    size: 'large',
  }
};

export const SecondaryRoundedSmall: Story = {
  args: {
    ...SecondarySolidSmall.args,
    border: 'rounded',
  }
};

export const SecondaryRoundedMedium: Story = {
  args: {
    ...SecondaryRoundedSmall.args,
    size: 'medium',
  }
};

export const SecondaryRoundedLarge: Story = {
  args: {
    ...SecondaryRoundedMedium.args,
    size: 'large',
  }
};

export const SuccessSolidSmall: Story = {
  args: {
    ...Default.args,
    color: 'success',
    border: 'solid',
    size: 'small',
  }
};

export const SuccessSolidMedium: Story = {
  args: {
    ...SuccessSolidSmall.args,
    size: 'medium',
  }
};

export const SuccessSolidLarge: Story = {
  args: {
    ...SuccessSolidMedium.args,
    size: 'large',
  }
};

export const SuccessRoundedSmall: Story = {
  args: {
    ...SuccessSolidSmall.args,
    border: 'rounded',
  }
};

export const SuccessRoundedMedium: Story = {
  args: {
    ...SuccessRoundedSmall.args,
    size: 'medium',
  }
};

export const SuccessRoundedLarge: Story = {
  args: {
    ...SuccessRoundedMedium.args,
    size: 'large',
  }
};

export const WarningSolidSmall: Story = {
  args: {
    ...Default.args,
    color: 'warning',
    border: 'solid',
    size: 'small',
  }
};

export const WarningSolidMedium: Story = {
  args: {
    ...WarningSolidSmall.args,
    size: 'medium',
  }
};

export const WarningSolidLarge: Story = {
  args: {
    ...WarningSolidMedium.args,
    size: 'large',
  }
};

export const WarningRoundedSmall: Story = {
  args: {
    ...WarningSolidSmall.args,
    border: 'rounded',
  }
};

export const WarningRoundedMedium: Story = {
  args: {
    ...WarningRoundedSmall.args,
    size: 'medium',
  }
};

export const WarningRoundedLarge: Story = {
  args: {
    ...WarningRoundedMedium.args,
    size: 'large',
  }
};