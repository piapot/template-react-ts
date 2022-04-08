import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { useDarkMode } from "./hooks"
import routes from "./routes"

const App: FC = () => {
  useDarkMode()

  return (
    <Routes>
      {routes.map(({ path, el }) => (
        <Route key={path} path={path} element={el} />
      ))}
    </Routes>
  )
}

export default App
