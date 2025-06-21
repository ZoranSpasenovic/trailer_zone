import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  isCheckingAuth: true,
  signUp: async (credentials) => {
    set({ loading: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials, {
        withCredentials: true,
      });

      set({ user: response.data.user, loading: false });
    } catch (err) {
      set({ loading: false });

      toast.error(err.response.data.message);
    }
  },
  login: async (credentials) => {
    set({ loading: true });
    try {
      const response = await axios.post("/api/v1/auth/login", credentials, {
        withCredentials: true,
      });

      set({ user: response.data.user, loading: false });
    } catch (err) {
      set({ loading: false });
      toast.error(err.response.data.message);
    }
  },
  logout: async () => {
    set({ loading: true });

    try {
      await axios.post(
        "/api/v1/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      set({ user: null, loading: false });
    } catch (err) {
      set({ loading: false });
      toast.error(err.response.data.message);
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get("/api/v1/auth/authCheck", {
        withCredentials: true,
      });
      set({ isCheckingAuth: false, user: response.data.user });
    } catch (err) {
      set({ isCheckingAuth: false });
      console.log(err);
    }
  },
}));
