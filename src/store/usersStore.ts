import { create } from "zustand";
import { fetchWithErrorHandling, getAuthHeaders } from "../utils/apiUtils";
import { ENDPOINTS } from "@/constants/api";
import { User, UsersState } from "@/types/usersTypes";

interface AuthResponse {
  access_token: string;
  token_type: string;
}

export const useUsersStore = create<UsersState>((set) => {
  const fetchUserData = async (): Promise<User> => {
    const headers = getAuthHeaders();
    console.log("Fetching /users/me with headers:", headers);
    return fetchWithErrorHandling<User>(
      `${ENDPOINTS.USERS}/me`,
      {
        method: "GET",
        headers,
        credentials: "include",
      },
      (state) => set(state)
    );
  };

  return {
    users: [],
    totalRows: 0,
    currentUser: null,
    loading: false,
    error: null,

    initUser: async (initData: string): Promise<User> => {
      set({ loading: true, error: null });
      try {
        const url = `${ENDPOINTS.USERS}/init`;
        console.log("Sending /users/init with body:", { init_data: initData });

        const data = await fetchWithErrorHandling<AuthResponse>(
          url,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ init_data: initData }),
          },
          (state) => set(state)
        );

        console.log("Received access_token:", data.access_token);
        document.cookie = `access_token=${data.access_token}; path=/; max-age=${
          60 * 60 * 24 * 30
        }; secure; samesite=strict`;

        console.log("Fetching /users/me after init...");
        const userData = await fetchUserData();

        set({
          currentUser: userData,
          loading: false,
        });

        return userData;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error("Error in initUser:", errorMessage);
        set({ loading: false, error: errorMessage });
        throw new Error(errorMessage);
      }
    },

    // Метод для отримання даних поточного користувача
    fetchCurrentUser: async (): Promise<User> => {
      set({ loading: true, error: null });
      try {
        const userData = await fetchUserData();

        set({
          currentUser: userData,
          loading: false,
        });

        return userData;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        console.error("Error in fetchCurrentUser:", errorMessage);
        set({ loading: false, error: errorMessage });
        throw new Error(errorMessage);
      }
    },
  };
});
