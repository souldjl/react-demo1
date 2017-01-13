'use strict';
import 'semantic-ui/semantic.min.css!';
import React from 'react' ;
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashistory,hashHistory,IndexRoute,Redirect} from 'react-router';

class App extends React.Component{
  render(){
    return (
      <div>
        <div className="secondary pointing menu">
          <Link to="/" className="item" >首页</Link>
          <Link to="/tv" className="item" query={{orderBy:'date'}}>电视</Link>
          <Link to="/tv" className="item" >电视</Link>
        </div>
        {this.props.children}
    </div>
    )
  }
}

class Tv extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
      return (
        <div>
          <div className="ui info message">
            电视节目列表
            {this.props.children}
          </div>
      </div>
      )
  }
}

class Show extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.params);
  }
  render(){
    return (
      <h3>
        节目{this.props.params.id}
      </h3>
    )
  }
}
class Home extends React.Component{
  render(){
    return(
      <h3 className="ui info message">这是HOME组件</h3>
    )
  }
}

class ShowIndex extends React.Component{
  render(){
    return(
      <h3 className="ui info message">这是ShowIndex的组件</h3>
    )
  }
}

function handleEnter(){
  alert(1)
  console.log('進入');
}
function handleleave(){
  alert(2)
  console.log('離開');
}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tv" component={Tv} >
        <IndexRoute component={ShowIndex}/>
        <Route path="/shows/:id" component={Show} onEnter={handleEnter} onLeave={handleleave}></Route>
        <Redirect from="shows/:id" to="/shows/:id"/>
      </Route>
    </Route>
  </Router>
),document.getElementById('app'))
