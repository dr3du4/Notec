import LoginPage from "./pages/LoginPage.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
