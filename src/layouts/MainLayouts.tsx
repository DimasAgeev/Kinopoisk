import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ContentContainer, PageContainer } from "./styledMainLayouts";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </PageContainer>
      <Footer />
    </>
  );
};
