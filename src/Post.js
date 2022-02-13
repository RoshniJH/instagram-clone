import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
  return (
    <div className="post">
    <div className="post__header">
    {/*header -> avatar + username} */}
    <Avatar 
    className="post__avatar"
    alt='Roshna'
    src="/static/images/avatar/1.jpg"
    />
    <h3>Username</h3>
</div>
{/*image -> to post */}
<img 
className="post__image"
src="https://reactjs.org/logo-og.png"
alt="post"
/>

{/* image bottom -> username + caption */}
<h4 className="post__text">
<strong>Roshna</strong> wohoo</h4>

</div>
  )
}

export default Post