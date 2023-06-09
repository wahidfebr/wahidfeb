import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes";
import store from "./stores";

function App() {
    return (
        <div className="bg-neutral-100">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
