import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Friends from './Friends';
import Profile from './Profile';
import data from './data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profiles from './Profiles';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
   <Routes>
    <Route path='/' element={<Main data={data.PostPage.posts} />}/> 
    <Route path='/friends' element={<Friends />}/>
    <Route path='/Profile' element={<Profiles data={data.ProfilePage} />}/>
   </Routes>
<Footer />
</div>
    </BrowserRouter>
  );
}

export default App;
