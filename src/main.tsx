import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import Global from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Global />
            <App />
        </Provider>
    </React.StrictMode>
)
