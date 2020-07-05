import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import User from './Components/Users/User';
import Alert from './Components/Layout/Alert';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App =()=>{

   
    //const [alert,setAlert]=useState(null);
    

   /* async componentDidMount(){
    this.setState({loading:true});
     
     const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
     
     this.setState({users:res.data,loading:false});
     //console.log(res.data);
	}*/
    
      //Search github Users
    

    //get single User
    

    //get user repos
   

    //clear users from state
    

    

	
   /* const name='John Doe';
    const fun=()=>'Bars';
    const loading='true';
    const showname='true';
    <h1>Hello {name} {fun()}</h1>
      {!loading ? <h3>loading...</h3>:<h3>Hello {showname && name}</h3>}
    */
   
  return (
  <GithubState>
  <AlertState>
  <Router>
     <div className="App">
        <Navbar title=" Github Finder" icon="fab fa-github" />
       <div className="container"> 
       
           <Alert />
           <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/User/:login' component={User} />
                <Route component={NotFound} />
           </Switch>
        </div>
    </div>
	</Router> 
    </AlertState>
   </GithubState>
  );

}

export default App;
