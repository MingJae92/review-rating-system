import { styled } from '@mui/system';
import { Container, Typography, Button, Box } from '@mui/material';

// Hero container with background image and full height
export const HeroContainer = styled(Box)({
  backgroundImage: 'url(https://via.placeholder.com/1500x800)', // Replace with a real image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '80vh', // Adjust as needed
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative', // To allow the overlay to be positioned
});

// Overlay for background image to improve text visibility
export const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly darker overlay for text contrast
  zIndex: 1, // Ensures overlay is below the text
});

// Hero content section (centered text and padding)
export const HeroContent = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  zIndex: 2, // Ensures content is above the overlay
  position: 'relative', // To be on top of the overlay
}));

// Title styling
export const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: '3rem',
  marginBottom: '16px',
  color: '#ffffff', // Ensures the title is white for contrast
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)', // Stronger text shadow for contrast
});

// Description styling
export const Description = styled(Typography)({
  fontSize: '1.25rem',
  marginBottom: '24px',
  color: '#ffffff', // Ensures the description is white for contrast
  textShadow: '1px 1px 8px rgba(0, 0, 0, 0.8)', // Stronger text shadow for contrast
});

// Call-to-action button styling
export const CtaButton = styled(Button)(({ theme }) => ({
  fontSize: '1.1rem',
  padding: theme.spacing(1, 4),
  borderRadius: '30px',
  backgroundColor: '#ff5a5f', // CTA button color
  '&:hover': {
    backgroundColor: '#e14e51', // Hover effect
  },
}));
