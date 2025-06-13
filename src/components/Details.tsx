import { Box, Typography, IconButton, Link } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Details = () => {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
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
      <MotionTypography variants={itemVariants} variant="h2" mb={"30px"}>
        Детали
      </MotionTypography>

      <MotionTypography variants={itemVariants} color="#5B755C" mb={1}>
        Если у вас остались вопросы или вы хотите сделать нам сюрприз на свадьбе, то смело пишите нашему организатору
        Екатерине.
      </MotionTypography>

      <MotionBox variants={itemVariants} sx={{ display: "flex", mb: "30px" }}>
        <IconButton
          component={Link}
          href="https://t.me/Kate_event"
          target="_blank"
          rel="noopener"
          aria-label="Telegram"
        >
          <TelegramIcon fontSize="large" sx={{ color: "#5B755C" }} />
        </IconButton>
      </MotionBox>

      <MotionTypography
        variants={itemVariants}
        variant="h2"
        sx={{ fontSize: "26px", lineHeight: "110%" }}
        color="#5B755C"
      >
        С любовью,
      </MotionTypography>
      <MotionTypography
        variants={itemVariants}
        variant="h2"
        sx={{ fontSize: "26px", lineHeight: "110%" }}
        color="#5B755C"
      >
        Кирилл и Катя!
      </MotionTypography>
    </MotionBox>
  );
};

export default Details;
