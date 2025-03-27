import { SxProps, Theme } from '@mui/system';

const footerStyles: { [key: string]: SxProps<Theme> } = {
  footerContainer: {
    position: 'relative',  // Change from 'fixed' to 'relative'
    width: '100%',         // Ensure it spans the entire width of the screen
    backgroundColor: '#f8f8f8',
    padding: '20px 0',
    zIndex: 10,            // Optional, depending on your design needs
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
