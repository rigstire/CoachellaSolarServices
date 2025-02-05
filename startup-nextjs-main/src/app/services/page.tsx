import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Card, CardContent, Typography, Grid, Box, Container } from "@mui/material";

const services = [
  {
    title: "Pressure Washing",
    description:
      "Our expert pressure washing services remove dirt, mold, and grime from exterior surfaces, leaving them spotless. Whether it's your driveway, patio, or home siding, we restore surfaces to their original look with safe and effective cleaning techniques.",
    image: "/images/pressurewashing.jpeg",
  },
  {
    title: "Bird Proofing",
    description:
      "Protect your property from unwanted birds with our professional bird-proofing solutions. We install durable barriers and deterrents that prevent nesting and damage while ensuring the safety of your home or business.",
    image: "/images/birdproof.webp",
  },
  {
    title: "Solar Cleaning",
    description:
      "Improve your solar panel efficiency with our thorough cleaning services. We remove dust, debris, and environmental pollutants, allowing your panels to absorb maximum sunlight and generate optimal energy output.",
    image: "/images/solarcleaning.jpeg",
  },
  {
    title: "Concrete Cleaning",
    description:
      "Revitalize your concrete surfaces with deep cleaning that removes oil stains, algae, and other buildup. Our industrial-grade equipment restores the look of sidewalks, parking lots, and driveways with long-lasting results.",
    image: "/images/concretecleaning.webp",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Keep your gutters free of debris to prevent blockages and water damage. Our thorough gutter cleaning service ensures proper drainage and protects your property from potential leaks and foundation issues.",
    image: "/images/guttercleaning.jpeg",
  },
  {
    title: "Soft Washing Homes",
    description:
      "A gentle yet powerful cleaning solution for your home's exterior. Our soft washing technique safely removes mildew, algae, and stains from siding, roofing, and delicate surfaces without causing any damage.",
    image: "/images/guttercleaningtwo.png",
  },
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: "#1e3c72", minHeight: "100vh", py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: 400,
          background: "linear-gradient(45deg, #1e3c72, #2a5298)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 700, opacity: 0.9 }}>
          We specialize in top-tier exterior cleaning solutions, ensuring your property stays spotless, safe, and well-maintained.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mt: 6 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.03)" },
                  bgcolor: "#2a5298",
                  color: "white",
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    quality={80} // Optimized for quality vs. performance
                    priority={index < 2} // Prioritize loading top images first
                  />
                </Box>
                <CardContent sx={{ textAlign: "left", p: 4 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: "center", bgcolor: "#153e75", color: "white", mt: 8 }}>
        <Typography variant="h5" fontWeight={600}>
          Contact us today for a free consultation and get your property looking brand new!
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
