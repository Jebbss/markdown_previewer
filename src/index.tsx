// import react using typescript syntax
import * as React from "react";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createRoot, Root} from 'react-dom/client';

const root: Root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
registerServiceWorker();
