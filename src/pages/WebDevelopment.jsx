import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import cardImage from "../assets/webdevelopment.jpg";
const WebDevelopment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          maxWidth: "1200px",
          alignItems: "center",
        }}
      >
        {/* Image Column */}
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          whileHover={{ scale: 1.05 }} // Hover effect for slight scaling
          transition={{ duration: 0.3 }}
        >
          <Card
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <CardMedia
              component="img"
              image={cardImage}
              alt="Web Development"
              sx={{ height: 300, objectFit: "cover" }}
            />
          </Card>
        </Grid>

        {/* Text Column */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Card
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#1E3A8A",
                  marginBottom: "20px",
                }}
              >
                Web Development
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#475569", lineHeight: 1.6 }}
              >
                We are passionate about crafting exceptional web experiences
                that resonate with your audience. Our dedicated team of
                developers harnesses the latest technologies and best practices
                to build responsive, high-performing websites tailored to your
                unique needs. From front-end design to back-end development, we
                ensure seamless functionality and an intuitive user interface.
                We prioritise collaboration and communication throughout the
                development process, ensuring your vision is at the heart of
                every line of code.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WebDevelopment;
