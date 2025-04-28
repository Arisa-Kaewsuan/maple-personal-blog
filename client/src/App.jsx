import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ViewPostPage from './pages/ViewPostPage';
import NotFoundPage from './pages/NotFoundPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import ProfilePage from './pages/ProfilePage';
import SignUpSuccessPage from './pages/SignUpSuccess';
import MemberPage from './pages/MemberPage';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/post/:postId" element={<ViewPostPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/signup/success" element={<SignUpSuccessPage/>}/>
          <Route path="/login" element={<LogInPage/>}/>
          <Route path="/member" element={<MemberPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
