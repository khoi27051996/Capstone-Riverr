import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { store } from "store";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { ConfigProvider } from "antd";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#821315",
          },
        }}
      >
        <Provider store={store}>
          <ToastContainer />
          <App />
        </Provider>
      </ConfigProvider>
    </StyleProvider>
  </BrowserRouter>
);
