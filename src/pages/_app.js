import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { UserProvider } from "src/context/UserContext";
import { store } from "src/redux/store";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <UserProvider>
      <ThemeProvider>
        <Toaster />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </UserProvider>
  );
}
