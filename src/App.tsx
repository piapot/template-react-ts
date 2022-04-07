import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import routes from "./routes"

const App: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, el }) => (
        <Route path={path} element={el} />
      ))}
    </Routes>
  )
}

export default App
