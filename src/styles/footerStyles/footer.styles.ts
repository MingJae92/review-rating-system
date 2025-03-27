import { SxProps, Theme } from '@mui/system';

const footerStyles: { [key: string]: SxProps<Theme> } = {
  footerContainer: {
    position: 'fixed', // Keep the footer fixed at the bottom
    bottom: 0,         // Ensure it stays at the bottom
    left: 0,           // Align it to the left side
    width: '100%',     // Ensure it spans the entire width of the screen
    backgroundColor: '#f8f8f8',
    padding: '20px 0',
    zIndex: 10,        // Keep it on top of other content
  },
  gridItem: {
    marginBottom: 1,
  },
  bottomText: {
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid #e0e0e0',
    paddingTop: '10px',
  },
  link: {
    marginBottom: 1,
    display: 'block',
  },
  socialLinks: {
    marginRight: 2,
    display: 'inline',
  },
};

export default footerStyles;
