import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

const HomePage = () => {
  const { user, isCheckingAuth } = useAuthCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isCheckingAuth && !user) {
      navigate("/auth?form=login");
    }
  }, [isCheckingAuth, user, navigate]);

  return <div className="hero-bg h-screen">HomePage</div>;
};

export default HomePage;
