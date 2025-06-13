import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import flowers from "../images/flowers.svg";

const MotionTypography = motion(Typography);

const Starting = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const img = new Image();
    img.src = flowers;
    img.onload = () => {
      setImageLoaded(true);
      document.body.style.overflow = "auto";
    };

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!imageLoaded) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#5B755C" }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
        backgroundImage: `url(${flowers})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        px: "60px",
      }}
    >
      <MotionTypography
        variant="h1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        sx={{
          textTransform: "uppercase",
          fontSize: "64px",
          lineHeight: "100%",
          textAlign: "center",
          wordBreak: "break-word",
        }}
      >
        Катя
      </MotionTypography>

      <MotionTypography
        variant="h1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        sx={{
          textTransform: "uppercase",
          fontSize: "40px",
          lineHeight: "100%",
          textAlign: "center",
          wordBreak: "break-word",
        }}
      >
        и
      </MotionTypography>

      <MotionTypography
        variant="h1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        sx={{
          textTransform: "uppercase",
          fontSize: "64px",
          lineHeight: "100%",
          textAlign: "center",
          wordBreak: "break-word",
        }}
      >
        Кирилл
      </MotionTypography>
    </Box>
  );
};

export default Starting;
