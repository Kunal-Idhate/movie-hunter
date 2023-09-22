import { createContext, useContext } from "react";

const MovieContext = createContext();
export default MovieContext;

export const MovieState = () => {
  return useContext(MovieContext);
};
