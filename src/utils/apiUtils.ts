export const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop()?.split(";").shift() : undefined;
};

export const getAuthHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const accessToken = getCookie("access_token");
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return headers;
};

interface StateType {
  loading?: boolean;
  error?: string | null;
}

export const fetchWithErrorHandling = async <T>(
  url: string,
  options: RequestInit,
  set: (state: StateType) => void
): Promise<T> => {
  set({ loading: true, error: null });
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || `Failed to fetch data from ${url}`);
    }

    if (response.status === 204) {
      set({ loading: false });
      return {} as T;
    }

    const data: T = await response.json();
    set({ loading: false });
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    set({ loading: false, error: errorMessage });
    throw error;
  }
};
