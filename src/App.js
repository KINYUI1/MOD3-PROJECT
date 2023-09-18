import {useState } from 'react'
import './App.css';
import UpdateProfilePage from './pages/UpdateProfilePage';
import AuthPage from './pages/AuthPage';
import {Routes,Route} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';
import BlogPage from './pages/BlogPage';
import Header from './components/Header';
import AddBlog from './components/AddBlog';

function App() {

  const [user,setUser] = useState(getUser())
  return (
    <main className="App">
     {user?<> 
      <NavBar user={user} setUser={setUser}/>
      
     <Routes>
      <Route exact path='/' element={<BlogPage/>}/>
      <Route path='/addblog' element={<AddBlog/>}/>
      <Route path='/updateprofile' element={<UpdateProfilePage user={user}/>}/>
      <Route path='/orders' element={<OrderHistoryPage/>}/>
     </Routes> 
     </>:<>
     <Header/>
     <Routes>
      <Route path='/' element={<BlogPage/>}/>
      <Route path='login/signin' element={<AuthPage setUser={setUser}/>}/>
     </Routes>
     
     </>}
    </main>
  );
}

export default App;
