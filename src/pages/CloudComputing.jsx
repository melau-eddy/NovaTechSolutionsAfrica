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
import cardImage from "../assets/cloudcomputing.jpg";
const CloudComputing = () => {
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
              alt="Cloud Computing"
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
                Cloud Computing
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#475569", lineHeight: 1.6 }}
              >
                Cloud Computing revolutionizes the way businesses operate by
                providing a flexible, scalable, and cost-effective solution. Our
                Cloud Computing services empower businesses to store, manage,
                and process data securely in the cloud, eliminating the need for
                on-premises infrastructure. Whether it’s leveraging
                Infrastructure as a Service (IaaS), Platform as a Service
                (PaaS), or Software as a Service (SaaS), we tailor our solutions
                to meet your unique needs. Embracing the cloud allows for
                increased collaboration, improved accessibility, and efficient
                resource allocation, enabling your organization to stay ahead in
                the competitive market.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CloudComputing;
