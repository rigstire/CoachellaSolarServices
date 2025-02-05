"use client";  // Add this to mark the file as a client-side component
import { Box, Typography, Container, Card, CardContent, Grid, Button } from "@mui/material";
import Image from "next/image";
import YouTube from "react-youtube";
import { useState } from "react";

const FactsPage = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoOpts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,  // Prevent videos from auto-playing
    },
  };

  const handleVideoClick = (videoId: string) => {
    // If the same video is clicked, stop it, else start the new one
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <Box sx={{ bgcolor: "#F5F7FA", minHeight: "100vh", py: 8 }}>
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
          The Importance of Solar Panel Cleaning
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 750, opacity: 0.9 }}>
          Learn how cleaning your solar panels can significantly enhance their efficiency, performance, and lifespan.
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={6}>
          {/* Fact 1 - Dirty vs Clean Solar Panel Power Output Comparison */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4, bgcolor: "white" }}>
              <Image
                src="/images/solarcleaning.jpeg"
                alt="Dirty vs Clean Solar Panels"
                width={800}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  The Power Difference: Dirty vs. Clean Solar Panels
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  On August 3, 2023, RPS Solar Pumps conducted a real-world experiment to assess the impact of cleaning solar panels on energy efficiency.
                  The test revealed that dirty panels produced just 145 Watts of energy. After cleaning, the output increased to 183 Watts, showing a
                  remarkable 26% increase in energy efficiency! This experiment underscores the importance of cleaning your panels to boost solar energy
                  production. Watch the full comparison in the video below.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <div onClick={() => handleVideoClick("9gvOGiBp3lU")}>
                    <YouTube
                      videoId="9gvOGiBp3lU"
                      opts={videoOpts}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Fact 2 - Should You Clean Your Solar Panels? */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4, bgcolor: "white" }}>
              <Image
                src="/images/supdadupawash.jpg"
                alt="Should You Clean Your Solar Panels?"
                width={800}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  The Need for Regular Solar Panel Cleaning
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  Solar panels are constantly exposed to environmental factors like dust, pollen, bird droppings, algae, and pollutants, all of which
                  diminish their efficiency. Regular cleaning is essential for maintaining peak performance and ensuring your solar system continues to
                  produce maximum energy output. Industry experts recommend cleaning your solar panels regularly to protect your investment and maximize
                  energy savings. Watch the video below to understand why keeping your panels clean is crucial for optimal performance.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <div onClick={() => handleVideoClick("icGPVH7sQcU")}>
                    <YouTube
                      videoId="icGPVH7sQcU"
                      opts={videoOpts}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Section 3: Benefits of Solar Panel Cleaning */}
      <Box sx={{ py: 8, bgcolor: "#e1effd" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} color="#2a5298" gutterBottom>
            Why You Should Clean Your Solar Panels
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.9, mb: 4 }}>
            Regular solar panel cleaning isn’t just about aesthetics. It’s about ensuring your system operates at peak performance, enhancing its
            energy output, and prolonging its lifespan. Below are the top reasons why keeping your solar panels clean is crucial:
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: "white", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} color="#2a5298" gutterBottom>
                    1. Enhanced Energy Efficiency
                  </Typography>
                  <Typography variant="body2">
                    Cleaning your solar panels ensures they capture more sunlight, leading to better energy efficiency and reduced electricity costs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: "white", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} color="#2a5298" gutterBottom>
                    2. Prolonged System Lifespan
                  </Typography>
                  <Typography variant="body2">
                    Regular cleaning removes contaminants that can degrade your solar panels over time, helping to extend their lifespan and optimize
                    long-term performance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: "white", boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} color="#2a5298" gutterBottom>
                    3. Maximized Return on Investment (ROI)
                  </Typography>
                  <Typography variant="body2">
                    A clean solar panel system operates at full capacity, delivering the best return on your investment and ensuring you get the most
                    out of your solar energy setup.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 8, textAlign: "center", bgcolor: "#153e75", color: "#F5F7FA", mt: 8 }}>
        <Typography variant="h5" fontWeight={600}>
          Maximize Your Solar Investment with Professional Cleaning
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
          Don’t let dirt and debris hinder your solar panel system’s performance. Contact us today to schedule a professional cleaning and
          enjoy better energy savings.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3, px: 5, fontSize: "1.2rem" }}
          href="mailto:officialtopsoftware@gmail.com"
        >
          Contact Us Today
        </Button>
      </Box>
    </Box>
  );
};

export default FactsPage;
