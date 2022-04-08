import { useState, useEffect } from "react"
import type { Dispatch, SetStateAction } from "react"
import { useUpdateEffect, useLocalStorageState } from "ahooks"
import { usePreferredDark } from "./usePreferredDark"

type UseDarkModeReturn = [boolean, Dispatch<SetStateAction<boolean>>]
type ColorScheme = "auto" | "light" | "dark"

const KEY_COLOR_SCHEME = "color-scheme"

export function useDarkMode(): UseDarkModeReturn {
  const preferredDark = usePreferredDark()
  const [colorScheme, setColorScheme] = useLocalStorageState<ColorScheme>(
    KEY_COLOR_SCHEME,
    { defaultValue: "auto" },
  )
  const [isDark, setIsDark] = useState(colorScheme === "dark")

  useEffect(() => {
    const docEl = document.documentElement

    switch (colorScheme) {
      case "dark":
        docEl.classList.add("dark")
        break
      case "light":
        docEl.classList.remove("dark")
        break
      default:
        if (preferredDark) {
          docEl.classList.add("dark")
        } else {
          docEl.classList.remove("dark")
        }
        break
    }
  }, [preferredDark])

  useUpdateEffect(() => {
    const docEl = document.documentElement

    if (isDark) {
      docEl.classList.add("dark")
      setColorScheme("dark")
    } else {
      docEl.classList.remove("dark")
      setColorScheme("light")
    }
  }, [isDark])

  return [isDark, setIsDark]
}
