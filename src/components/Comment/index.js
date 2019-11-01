import React from 'react';

const Comment = (data) => (
  <>
      <div className="comment">
        <img src={data.author.avatar} alt="avatar"/>
        <p><strong>{data.author.name}</strong> {data.content}</p>
      </div>
  </>
  );

export default Comment;