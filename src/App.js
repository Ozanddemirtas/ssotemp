import {Route , Routes} from 'react-router-dom';

function App() {
  return <Routes>
    <Route path='/login' element={<Login />}/>
  </Routes>
}