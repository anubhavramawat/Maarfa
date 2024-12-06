import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Error } from './components/Error.jsx'
import { Home } from './components/Home.jsx'
//import { CountryDetail } from './components/countryDetail.jsx'
import CountryDetail from './components/CountryDetails.jsx'


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/:country',
        element: <CountryDetail />,

        },
      ],
    },
  ])

createRoot(document.getElementById('root')).render(
    //<App />
    <RouterProvider router={router} />
)
