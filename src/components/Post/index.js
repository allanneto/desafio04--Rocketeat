import React from 'react';
import Comment from '../Comment'


    function Post({ post, comentario : {comments} }){

    return (
    <>
            <div className="Post">
                <div className="autor">
                    <img src='' alt="avatar"/>
                    <div className="info">
                        <a href=""></a>
                        <span> </span>
                    </div>
                </div>
                <p>{post.content}</p>
                {console.log(post.comments) }
                <>
                {post.comments.map(comment => <Comment key={comment.id} data={comment} />)}
                {/* {post.comments.map(comment => 
                (
                <Comment 
                key={comment.id} 
                data={comment} 
                />)
                )
                } */}
                </>
            </div>
    </>
    )
}
export default Post;