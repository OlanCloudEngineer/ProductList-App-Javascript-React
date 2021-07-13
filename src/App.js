import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Widgets from './components/Widgets';
import Wudgets from './components/Wudgets';
import Doodads from './components/Doodads'
import Profile from './components/Profile';
import SkelDemoMat from './components/SkeletonDemoMaterial';
import { ThemeProvider } from "@material-ui/styles";
import {CssBaseline,Typography,createMuiTheme, Paper, FormControlLabel} from "@material-ui/core";



const themeObject ={
  palette: {
    type: "light"
  }
}


const useDarkMode=()=>{
  const [theme, setTheme]=useState(themeObject)
  const {palette:{type}}=theme;
  const toggleDarkMode=()=>{
    const updatedTheme={
      ...theme,
      palette:{
        ...theme.palette,
        type:type==='light' ? 'dark': 'light'
      }
      }
  
    setTheme(updatedTheme);
  }
  return[theme,toggleDarkMode]

}



const App =()=>{


  // const useDarkMode=()=>{
  //   const [theme, setTheme]=useState(themeObject)
  //   const {palette:{type}}=theme;
  //   const toggleDarkMode=()=>{
  //     const updatedTheme={
  //       ...theme,
  //       palette:{
  //         ...theme.palette,
  //         type: type==='light' ? 'dark': 'light'
  //       }
  //       }
    
  //     setTheme(updatedTheme);
  //   }
  //   return [theme ,toggleDarkMode]
  
  // }
  const [theme, toggleDarkMode]=useDarkMode();
  const themeConfig=createMuiTheme(theme);
  
  const widgetprods=[
    {name: 'Master Widget', price:'$125.00'},
    {name: 'Sub Widget', price:'$115.00'},
    {name: 'Long Widget', price:'$150.00'},
    {name: 'Short Widget', price:'$135.00'}
  ]

  const doodadprods=[
    {name: 'Master Doodad', price:'$225.00'},
    {name: 'Sub Doodad', price:'$215.00'},
    {name: 'Long Doodad', price:'$250.00'},
    {name: 'Short Doodad', price:'$235.00'}
  ]

 

  const [currProdState,setProdState]=useState({
    wudgetprods:[
      {name: 'Master Wudget', price:'$75.00'},
      {name: 'Sub Wudget', price:'$85.00'},
      {name: 'Long Wudget', price:'$135.00'},
      {name: 'Short Wudget', price:'$110.00'}
      ]
    });
  
    const applyDiscountHandler= (event)=>{
     
      setProdState({ 
        wudgetprods:[
            {name: 'Master Wudget', price:'$55.00'},
            {name: 'Sub Wudget', price:'$75.00'},
            {name: 'Long Wudget', price:'$115.00'},
            {name: 'Short Wudget', price:'$95.00'}
          ]
      })
    }
     
  return (
    <Router>
         <ThemeProvider theme={themeConfig} >
      <CssBaseline />
     
    
      <div>
        <Navbar />  
         
      
          <div className='container'>
            
         
            <Switch>
              {/* <Route exact path='/' component={Home} />  */}
              <Route
                exact
                path='/'
                render={(props)=>
                  <Fragment>
                
                    <Home {...props}  toggleDarkModeHandler={toggleDarkMode}/>
                  
                  </Fragment>
                }
              />
              <Route
                exact
                path='/widgets'
                render={(props)=>
                  <Fragment>
                
                    <Widgets prods={widgetprods}/>
                  
                  </Fragment>
                }
              />

            <Route
              exact
              path='/wudgets'
              render={(props)=>
                <Fragment>
              
                  <Wudgets {...props} 
                  prods={currProdState.wudgetprods}
                  applyDiscount={applyDiscountHandler}/>
                
                </Fragment>
              }
            />
             <Route
              exact
              path='/doodads'
              render={(props)=>
                <Fragment>
              
              <Doodads prods={doodadprods}/>
              
                
                </Fragment>
              }
            />
            
              
               {/* <Route
                exact
                path='/switchtheme'
                render={(props)=>
                  <Fragment>
                
                    <SwitchTheme onCkick={toggleDarkMode}>Mode</SwitchTheme>
                  
                  </Fragment>
                }
              /> */}
            </Switch>

          </div>
      </div>
   
      </ThemeProvider>
      </Router>
  )};

export default App;