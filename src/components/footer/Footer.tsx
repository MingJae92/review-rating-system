import React from 'react';
import { Container, Grid, Link, Typography, Box } from '@mui/material';
import footerStyles from '../../styles/footerStyles/footer.styles';  // Import the default export for styles

const Footer = () => {
  return (
    <Box sx={footerStyles.footerContainer}>
      <Container>
        <Grid container spacing={4}>
          {/* Column 1: Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Wirecutter
            </Typography>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Careers
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Terms of Use
            </Link>
          </Grid>

          {/* Column 2: Resources */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Customer Service
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Help Center
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Accessibility
            </Link>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit" sx={footerStyles.socialLinks}>
              Facebook
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.socialLinks}>
              Twitter
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.socialLinks}>
              Instagram
            </Link>
            <Link href="#" color="inherit">
              YouTube
            </Link>
          </Grid>

          {/* Column 4: Legal */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Ad Choices
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Copyright
            </Link>
            <Link href="#" color="inherit" sx={footerStyles.link}>
              Terms of Sale
            </Link>
          </Grid>
        </Grid>

        {/* Bottom Text */}
        <Box sx={footerStyles.bottomText}>
          <Typography variant="body2" color="text.secondary">
            © 2025 Wirecutter, a New York Times Company
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
