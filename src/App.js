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
         <Switch>
          <Route exact path='/' component={HelloPages} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/learning' component={Learn} />
          <Route exact path='/glossary' component={Glossary} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/repeat' component={Repeat} />
         </Switch>
     </div>
    </ConnectedRouter>
    
  );
}
export default App
