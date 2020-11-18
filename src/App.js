import styles from './App.module.scss';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
       <Menu />
       <Home />
       <Projects />
    </div>
  );
}

export default App;
