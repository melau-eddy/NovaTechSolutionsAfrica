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
import cardImage from "../assets/recruitmentservices.jpg";
const RecruitmentServices = () => {
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
              alt="Recruitment Services"
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
                Recruitment Services
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#475569", lineHeight: 1.6 }}
              >
                We pride ourselves on delivering comprehensive managed IT
                services that empower businesses to stay focused on what they do
                best. Our managed IT services offer a proactive approach to IT
                management, ensuring a seamless and secure technology
                environment. Our dedicated team of experts works tirelessly to
                maintain the health and performance of your systems, resolving
                issues before they impact productivity. With our tailored
                solutions, you can scale your business confidently, knowing that
                your technology infrastructure is in expert hands. Let us handle
                the IT, so you can concentrate on achieving your business goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecruitmentServices;
