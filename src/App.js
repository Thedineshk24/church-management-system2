import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmailPage from "./pages/EmailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/email" element={<EmailPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
