export const BASE_URL =
  process.env.NEXT_PUBLIC_HOST_BACK || "http://localhost:3000";
export const ENDPOINTS = {
  CATEGORIES: `${BASE_URL}/categories`,
  SUBCATEGORIES: `${BASE_URL}/subcategories`,
  COMMENTS: `${BASE_URL}/comments`,
  USERS: `${BASE_URL}/users`,
  LOYALTY: `${BASE_URL}/loyalty`,
};
