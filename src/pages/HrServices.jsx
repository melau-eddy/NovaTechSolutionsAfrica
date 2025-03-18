import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";

// Import images
import cardImage from "../assets/hrserviceimage1.jpg";
import executiveSearchImage from "../assets/executivesearch.jpg";
import bulkHiringImage from "../assets/bulkhiring.jpeg";
import bgVerificationImage from "../assets/bgverification.webp";
import onboardingImage from "../assets/onboarding.webp";
import talentPoolImage from "../assets/talentpool.jpg";

const HrServices = () => {
  const navigate = useNavigate(); // Initialize navigate

  const services = [
    {
      title: "End-to-end Recruitment",
      description:
        "We specialize in providing end-to-end recruitment solutions that guide organizations through the entire hiring lifecycle. Our comprehensive approach begins with a deep understanding of your talent needs and organizational culture...",
      image: cardImage,
    },
    {
      title: "Executive Search",
      description:
        "At AlphaTrixx, we excel in executive search services, dedicated to identifying and attracting top-tier talent for your organization...",
      image: executiveSearchImage,
    },
    {
      title: "Bulk Hiring",
      description:
        "Our dedicated team streamlines the recruitment process, employing industry-best practices and innovative techniques...",
      image: bulkHiringImage,
    },
  ];

  const additionalServices = [
    {
      title: "BG Verification",
      description:
        "Our meticulous background verification services provide accurate and reliable information about potential employees...",
      image: bgVerificationImage,
    },
    {
      title: "Onboarding Support",
      description:
        "We offer comprehensive onboarding support to help seamlessly integrate new hires into your organization...",
      image: onboardingImage,
    },
    {
      title: "Talent Pool",
      description:
        "We streamline and optimize the process of identifying, nurturing, and deploying the right talent for your organization...",
      image: talentPoolImage,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", padding: "50px 0" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#333"
          mb={3}
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Innovative HR Solutions, Outstanding Results
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          maxWidth="800px"
          margin="0 auto"
          mb={5}
        >
          Discover tailored HR services that cater to your business's specific
          needs, helping you achieve outstanding results with efficient and
          effective workforce management.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ padding: "40px 0", backgroundColor: "#f5f5f5" }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/hr-services")}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 4,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 8 },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image} // Use the imported image here
                    alt={service.title}
                    sx={{
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <CardContent sx={{ padding: 3 }}>
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight="bold"
                      color="#1976d2"
                      mb={1}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ height: "75px", overflow: "hidden" }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional Services Section */}
      <Box
        sx={{
          padding: "40px 0",
          backgroundColor: "#fff",
          marginTop: "40px",
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Grid container spacing={4}>
          {additionalServices.map((additionalService, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/additional-services")}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 4,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 8 },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={additionalService.image} // Use the imported image here
                    alt={additionalService.title}
                    sx={{
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <CardContent sx={{ padding: 3 }}>
                    <Typography
                      variant="h5"
                      component="div"
                      fontWeight="bold"
                      color="#1976d2"
                      mb={1}
                    >
                      {additionalService.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ height: "75px", overflow: "hidden" }}
                    >
                      {additionalService.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HrServices;
