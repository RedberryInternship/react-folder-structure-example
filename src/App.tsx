import { Crown } from 'components';
import {
  ChessExperience,
  LandingPage,
  NotFound,
  PersonalInformation,
  Submitted,
} from 'pages';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='h-screen w-screen relative flex'>
      <ToastContainer />
      <div className='bg-violet-700 z-10 pl-20 absolute space-x-2 items-center font-bold w-[47%] py-4 text-white flex'>
        <Crown /> <span>Redberry Knight Cup</span>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/personal-information' element={<PersonalInformation />} />
        <Route path='/chess-experience' element={<ChessExperience />} />
        <Route path='/submitted' element={<Submitted />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
