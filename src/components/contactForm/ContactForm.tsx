import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import contactFormDataTypes from "../../types/contactFormData/contactFormData.types";

function ContactForm() {
  const [userDetails, setUserDetails] = useState<contactFormDataTypes>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={userDetails.message}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
