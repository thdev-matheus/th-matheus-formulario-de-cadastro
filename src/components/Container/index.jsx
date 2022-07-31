import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || "50px"};

  text-align: center;

  background-color: ${(props) => props.bgColor || "#40407a"};

  .homeTitle {
    font-size: 25pt;

    color: #40407a;
  }

  .homeMessage {
    font-size: 12pt;

    color: #2c2c54;
  }

  .homeImg {
    width: 50vw;
  }

  .homeButton {
    background-color: #e0e0f3;
  }
`;
