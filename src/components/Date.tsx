import { Box, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { motion } from "framer-motion";

import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const Date = () => {
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
        pt: "50px",
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
        Дата
      </MotionTypography>

      <MotionTypography
        sx={{
          fontSize: "14px",
          fontWeight: "light",
          pb: 2,
          color: "#5B755C",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        АВГУСТ 2025
      </MotionTypography>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <DateCalendar
            value={dayjs("2025-08-16")}
            readOnly
            views={["day"]}
            sx={{
              "& .MuiPickersArrowSwitcher-root": {
                display: "none",
              },
              "& .MuiPickersCalendarHeader-root": {
                display: "none",
              },
              "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin": {
                backgroundColor: "#5B755C",
              },
              "& .css-1afbhty-MuiButtonBase-root-MuiPickersDay-root": {
                fontSize: "14px",
              },
              "& .css-1m4yad4-MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                fontSize: "10px",
                fontWeight: "light",
                justifyContent: "space-around",
              },
              "& .css-1pv2de5-MuiDayCalendar-weekContainer": {
                justifyContent: "space-around",
              },
              "& .css-1rl1vrc-MuiDayCalendar-header": {
                borderTop: "1px solid #E4E5E7",
                display: "flex",
                justifyContent: "space-between",
              },
            }}
          />
        </LocalizationProvider>
      </motion.div>
    </MotionBox>
  );
};

export default Date;
