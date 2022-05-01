import { ConnectedRouter } from 'connected-react-router/immutable';
import {push} from 'connected-react-router'
import { useDispatch, useSelector, useStore } from "react-redux";
import { HelloPages } from "./pages/firstVisitPages/HelloPages";
import { Home } from "./pages/Home";
import {history} from './index'
import { Switch,Route } from "react-router";
import { finishFirstInit } from "./redux/homeSlice";
import { Glossary } from './pages/Glossary';
import { Categories } from './pages/Categories';
import { Repeat } from './pages/Repeat';
import { Learn } from './pages/Learn';
import { Settings } from './pages/Settings';
import { Header } from './layout/Header';
import { useEffect } from 'react';
import { BASE_BACKGROUND, DARK_THEME_BACKGROUND, LIGHT_THEME_BACKGROUND } from './constants';
import { PageNotFound } from './pages/PageNotFound';
import { changeTheme } from './utils';
import { logDOM } from '@testing-library/react';

export function App(props) {
  const state = useSelector(state => state)
  const store = useStore()
  const dispatch = useDispatch()

  store.subscribe(() => {
    if (store.getState().home.finishFirstInit){
      dispatch(finishFirstInit(false))
      dispatch(push('/home'))
    }
    localStorage.setItem('state', JSON.stringify(store.getState()))
  })

  useEffect(() => {
    changeTheme(state.home.theme)
    if (localStorage.getItem('first-visit')){
      document.body.style.background =
        state.home.theme === 'light'
            ? LIGHT_THEME_BACKGROUND
            : DARK_THEME_BACKGROUND
    } else {
      document.body.style.background = BASE_BACKGROUND
    }
    if (window.location.pathname === '/' && localStorage.getItem('first-visit')){
      dispatch(push('/home'))
    }
}, [state.home, dispatch])
  
  
  return (
    <ConnectedRouter history={history} >
       <div className="App">   
       {localStorage.getItem('first-visit') ? <Header /> : null}
        <div className='scroll'>
          <main className='container'>
              <Switch>
              {
              localStorage.getItem('first-visit') ?
              <><Route exact path='/home' component={Home} />
              <Route exact path='/learning' component={Learn} />
              <Route exact path='/glossary' component={Glossary} />
              <Route exact path='/categories' component={Categories} />
              <Route exact path='/repeat' component={Repeat} />
              <Route exact path='/settings' component={Settings} />
              {/* <Route render={() => <PageNotFound path='/home'/>} /> */}
              </> : <Route exact path='/' component={HelloPages} /> 
              }
              <Route path='*' render={() => <PageNotFound path='/'/>} />
              </Switch>
          </main>
        </div>
         
     </div>
    </ConnectedRouter>
    
  );
}
export default App
