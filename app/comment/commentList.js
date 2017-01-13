'use strict';
import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {
  render(){
    let CommentNodes=this.props.data.map(comment =>{
      return (
        <Comment author={comment.author} date={comment.date}>{comment.text}</Comment>
      )
    })
    return (
      <div>
        {CommentNodes}
      </div>
  );
  }
}
export {CommentList as default };
