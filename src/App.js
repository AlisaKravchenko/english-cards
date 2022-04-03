import { ConnectedRouter } from 'connected-react-router/immutable';
import {push} from 'connected-react-router'
import { useDispatch, useStore } from "react-redux";
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

export function App(props) {
  const store = useStore()
  const dispatch = useDispatch()

  store.subscribe(() => {
    if (store.getState().home.finishFirstInit){
      dispatch(finishFirstInit(false))
      dispatch(push('/home'))
    }
  })

  
  return (
    <ConnectedRouter history={history} >
       <div className="App">   
       <Header />
         <main className='container'>
            <Switch>
            <Route exact path='/' component={HelloPages} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/learning' component={Learn} />
            <Route exact path='/glossary' component={Glossary} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/repeat' component={Repeat} />
            <Route exact path='/settings' component={Settings} />
            </Switch>
        </main>
     </div>
    </ConnectedRouter>
    
  );
}
export default App
