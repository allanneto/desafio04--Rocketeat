import React from 'react';
import Comment from '../Comment'


const Post = ({ post : { author, date, content, comments } }) => (
    <>
         <div className="Post">
             <div className="author">
                 <img src={author.avatar} alt="avatar"/>
                 <div className="info">
                     <a href="">{author.name}</a>
                     <span>{date}</span>
                 </div>
             </div>
             <p>{content}</p>
             {comments.map(comment => <Comment key={comments.id} data={comment} />)}
         </div>
    </>
);

export default Post;