import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    isComing: "",
    withWhom: "",
    drinks: [] as string[],
    allergies: "",
    needTransfer: "",
    transferAddress: "",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [, setSubmitStatus] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwJTdk9QcMyzVSodXVYvPFDerDDBiWMDLwDYbwD0q1ITBkf0gp7usOo0TpWCUpH6rFRIA/exec";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (field: "isComing" | "needTransfer") => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (field === "isComing") {
      setFormData((prev) => ({
        ...prev,
        isComing: value,
        ...(value === "Нет" && {
          withWhom: "",
          drinks: [],
          allergies: "",
          needTransfer: "",
          transferAddress: "",
          comment: "",
        }),
      }));
    } else if (field === "needTransfer") {
      setFormData((prev) => ({
        ...prev,
        needTransfer: value,
        ...(value === "Нет" && { transferAddress: "" }),
      }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      drinks: checked ? [...prev.drinks, value] : prev.drinks.filter((d) => d !== value),
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const params = new URLSearchParams({
      ...formData,
      drinks: formData.drinks.join(", "),
    });

    try {
      await fetch(`${scriptUrl}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        isComing: "",
        withWhom: "",
        drinks: [],
        allergies: "",
        needTransfer: "",
        transferAddress: "",
        comment: "",
      });
      setOpenSnackbar(true);
    } catch {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const textFieldSx = {
    "& .MuiInputLabel-root": {
      color: "#FFF",
      "&.Mui-focused": { color: "#FFF" },
    },
    "& .MuiOutlinedInput-root": {
      color: "#FFF",
      "& fieldset": { borderColor: "#FFF" },
      "&:hover fieldset": { borderColor: "#FFF" },
      "&.Mui-focused fieldset": { borderColor: "#FFF" },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(255,255,255,0.7)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
        backgroundColor: "#5B755C",
        alignItems: "center",
        px: 2,
        py: 6,
      }}
    >
      <Typography variant="h2" mb={4} color="#FFF">
        Анкета гостя
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <TextField
          fullWidth
          label="Имя Фамилия"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={textFieldSx}
        />

        <FormControl component="fieldset" required>
          <FormLabel sx={{ color: "#FFF", "&.Mui-focused": { color: "#FFF" } }}>Вы придете?</FormLabel>
          <RadioGroup row name="isComing" value={formData.isComing} onChange={handleRadioChange("isComing")}>
            {["Да", "Нет"].map((opt) => (
              <FormControlLabel
                key={opt}
                value={opt}
                control={
                  <Radio
                    sx={{
                      color: "#FFF",
                      "&.Mui-checked": { color: "#FFF" },
                    }}
                  />
                }
                label={opt}
                sx={{ "& .MuiFormControlLabel-label": { color: "#FFF" } }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {formData.isComing === "Да" && (
          <>
            <TextField
              fullWidth
              label="С кем придете?"
              name="withWhom"
              value={formData.withWhom}
              onChange={handleChange}
              sx={textFieldSx}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ color: "#FFF" }}>Предпочитаемые напитки:</Typography>
              {["Шампанское", "Красное вино", "Белое вино", "Виски", "Мартини", "Безалкогольные напитки"].map(
                (drink) => (
                  <FormControlLabel
                    key={drink}
                    control={
                      <Checkbox
                        value={drink}
                        checked={formData.drinks.includes(drink)}
                        onChange={handleCheckboxChange}
                        sx={{
                          color: "#FFF",
                          "&.Mui-checked": { color: "#FFF" },
                        }}
                      />
                    }
                    label={drink}
                    sx={{
                      width: "100%",
                      "& .MuiFormControlLabel-label": { color: "#FFF" },
                    }}
                  />
                )
              )}
            </Box>

            <TextField
              fullWidth
              label="У вас есть аллергия на что-то?"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              sx={textFieldSx}
            />

            <FormControl component="fieldset">
              <FormLabel sx={{ color: "#FFF", "&.Mui-focused": { color: "#FFF" } }}>
                Понадобится ли вам трансфер?
              </FormLabel>
              <RadioGroup
                row
                name="needTransfer"
                value={formData.needTransfer}
                onChange={handleRadioChange("needTransfer")}
              >
                {["Да", "Нет"].map((opt) => (
                  <FormControlLabel
                    key={opt}
                    value={opt}
                    control={
                      <Radio
                        sx={{
                          color: "#FFF",
                          "&.Mui-checked": { color: "#FFF" },
                        }}
                      />
                    }
                    label={opt}
                    sx={{ "& .MuiFormControlLabel-label": { color: "#FFF" } }}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            {formData.needTransfer === "Да" && (
              <TextField
                fullWidth
                label="Откуда вас забрать?"
                name="transferAddress"
                value={formData.transferAddress}
                onChange={handleChange}
                sx={textFieldSx}
              />
            )}

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Любой комментарий"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              sx={textFieldSx}
            />
          </>
        )}

        <Button
          type="submit"
          variant="outlined"
          fullWidth
          disabled={submitting}
          sx={{
            color: "#FFF",
            borderColor: "#FFF",
            "&:hover": {
              borderColor: "#FFF",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          {submitting ? "Отправка..." : "Отправить"}
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Спасибо за ответ! Данные успешно отправлены 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
