import { useRoutes } from "react-router-dom";
import { router } from "routers";
import "assets/style.css";
function App() {
  return <div>{useRoutes(router)}</div>;
}

export default App;
