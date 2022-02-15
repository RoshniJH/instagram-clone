import React,{useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts,setPosts] = useState([
    {
      username:"Roshni" ,
      caption:"wohooo" ,
      imageUrl:"https://reactjs.org/logo-og.png"
    },
    {
      username:"its_me",
      caption:"tadaa",
      imageUrl:"https://www.fnp.com/images/pr/x/v20210907192911/led-teddy-bear_1.jpg"
    }
  ]);
  
  return (
    <div className="app">
      
      <div className="app__header">
            <img 
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt ="" />
      </div>
      <h1>instagram clone</h1>
      {
        posts.map(post => {
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
      })}
      <Post username="Roshni" caption="wohoo" imageUrl="https://reactjs.org/logo-og.png"/>
      <Post username="its_me" caption="tadaa" imageUrl="https://i.ytimg.com/vi/XOPYNKvc4R0/maxresdefault.jpg"/>
     {/*header */}
     {/*posts */}
     {/*posts */}
    </div>
  );
}

export default App;
