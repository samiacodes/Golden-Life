import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { routes } from './routes/Routes';
function App() {
    return (_jsx("div", { className: "dark:bg-gray-900 text-gray-900 dark:text-white scrool ", children: _jsx(RouterProvider, { router: routes }) }));
}
export default App;
