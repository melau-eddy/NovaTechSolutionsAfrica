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
import cardImage from "../assets/appdevelopment.jpg";
const MobileAppDevelopment = () => {
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
          >
            <CardMedia
              component="img"
              image={cardImage}
              alt="Mobile App Development"
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
                Mobile App Development
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#475569", lineHeight: 1.6 }}
              >
                We take pride in creating seamless, feature-rich applications
                for both iOS and Android platforms. Our development process
                begins with a deep understanding of your vision and objectives,
                allowing us to design a tailored app strategy. We meticulously
                develop each aspect, from the user interface to the backend
                functionality, ensuring optimal performance and a delightful
                user journey. Through a collaborative approach, we keep you
                involved at every step, to deliver a final product that exceeds
                expectations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileAppDevelopment;
