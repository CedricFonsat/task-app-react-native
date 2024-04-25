import { Provider } from "react-redux";
import RootStack from "@src/navigation/RootStack";
import { store } from "@src/store";

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
