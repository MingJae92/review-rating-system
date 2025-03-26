import { SxProps, Theme } from "@mui/system";

export const navbarStyles: Record<string, SxProps<Theme>> = {
  navbar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    borderBottom: "1px solid #ddd",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    px: 2,
  },
  iconButton: {
    color: "black",
  },
  logo: {
    fontFamily: "'Times New Roman', serif",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  rightIcons: {
    display: "flex",
    gap: 2,
  },
};
