import { Link } from "react-router-dom";

export const Exercise = ({ exercise }) => {
  return (
    <article>
      <p>
        <Link to={`/exercises/${exercise.id}`}>{exercise.name}</Link>
        <p>{exercise.category}</p>
      </p>
      {exercise.img ? (
        <img
          alt=""
          src={`${process.env.REACT_APP_BACKEND}/uploads/${exercise.img}`}
        ></img>
      ) : null}

      <p>{exercise.description}</p>
    </article>
  );
};
