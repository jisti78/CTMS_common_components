import TokenCard from '../components/TokenCard';

export default {
  title: 'Components/TokenCard',
  component: TokenCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['saffron', 'maroon', 'cream', 'navy', 'teal']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
};

export const Maroon = {
  args: {
    token: 'A-045',
    status: 'Waiting',
    waitingCount: 12,
    estimatedTime: '18 min',
    variant: 'maroon',
    size: 'medium'
  }
};

export const Saffron = {
  args: {
    token: 'B-102',
    status: 'Active',
    waitingCount: 4,
    estimatedTime: '5 min',
    variant: 'saffron',
    size: 'medium'
  }
};

export const Cream = {
  args: {
    token: 'C-301',
    status: 'Pending',
    waitingCount: 8,
    estimatedTime: '10 min',
    variant: 'cream',
    size: 'medium'
  }
};

export const Navy = {
  args: {
    token: 'D-777',
    status: 'Processing',
    waitingCount: 20,
    estimatedTime: '30 min',
    variant: 'navy',
    size: 'medium'
  }
};

export const Teal = {
  args: {
    token: 'E-555',
    status: 'Confirmed',
    waitingCount: 2,
    estimatedTime: '2 min',
    variant: 'teal',
    size: 'medium'
  }
};