import React from 'react';
import Comment from '../Comment'
import './style.css'
import profile from '../../assets/profile.jpg'

    function Post({ post, author }){
    return (
    <>
            <div className="post">
                <div className="autor">
                    <img src={profile} alt="avatar"/>
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
                {/* {post.comments.map(comment => 
                (
                <Comment 
                key={comment.id} 
                data={comment} 
                />)
                )
                } */}

            </div>
    </>
    )
}
export default Post;