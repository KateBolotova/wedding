import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Palette = () => {
  const commonSx = { height: "50px", width: "50px", borderRadius: "90px" };
  const colors = ["#FFDAB9", "#F7D6E0", "#E6DCF4", "#DDEEFF", "#02633E"];

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
        Цветовая палитра
      </MotionTypography>

      <MotionTypography variants={itemVariants} pb={1} color="#5B755C" sx={{ maxWidth: "600px", textAlign: "center" }}>
        Мы очень старались сделать праздник красивым, пожалуйста, в своих нарядах поддержите цветовую гамму нашей
        свадьбы!
      </MotionTypography>
      <MotionTypography variants={itemVariants} color="#5B755C" sx={{ maxWidth: "600px", textAlign: "center" }}>
        Для мужчин подойдут брюки и рубашка/поло, а для девушек — вечерние платья. Откажитесь от черного и белого,
        используйте в нарядах нежные, пастельные оттенки, например, такие:
      </MotionTypography>

      <MotionBox
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          pt: "30px",
          maxWidth: "320px",
        }}
      >
        {colors.map((color) => (
          <MotionBox key={color} variants={itemVariants} sx={{ ...commonSx, backgroundColor: color }} />
        ))}
      </MotionBox>
    </MotionBox>
  );
};

export default Palette;
