import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BugTracker from './bug-tracker/BugTracker'
import Header from './header/header'
import Snippet from './admin/snippet'
import IssueDetail from './admin/issue-details'
import KitchenSink from './admin/kitchen-sink'
import Resource from './admin/resource'
import Admin from './admin/admin'
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
<Router>
    <Route path="/" component={Header} />
    <Route path="/app" component={App} />
    <Route  path="/admin" component={Admin} />
    <Route  path="/admin-snippet" component={Snippet} />
    <Route  path="/admin-issue-details" component={IssueDetail} />
    <Route  path="/admin-kitchen-sink" component={KitchenSink} />
    <Route  path="/admin-add-resource" component={Resource} />

    <Route  path="/issue-tracker" component={BugTracker} />

    {/* <Route  path="/about" component={BugTracker} /> */}
  </Router>
  , 
  document.getElementById('root'));



// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link } from 'react-router'

// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// const About = React.createClass({
//   render() {
//     return <h3>About</h3>
//   }
// })

// const Inbox = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// })

// const Message = React.createClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })

// ReactDOM.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>
// ), document.body)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
