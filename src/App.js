import './App.css';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeadline from './Components/Top Headline/TopHeadline';
function App() {
  return (
    <div>
      <TopHeadline></TopHeadline>
    <News></News>
    <Header></Header>
    </div>
  );
}

export default App;
