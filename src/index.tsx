import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import { Provider } from "react-redux"
import store from "../src/redux/store/store"
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
