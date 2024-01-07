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
<<<<<<< HEAD
<<<<<<< HEAD
    <Header />
   <Routes>
    <Route path='/' element={<Main data={data.PostPage.posts} />}/> 
    <Route path='/friends' element={<Friends />}/>
    <Route path='/Profile' element={<Profiles data={data.ProfilePage} />}/>
   </Routes>
<Footer />
=======
      <header>

        <div class="logo">
          <img src="twitt.png" alt="" />
        </div>
        <div class="text">
          <a href="#">main</a>
          <a href="#">contact</a>
          <a href="#">chat</a>
          <a href="#">friend</a>
          <a href="#">profile</a>
        </div>
      </header>
=======
     <Header />
>>>>>>> 561e7599409980c273a004d542c8cd19b4eafff5
      <main>

<div class="prof">
 <img src="rectangle 3.png" alt=""/>   
 <p>user name</p>
</div>
<div class="prof2">
    <img src="rectangle 4.png" alt=""/>
</div>
<div class="post">
    <img src="rectangle 2.png" alt=""/>
</div>
<div class="devise">
    <img src="Group 1.png" alt=""/>
</div>

<div class="devise2">
    <img src="rectangle 8.png" alt=""/>
</div>


<div class="text">

<div class="text1">
<p>12534 likes</p>
</div>
<div class="text2">
<p>spider-man #dog</p>
</div>
<div class="text3">
<p>view all 467 comments</p>
</div>
<div class="text4">
<p>4 days ago</p>
</div>

</div>
</main>





>>>>>>> d3b234a0f47eef5f865eb0b9962b020b7135f893
    </div>
    </BrowserRouter>
  );
}

export default App;
