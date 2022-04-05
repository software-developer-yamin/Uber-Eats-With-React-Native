import { Provider } from "react-redux";
import { store } from "./app/store";
import RootNavigation from "./navigation";

export default function App() {
  return (
    <Provider store={store} >
      <RootNavigation />
    </Provider>
  );
}
