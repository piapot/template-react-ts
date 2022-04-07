import About from "@/pages/About"
import Index from "@/pages/Index"
import NotFound from "@/pages/NotFound"

export enum Paths {
  INDEX = "/",
  ABOUT = "/about",
}

const routes = [
  {
    path: Paths.INDEX,
    el: <Index />,
  },
  {
    path: Paths.ABOUT,
    el: <About />,
  },
  {
    path: "*",
    el: <NotFound />,
  },
]

export default routes
