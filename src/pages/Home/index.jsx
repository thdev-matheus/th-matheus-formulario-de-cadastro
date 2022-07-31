import { motion } from "framer-motion";
import { useParams, useHistory } from "react-router-dom";

import { RegButton } from "../../components/Button";
import { Container } from "../../components/Container";
import { ToastContainerModal } from "../../components/ToastContainer";
import { ToastMessage } from "../../components/ToastModals/toastMessage.js";

import image from "../../img/wellcome_img.png";

export default function Home({ Data }) {
  const id = useParams().id;
  const history = useHistory();

  const atualUser = Data.database.find((user) => user.id === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container gap="20px" bgColor="#e0e0f3">
        <h2 className="homeTitle">Welcome, {atualUser.name}!</h2>
        <small className="homeMessage">It's great to have you here.</small>
        <img className="homeImg" src={image} alt="" />
        <RegButton
          className="homeButton"
          onClick={() => {
            ToastMessage.success("Obrigado por vir até aqui");
            setTimeout(() => {
              ToastMessage.success("aguarde...");
            }, 1000);
            setTimeout(() => {
              history.goBack();
            }, 4000);
          }}
        >
          Back
        </RegButton>
      </Container>
      <ToastContainerModal bgColor="#7474bd" />
    </motion.div>
  );
}
