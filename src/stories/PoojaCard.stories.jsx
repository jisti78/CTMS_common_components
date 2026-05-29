import React from 'react';
import PoojaCard from '../components/PoojaCard';

export default {
  title: 'Components/PoojaCard',
  component: PoojaCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['saffron', 'maroon', 'navy']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    showButton: {
      control: 'boolean'
    }
  }
};

export const Default = {
  args: {
    title: 'Card Title',
    subtitle: 'Subtitle Text',
    duration: '30 min',
    priest: 'Person Name',
    amount: 500,
    slots: 8,
    variant: 'maroon',
    size: 'medium',
    badge: 'Popular',
    buttonText: 'Book Now',
    showButton: true,
    image: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png'
  }
};

export const Small = {
  args: {
    title: 'Card Title',
    subtitle: 'Subtitle Text',
    duration: '15 min',
    priest: 'User',
    amount: 250,
    slots: 5,
    variant: 'saffron',
    size: 'small',
    badge: 'New',
    buttonText: 'View',
    showButton: true,
    image: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png'
  }
};

export const Large = {
  args: {
    title: 'Card Title',
    subtitle: 'Subtitle Text',
    duration: '45 min',
    priest: 'Member',
    amount: 1500,
    slots: 12,
    variant: 'navy',
    size: 'large',
    badge: 'Featured',
    buttonText: 'Reserve',
    showButton: true,
    image: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png'
  }
};

export const WithoutButton = {
  args: {
    title: 'Card Title',
    subtitle: 'Subtitle Text',
    duration: '20 min',
    priest: 'Admin',
    amount: 700,
    slots: 3,
    variant: 'maroon',
    size: 'medium',
    badge: 'Limited',
    showButton: false,
    image: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png'
  }
};

export const Playground = {
  args: {
    title: 'Dynamic Title',
    subtitle: 'Dynamic Subtitle',
    duration: '60 min',
    priest: 'Custom User',
    amount: 999,
    slots: 10,
    variant: 'saffron',
    size: 'medium',
    badge: 'Trending',
    buttonText: 'Continue',
    showButton: true,
    image: 'https://cdn-icons-png.flaticon.com/512/4359/4359963.png'
  }
};