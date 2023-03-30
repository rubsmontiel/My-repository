import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Exercise } from "../components/Exercise";
import { AuthContext } from "../context/AuthContext";
import { useExercise } from "../hooks/useExercise";

export const ExercisePage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const { exercise, loading, error } = useExercise(id);

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Ejercicio:</h1>
      <Exercise exercise={exercise} />
      {user ? <p>aquí poder modificar un ejercicio si eres admin</p> : null}
    </section>
  );
};
