import { useContext } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { ExercisesList } from "../components/ExercisesList";
import { NewExercise } from "../components/NewExercise";
import { AuthContext } from "../context/AuthContext";
import { useExercises } from "../hooks/useExercises";
import { NewExercisePage } from "./NewExercisePage";

export const HomePage = () => {
  const { exercises, loading, error } = useExercises();
  const { user } = useContext(AuthContext);

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Lista de Ejercicios</h1>

      {user !== null && user.admin === 1 ? (
        <Link to={"/exercises"}>
          <button>Add new exercise</button>
        </Link>
      ) : null}
      <ExercisesList exercises={exercises} />
    </section>
  );
};
