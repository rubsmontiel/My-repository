import { useEffect, useState } from "react";
import { getAllExercisesService } from "../services";

export const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExercises = async () => {
      try {
        setLoading(true);

        const data = await getAllExercisesService();
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadExercises();
  }, []);

  return { exercises, loading, error };
};
