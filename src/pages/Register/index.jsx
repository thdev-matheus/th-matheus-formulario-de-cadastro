import { registerSchema } from "../../services/schema.js";

import { Container } from "../../components/Container";
import Form from "../../components/Form/index.jsx";
import { RegButton } from "../../components/Button/index.jsx";
import { ToastMessage } from "../../components/ToastModals/toastMessage.js";
import { ToastContainerModal } from "../../components/ToastContainer";

import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.min.css";

export default function Register({ Data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const history = useHistory();

  const submitForm = (data) => {
    if (Data.database.some((user) => user.email === data.email)) {
      ToastMessage.error(
        "Este e-mail já consta em nosso cadastro. Tente um e-mail diferente!"
      );
    } else {
      delete data.confirmPassword;
      data.id = Data.idGenerator();
      Data.database.push(data);
      ToastMessage.success("Usuário Cadastrado com sucesso");
      setTimeout(() => {
        ToastMessage.success("Aguarde...");
      }, 1000);
      setTimeout(() => {
        history.push(`/home/${data.id}`);
      }, 4000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",

            width: "20rem",
            minHeight: "27rem",

            borderRadius: "8px",
            outline: "2px solid #40407a",
            outlineOffset: "-15px",

            padding: "25px",

            color: "#fff",

            h2: {
              fontSize: "25pt",
              color: "#40407a",
            },
          }}
          elevation={7}
        >
          <h2>Register</h2>
          <Form
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            submitForm={submitForm}
          >
            <RegButton color="primary" type="submit">
              Sign up
            </RegButton>
          </Form>
        </Paper>
        <ToastContainerModal />
      </Container>
    </motion.div>
  );
}
