import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import FormAction from './FormAction';

function App() {
  const handleSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home user={{}} />} />
          {/* Pass the onSubmit function as a prop to the FormAction component */}
          <Route path="/form" element={<FormAction onSubmit={handleSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
