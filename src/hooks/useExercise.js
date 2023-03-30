import { useEffect, useState } from "react";
import { singleExerciseService } from "../services";

export const useExercise = (id) => {
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercise = async () => {
      try {
        setLoading(true);

        const data = await singleExerciseService(id);
        setExercise(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadExercise();
  }, [id]);

  return { exercise, loading, error };
};
