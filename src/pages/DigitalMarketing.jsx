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
import cardImage from "../assets/digitalmarketing.jpg";
const DigitalMarketing = () => {
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
              alt="Digital Marketing"
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
                Digital Marketing
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#475569", lineHeight: 1.6 }}
              >
                Digital Marketing is not merely a strategy; it’s a dynamic force
                that can propel your brand into the spotlight. Our Digital
                Marketing services are designed to craft compelling narratives,
                engage target audiences, and drive impactful results. From
                strategic SEO techniques and data-driven analytics to
                captivating content and strategic social media campaigns, we
                specialize in leveraging the digital landscape to boost your
                online presence. We believe in tailoring our approach to suit
                your unique brand identity, ensuring that every digital
                touchpoint aligns seamlessly with your goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DigitalMarketing;
