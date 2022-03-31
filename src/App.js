import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewsPage />}>
                    <Route path=":category" element={<NewsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
