import { IntlProvider } from "react-intl";
import "../styles/tailwind.css";
import "../styles/slick.css";
import messages from "../public/static/locales/en.json";

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale="en" messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
