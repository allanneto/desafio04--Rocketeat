import React from 'react';
import Profile from '../../assets/profile.jpg'

const Comment = ({data : data}) => (
  <>
      <div className="comment">
        <img src='' alt="avatar"/>
        <p><strong></strong> {data.content}</p>
      </div>
  </>
  );

export default Comment;