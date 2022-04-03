import { useState, useEffect, useCallback } from "react"
import type { Dispatch, SetStateAction } from "react"

type Theme = "light" | "dark"
type SetTheme = Dispatch<SetStateAction<Theme>>

export function useDarkMode(): [Theme, SetTheme] {
  const docEl = document.documentElement
  const [theme, setTheme] = useState<Theme>("light")

  const toggleTheme = useCallback(
    (theme: Theme) => {
      if (theme === "dark") {
        docEl.classList.add("dark")
      } else {
        docEl.classList.remove("dark")
      }
      setTheme(theme)
      docEl.setAttribute("data-theme", theme)
      localStorage.setItem("theme", theme)
    },
    [theme],
  )

  useEffect(() => {
    const query = "(prefers-color-scheme: dark)"

    const changeTheme = (event: MediaQueryListEvent) => {
      toggleTheme(event.matches ? "dark" : "light")
    }

    const preferDark = window?.matchMedia(query).matches
    const theme =
      localStorage.getItem("theme") || (preferDark ? "dark" : "light")

    if (window.matchMedia) {
      window.matchMedia(query).addEventListener("change", changeTheme)
    }

    docEl.setAttribute("data-theme", theme)
    toggleTheme(theme as Theme)

    return () => {
      if (window.matchMedia) {
        window.matchMedia(query).removeEventListener("change", changeTheme)
      }
    }
  }, [!docEl.getAttribute("data-theme")])

  useEffect(() => {
    toggleTheme(theme)
  }, [theme])

  return [theme, setTheme]
}
