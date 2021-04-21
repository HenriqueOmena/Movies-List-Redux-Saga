import React from "react";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./App.styles";
import { ModalProvider } from "hooks/useModal";
import { Modal } from "components/Modal";
import Provider from "react-redux";
import store from "features/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <Container>
            <Routes />
            <Modal />
          </Container>
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
