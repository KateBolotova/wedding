import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import planImage from "../images/plan.png";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Plan = () => {
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
      }}
    >
      <MotionTypography
        variant="h2"
        mb={"30px"}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        План мероприятия
      </MotionTypography>

      <motion.img
        src={planImage}
        alt="План мероприятия"
        style={{ maxWidth: "100%", height: "auto" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </MotionBox>
  );
};

export default Plan;
