import { useState } from "react"
import { useMount, useUnmount } from "ahooks"

export function useMediaQuery(query: string): boolean {
  let mediaQuery: MediaQueryList | void
  const [matches, setMatches] = useState(false)

  const update = () => {
    if (window && !mediaQuery) {
      mediaQuery = window.matchMedia(query)
      setMatches(mediaQuery.matches)
    }
  }

  useMount(() => {
    update()

    if (mediaQuery && "addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", update)
    }
  })

  useUnmount(() => {
    if (mediaQuery && "removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", update)
  })

  return matches
}
