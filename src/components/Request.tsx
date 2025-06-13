import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
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

const Request = () => {
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
        backgroundColor: "#5B755C",
      }}
    >
      <MotionTypography variants={itemVariants} variant="h2" mb={"30px"} color="#FFF">
        Несколько просьб
      </MotionTypography>

      <MotionBox
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <RequestCard
          number="1"
          text="Пожалуйста, не дарите нам живые цветы. Мы не успеем насладиться их красотой до отъезда в свадебное путешествие."
          variants={itemVariants}
        />
        <RequestCard
          number="2"
          text="Если хотите подарить ценный и нужный подарок - поместите его в конверт."
          variants={itemVariants}
        />
        <RequestCard
          number="3"
          text="Подтвердите свое присутствие с помощью анкеты до 1 июля 2025 года."
          variants={itemVariants}
        />
      </MotionBox>
    </MotionBox>
  );
};

const RequestCard = ({ number, text, variants }: { number: string; text: string; variants?: any }) => {
  return (
    <MotionBox
      variants={variants}
      sx={{
        backgroundColor: "#FFF",
        borderRadius: "8px",
        p: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "100%",
            color: "#5B755C",
          }}
        >
          {number + "."}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "right",
            lineHeight: "130%",
            color: "#5B755C",
          }}
        >
          {text}
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default Request;
