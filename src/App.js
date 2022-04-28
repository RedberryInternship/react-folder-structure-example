import { Route, Routes } from 'react-router-dom';
import { Landing, Login, Register } from 'pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={Landing} />
        <Route path='/login' element={Login} />
        <Route path='/register' element={Register} />
      </Routes>
    </div>
  );
}

export default App;
