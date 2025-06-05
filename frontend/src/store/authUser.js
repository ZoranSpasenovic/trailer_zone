import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  signUp: async (credentials) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth/signup",
        credentials
      );

      set({ user: response.data.user, loading: false });
    } catch (err) {
      set({ loading: false });

      toast.error(err.response.data.message);
    }
  },
  login: async (credentials) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/login",
        credentials
      );

      set({ user: response.data.user, loading: false });
    } catch (err) {
      set({ loading: false });
      toast.error(err.response.data.message);
    }
  },
  logout: async () => {
    set({ loading: true });

    try {
      await axios.post("http://localhost:5050/api/v1/logout");
      set({ user: null, loading: false });
    } catch (err) {
      set({ loading: false });
      toast.error(err.response.data.message);
    }
  },
  authCheck: () => {},
}));
