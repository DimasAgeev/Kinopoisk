import { Header } from "../components/Header/Header";
import { PostCardPage } from "./PostCadPages/PostCardPages";
import { ContentContainer, PageContainer } from "../layouts/styledMainLayouts";
import { Footer } from "../components/Footer/Footer";
export const MainPage = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentContainer>
          <PostCardPage />
        </ContentContainer>
      </PageContainer>
      <Footer />
    </>
  );
};
