import React from "react";
import Routes from "routes";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./App.styles";
import { ModalProvider } from "hooks/useModal";
import { Modal } from "components/Modal";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "components/Counter";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <Container>
            <Counter />
            <Routes />
            <Modal />
          </Container>
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
