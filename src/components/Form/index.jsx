import { TextField } from "@mui/material";

export default function Form({
  register,
  errors,
  handleSubmit,
  submitForm,
  children,
}) {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  return (
    <form style={style} onSubmit={handleSubmit(submitForm)}>
      <TextField
        error={!!errors.name}
        color="primary"
        label="Name*"
        helperText={errors.name?.message}
        variant="standard"
        {...register("name")}
      />
      <TextField
        error={!!errors.email}
        color="primary"
        label="E-mail*"
        helperText={errors.email?.message}
        variant="standard"
        {...register("email")}
      />
      <TextField
        error={!!errors.password}
        color="primary"
        label="Password*"
        helperText={errors.password?.message}
        variant="standard"
        type="password"
        {...register("password")}
      />
      <TextField
        error={!!errors.confirmPassword}
        color="primary"
        label="Confirm Password*"
        helperText={errors.confirmPassword?.message}
        variant="standard"
        type="password"
        {...register("confirmPassword")}
      />
      {children}
    </form>
  );
}
