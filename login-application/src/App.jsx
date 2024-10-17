import { Routes, Route } from 'react-router-dom';  // Import only Routes and Route

import Login from './Components/Login';
import Form from './Components/Form';
import Error  from './Components/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
