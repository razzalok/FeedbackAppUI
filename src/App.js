import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'


const App = () => {
  
  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path="/" element={
              <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList/>
              </>
            } />
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
        </div>
        <AboutIconLink/>
      </Router>
    </FeedbackProvider>
  )
}

export default App
