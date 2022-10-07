import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ContentContainer, PageContainer } from "./styledMainLayouts";
import { Provider } from "react-redux";
import { rootStore } from "../Redux/store";

export const MainLayout = () => {
  return (
    <Provider store={rootStore}>
      <Header />
      <PageContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </PageContainer>
      <Footer />
    </Provider>
  );
};
