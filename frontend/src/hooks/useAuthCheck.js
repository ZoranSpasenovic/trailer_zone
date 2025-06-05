import { useEffect } from "react";
import { useAuthStore } from "../store/authUser";

const useAuthCheck = () => {
  const { authCheck, isCheckingAuth, user } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return { isCheckingAuth, user };
};

export default useAuthCheck;
