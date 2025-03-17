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

// Import the card image
import cardImage from "../assets/itconsulting.webp";

const ItConsulting = () => {
  return (
    <Box
      sx={{
        background: "#e5e7eb",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: "blur(10px)",
          zIndex: -1,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      />
      <Grid
        container
        spacing={5}
        sx={{
          maxWidth: "1200px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Image Column */}
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              cursor: "pointer",
              transform: "scale(0.97)",
              "&:hover": {
                transform: "scale(1)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            <CardMedia
              component="img"
              image={cardImage} // Use the imported image here
              alt="IT Consulting"
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
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            sx={{
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(5px)",
              cursor: "pointer",
              transition: "0.4s ease",
              "&:hover": {
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              },
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
                  "&:hover": { color: "#4F46E5", transition: "color 0.3s" },
                }}
              >
                IT Consulting
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#475569",
                  lineHeight: 1.7,
                  "&:hover": { color: "#334155", transition: "color 0.3s" },
                }}
              >
                Our seasoned consultants work closely with businesses to
                understand their unique needs and challenges, providing
                strategic guidance and actionable insights. We specialize in
                optimizing IT infrastructure, leveraging the latest
                technologies, and aligning IT strategies with your
                organizational goals. From assessing current systems to
                recommending enhancements and implementing future-ready
                solutions, we are committed to delivering outcomes that drive
                efficiency, innovation, and growth. Partner with us to embrace
                the full potential of technology and stay ahead in this dynamic
                era of digital transformation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItConsulting;
