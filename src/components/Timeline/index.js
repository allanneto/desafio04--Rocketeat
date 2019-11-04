import React from 'react';
import Post from '../Post'
import './style.css'



const Timeline = ({posts}) => (
    <div className="timeline">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          author={post.author}
        />
      ))}
    </div>
);

export default Timeline;