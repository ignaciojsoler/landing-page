import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoadingPage from './components/LoadingPage'
const App = React.lazy(() => import('./App'))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </React.StrictMode>
)
