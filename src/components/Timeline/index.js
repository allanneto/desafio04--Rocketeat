import React from 'react';

import Post from '../Post'



const Timeline = ({posts}) => (
    <div class="timeline">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
);

export default Timeline;