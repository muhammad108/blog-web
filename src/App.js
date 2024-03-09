import Topbar from './component/topbar/Topbar';
import Home from './pages/home/Home';
import Write from '../src/write/Write';
import Setting from '../src/setting/Setting';
import Login from './Login/Login';
import Single from './pages/single/Single';
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  const user = false;
  return (
    <div className="App">
    <BrowserRouter>

      <Topbar/>  
    <Routes>
      <Route exact path="/"element={<Home/>} />

      <Route path="/write"element={user?<Login/>:<Write/>} />
      <Route path="/setting"element={user?<Setting/>:<Login/>} />
      <Route path="/login"element={user?<Home/>:<Login/>} />
      <Route path="/post/:postId"element={<Single/>} />
    </Routes>
    
   </BrowserRouter>
    </div>
  );
}

export default App;
