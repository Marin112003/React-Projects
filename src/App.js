import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/create';
import BlogDetails from './components/blog-details';
import NotFound from './components/not-found';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
