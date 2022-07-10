import ReactDOM from "react-dom/client";
import "./index.scss";
import { Home } from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Home />);
