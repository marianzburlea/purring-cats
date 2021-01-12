import React from "react"
import { Router } from '@reach/router'
import GoogleFontLoader from 'react-google-font-loader'
import { ToastContainer } from "react-toastify"

import { TopMenu } from "../top-menu"
import { Home } from "../home"
import { Upload } from "../upload"
import 'react-toastify/dist/ReactToastify.css'

const PurringCats = () => {
  return (
    <div>
      <TopMenu />
      <Router>
        <Home path="/" />
        <Upload path="/upload" />
      </Router>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: ['400']
          }
        ]}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  )
}

export { PurringCats }
