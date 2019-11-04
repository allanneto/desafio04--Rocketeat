import React from 'react';
import './style.css'
import diego from '../../assets/diego.jpeg'

const Comment = ({data : data}) => (
  <>
      <div className="comment">
        <img src={diego} alt="avatar"/>
        <div className="area">
          <p><a href="">{data.author.name}</a> {data.content}</p>
        </div>
      </div>
  </>
  );

export default Comment;