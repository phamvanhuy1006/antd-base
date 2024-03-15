import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "src/services/reducers/reducers";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./shared/contexts/jwt-auth";
import renderScreens from "./modules/router/render-screens";
import routes from "./modules/router/routes";

const theme = {
  token: {
    colorPrimary: "#00b96b",
    borderRadius: 2,
    colorBgContainer: "#f6ffed",
  },
};

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <BrowserRouter>
          <AuthProvider>{renderScreens(routes)}</AuthProvider>
        </BrowserRouter>
      </ConfigProvider>

      <ToastContainer />
    </Provider>
  );
}

export default App;
