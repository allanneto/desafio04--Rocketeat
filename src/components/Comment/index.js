import React from 'react';
import './style.css'
import profile from '../../assets/profile.jpg'

const Comment = ({data : data}) => (
  <>
      <div className="comment">
        <img src={profile} alt="avatar"/>
        <div className="area">
          <p><a href="">{data.author.name}</a> {data.content}</p>
        </div>
      </div>
  </>
  );

export default Comment;