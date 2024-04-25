import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<FirstPage />} />
                <Route path="GitHub" element={<SecondPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
