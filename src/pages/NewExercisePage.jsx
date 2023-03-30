import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNewExerciseService } from "../services";

export const NewExercisePage = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      const exercise = await sendNewExerciseService({ data, token });
    } catch {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1>Add new exercise</h1>
      <fieldset>
        <label htmlFor="text">Name:</label>
        <input type="text" id="name" name="name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Category:</label>
        <input type="text" id="category" name="category" required />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Image</label>
        <input type="file" id="img" name="img" accept="image/*" />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Description:</label>
        <input type="text" id="description" name="description" required />
      </fieldset>
      <button>Upload</button>
      {sending ? <p>Uploading exercise...</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
