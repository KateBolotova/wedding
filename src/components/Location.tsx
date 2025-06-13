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
        Место празднования
      </MotionTypography>

      <MotionTypography
        color="#FFF"
        mb={"20px"}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Парк Белый колодец, Большой шатер на косе
      </MotionTypography>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        style={{
          minWidth: "300px",
          minHeight: "300px",
          height: "300px",
          width: "320px",
        }}
      >
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f4a245e01e8a65a328f2a92384bc60f7730e2dd8e5fbfdaa59bf09c27f901bb&amp;source=constructor"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ borderRadius: "12px" }}
        ></iframe>
      </motion.div>
    </MotionBox>
  );
};

export default Location;
