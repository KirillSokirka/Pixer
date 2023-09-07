import { Helmet } from "react-helmet";

import Layout from "./components/Layout";
import Routes from "./Routes";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HeaderProvider } from "./contexts/HeaderContext";

const App = () => {
  return (
    <ThemeProvider>
      <HeaderProvider>
        <GlobalStyles />
        <Helmet>
          <title>React - Pixer App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Layout>
          <Routes />
        </Layout>
      </HeaderProvider>
    </ThemeProvider>
  );
};

export default App;
