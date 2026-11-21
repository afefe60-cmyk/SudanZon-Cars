export const FAVORITES_STORAGE_KEY = "sudanzon_favorite_cars";
export const FAVORITES_CHANGED_EVENT = "sudanzon:favorites-changed";

export function readFavorites() {
  if (typeof window === "undefined") return [];

  try {
    const value = JSON.parse(window.localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(car) {
  if (typeof window === "undefined" || !car?.id) return false;

  const favorites = readFavorites();
  const exists = favorites.some((favorite) => favorite.id === car.id);
  const nextFavorites = exists
    ? favorites.filter((favorite) => favorite.id !== car.id)
    : [{ ...car }, ...favorites];

  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(nextFavorites));
  } catch {
    return null;
  }
  window.dispatchEvent(new Event(FAVORITES_CHANGED_EVENT));
  return !exists;
}
