import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

const categoryListStyles = {
  Container: styled(Box)(({ theme }) => ({
    maxWidth: "1200px",
    margin: "auto",
    padding: theme.spacing(4, 2),
    backgroundColor: "#f9f9f9", // Add a background color to the container
    textAlign: "center", // Center content
  })),

  StyledCard: styled(Card)(({ theme }) => ({
    transition: "0.3s",
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    padding: theme.spacing(3), // Add padding inside the card
    backgroundColor: "#fff", // Ensure card has a white background
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.shadows[4],
    },
  })),

  CardTitle: styled("h6")(({ theme }) => ({
    color: "#333", // Dark color for card title
    fontWeight: "bold",
  })),

  CardDescription: styled("p")(({ theme }) => ({
    color: "#555", // Light gray color for card description text
    marginTop: theme.spacing(1),
    fontSize: "0.875rem", // Slightly smaller text for descriptions
  })),
};

export default categoryListStyles;
