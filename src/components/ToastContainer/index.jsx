import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerModal = styled(ToastContainer)`
  --toastify-toast-bg-color: ${(props) => props.bgColor || "#202046"};

  .Toastify__toast {
    background-color: var(--toastify-toast-bg-color);
  }

  .Toastify__toast-body {
    color: #fff;

    /* path {
      fill: #ff793f;
    }

    svg {
      fill: #ff793f;
    } */
  }

  .Toastify__progress-bar {
    /* background-color: #ff793f */
  }
`;
