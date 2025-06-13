import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Location = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        px: "20px",
        py: "50px",
        backgroundColor: "#5B755C",
      }}
    >
      <MotionTypography
        variant="h2"
        mb={"30px"}
        color="#FFF"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Дорогие родные и близкие!
      </MotionTypography>

      <MotionTypography
        color="#FFF"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Мы решили связать наши судьбы и хотим разделить этот особенный день с теми, кто так важен для нас. Ваше
        присутствие наполнит наш праздник теплом, любовью и светлыми воспоминаниями, которые останутся с нами навсегда.
      </MotionTypography>

      <br />

      <MotionTypography
        color="#FFF"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Ждём вас на празднике, где начнётся наша новая история!
      </MotionTypography>
    </MotionBox>
  );
};

export default Location;
