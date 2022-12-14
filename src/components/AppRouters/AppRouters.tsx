import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage";
import { AppRoute } from "../Enums/roter";
import { RegistrationPage } from "../../Pages/RegistrationPage";
import { ResetPasswor } from "../../Pages/ResetPasswordPage";
import { ActivationAccount } from "../../Pages/ActivationPage";
import { MainLayout } from "../../layouts/MainLayouts";
import { PostCardPage } from "../../Pages/PostCadPages/PostCardPages";
import { ConfedentialPage } from "../../Pages/ConfedentialPage/ConfedentialPage";
import { DetailsPost } from "../PostDetails/detailsPost";
import { FavouriteMoviesPage } from "../../Pages/FavoritesPage";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainLayout />}>
        <Route index element={<PostCardPage />}></Route>
        <Route path={`${AppRoute.Post}/:movieId`} element={<DetailsPost />} />
        <Route
          path={AppRoute.Confedential}
          element={<ConfedentialPage />}
        ></Route>
        <Route
          path={AppRoute.Favorites}
          element={<FavouriteMoviesPage />}
        ></Route>
      </Route>
      <Route path={AppRoute.Login} element={<LoginPage />}></Route>
      <Route
        path={AppRoute.Registration}
        element={<RegistrationPage />}
      ></Route>
      <Route
        path={`${AppRoute.Activation}/:uid/:token`}
        element={<ActivationAccount />}
      />
      <Route path={AppRoute.Reset} element={<ResetPasswor />}></Route>
    </Routes>
  );
};
