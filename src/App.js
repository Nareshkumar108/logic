import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import './App.css';

function App() {
  return (
    <>
   <Header/>

    <div className="col-sm-4">
      <h2>Our Teachers</h2>
      <h3>Sir Afnan Yousuf</h3>
      <h3>Sir Irfan Gul</h3>
      <h3>Sir Chander</h3>
      <h3>Sir Sarfaraz</h3>
    </div>

    <div className="col-sm-4">
      <h2>All Classes</h2>
      <h3>Mathematics</h3>
      <h3>English</h3>
      <h3>Science</h3>
      <h3>Computer</h3>
    </div>

    <div className="col-sm-4">
      <h2>Children's skills</h2>
      <h3>Drawing Lessons</h3>
      <h3>History Lessons</h3>
      <h3>Nature Lessons</h3>
      <h3>Sport Lessons</h3>
    </div>
    <Button value="ok"/>
<Footer/>
    
    </>
  );
}

export default App;