import LoginPage from "./pages/LoginPage.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import CreateQuiz from "./pages/CreateQuiz.tsx";
import HomePage from "./pages/HomePage.tsx";
import ShopPage from "./pages/ShopPage.tsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
      </Route>
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
