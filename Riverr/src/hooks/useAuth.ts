import { useSelector } from "react-redux";
import { ROOTSTATE } from "store";

export const useAuth = () => {
  const {token, userSignUp} = useSelector((state: ROOTSTATE) => state.administerUser);
  return {
    token : token,
    users: userSignUp
  }
};
