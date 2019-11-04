import React from 'react';
import Comment from '../Comment'
import './style.css'
import allan from '../../assets/allan.jpeg'

    function Post({ post, author }){
    return (
    <>
    <div className="content">
            <div className="post">
                <div className="autor">
                    <img src={allan} alt="avatar"/>
                    <div className="info">
                        <a href="">{author.name}</a>
                        <span>{post.date}</span>
                    </div>
                </div>
                <p>{post.content}</p>
                {post.comments.map(comment => 
                <Comment 
                key={comment.id} 
                data={comment} 
                />)}
            </div>
    </div>
    </>
    )
}
export default Post;