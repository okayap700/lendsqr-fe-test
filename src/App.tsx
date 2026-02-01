/** Root of app: renders routes */

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

// export default function App() {
//   return <h1>Hello from lendspre app</h1>
// }