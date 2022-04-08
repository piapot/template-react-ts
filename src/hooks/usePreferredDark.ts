import { useMediaQuery } from "./useMediaQuery"

export const QUERY_DARK = "(prefers-color-scheme: dark)"

export function usePreferredDark(): boolean {
  return useMediaQuery(QUERY_DARK)
}
