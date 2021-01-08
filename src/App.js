import 'bootstrap/dist/css/bootstrap.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './container/home/home';
import Search from './container/search/search';
import AddProject from './container/Project/add-project';
import Project from './container/Project/project';
import ProjectDetail from './container/Project/project-detail';
import {Provider} from 'react-redux';
import store from './store/store';
import NewRecord from './container/Project/new-record';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/home/' component={Home} />
          <Route path='/search/' component={Search} />
          <Route path='/add-project/' component={AddProject} />
          <Route path='/all-projects/'  exact component={Project} />
          <Route path='/project-details/' exact component={ProjectDetail} />
          <Route path='/project-details/record/' exact component={NewRecord} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
