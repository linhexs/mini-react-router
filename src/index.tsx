import { Router, Route, useHistory } from "./Router";

const Home = () => {
  const history = useHistory();

  const go = (path: string) => {
    const state = { name: path };
    history.push(path, state);
  };

  return (
    <div>
      我是home页面 <button onClick={() => go("/list")}>list</button>
    </div>
  );
};

const List = () => <div>我是list页面</div>;

const Links = () => {
  const history = useHistory();

  const go = (path: string) => {
    const state = { name: path };
    history.push(path, state);
  };

  return (
    <div>
      <button onClick={() => go('/index')}>index</button>
      <button onClick={() => go('/list')}>list</button>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Router>
        <Links />
        <Route path="/index">
          <Home />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Router>
    </div>
  );
};
