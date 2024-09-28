import LoginPage from "./pages/LoginPage.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CreateQuiz from "./pages/CreateQuiz.tsx";
import HomePage from "./pages/HomePage.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import {useContext} from "react";
import {MouseContext} from "./context/mouseContext.tsx";
function App() {
    const {cursorType, cursorChangeHandler}  = useContext(MouseContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:id" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
          <Route path="/quiz" element={<QuizPage />} />
      </Route>,
    ),
  );

    return <div className={cursorType}><RouterProvider router={router} /></div>;
}

export default App;
