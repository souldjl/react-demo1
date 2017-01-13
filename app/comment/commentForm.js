'use strict';

import React from 'react';

class CommentForm extends React.Component{
  handleChange(event){
    event.preventDefault();
    //console.log('表单提交中');
    let author=this.refs.author.value,
        text=this.refs.text.value;
    console.log(author,text);
    this.props.onCommentSubmit({author,text,date:'剛剛'})
  }
  render(){
    return (
      <form className="ui reply form" onSubmit={this.handleChange.bind(this)}>
        <div className="field">
          <input  type="text" placeholder="姓名" ref="author"/>
        </div>
        <div className="field">
          <textarea placeholder="评论" ref="text"></textarea>
        </div>
      <button type="submit" className="ui blue button" >添加评论</button>
      </form>
    )
  }
}
export {CommentForm as default};
