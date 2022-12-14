import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmailPage from "./pages/EmailPage";
import LoginPage from "./pages/LoginPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/email" element={<EmailPage />} />
      <Route path="/table" element={<TablePage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
