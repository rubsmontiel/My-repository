import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ExercisePage } from "./pages/ExercisePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NewExercise } from "./components/NewExercise";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/exercises/:id" element={<ExercisePage />} />
        <Route path="/exercises" element={<NewExercise />} />
        {/*en caso de no encontrar alguna de las rutas anteriores nos avisa del error*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
