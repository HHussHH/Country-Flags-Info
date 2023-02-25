import { clearControls } from "./controls-slice";
import { useDispatch } from "react-redux";

export const useCleanup = () => {
  const dispatch = useDispatch();
  const cleanUp = () => dispatch(clearControls());

  return cleanUp;
};
