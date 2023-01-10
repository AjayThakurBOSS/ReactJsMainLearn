import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
// import parentComponent from './components/ParentComponent';
import eventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import IndexasKey from './components/IndexasKey';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifeCyle from './components/LifeCyle';
import FragmentDemo from './components/FragmentDemo'; 
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import Refs from './components/Refs';
import FocusInput from './components/FocusInput';
import FRparentinput from './components/FRparentinput';
import PortalDemo from './components/PortalDemo';
import ErrorBound from './components/ErrorBound';
import ErrorBoundry from './ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User'
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import WithoutJSX from './components/withoutJSX/WithoutJSX';

function App() {
  return (
    <div className="App">
    {/* implementation of React.createElement and Creating a component without  */}
 {/*
    <WithoutJSX/>
*/}
    {/*
     <PostForm/>
*/}
    {/* Context 
    <UserProvider  value='Ajay'>
    <ComponentC/>
    </UserProvider>
    */}
    {/*<h1 className='error'> Error</h1>
    <h1 className={styles.success}>Success</h1> */}
  {/* Higher Order Component- HOC
   <ClickCounter name='Ajay'/>
   <HoverCounter/>
   */}
   {/* For Render-Props
   <ClickCounterTwo/>
   <HoverCounterTwo/>
   <User render= {(isLoggedIn) => isLoggedIn ? 'Ajay' : 'Guest'}/>

<CounterTwo  render={(count, incrementCount) => (
  <ClickCounterTwo count={count} incrementCount = {incrementCount}/>
)}/>

<CounterTwo  render={(count, incrementCount) => (
  <HoverCounterTwo count={count} incrementCount = {incrementCount}/>
)}/>
*/}

{/* implimentation of props */}
 {/*
<Greet name= "Ajay" heroName = "Batman">
  <p>This if children props.</p> 
  <p>This is from Ajay.</p>
  </Greet>
<Greet name= "Kumar"  heroName = "Superman">
  <button>action</button> </Greet>
<Greet name= "Thakur"  heroName = "Wonder Women"/>

 <Welcome name= "Ajay" heroName = "Batman"/>
 <Welcome name= "Kumar"  heroName = "Superman"/>
 <Welcome name= "Thakur"  heroName = "Wonder Women"/>
 */}
  
 {/* implementation of state */}
 <Message />

 {/* 
 <Counter />
 <FunctionClick />
 <ClassClick />
 <eventBind/> 
     <Greet />

     <parentComponent/>
     <UserGreeting/>
     <NameList/>
      <IndexasKey/>
      <Inline/>
    <Stylesheet/>
    <Form/>
    <LifeCyle/>
    <FragmentDemo/>
    <Table />
    <PureComponents></PureComponents>
    <ParentComp/>
     <Refs/>
      <FocusInput/>
         <FRparentinput/>
    <PortalDemo></PortalDemo>
    <ErrorBoundry>
    <ErrorBound heroName='Batman'/>
     </ErrorBoundry>
     <ErrorBoundry>
    <ErrorBound heroName='superman'/>
     </ErrorBoundry>
     <ErrorBoundry>
     <ErrorBound heroName='joker'/>
  </ErrorBoundry>

*/}

 
 
    </div>
  );
}  

export default App;
