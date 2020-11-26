import React from "react"
import './App.css';
import Header from './Header'
import MemeGenerator from './MemeGenerator'
function App(){ 
  //use of fetch Global function which serves http requests
    //fetch returns a promise object
    //A promise is an object that may produce a single value sometime in the future or may not
    //A promise can either be resolved or rejected, but till then it remains pending
    //this.setState({loading:true})   
    return(
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
    )
}
//Also use Formik Library for easy form handling
export default App;
