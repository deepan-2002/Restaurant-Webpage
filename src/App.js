import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css'
import BookTable from './components/BookTable/BookTable';
import Submission from './components/Submission/Submission';


function App() {
    return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/' element={<BookTable/>} />
                <Route path='/response' element={<Submission />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
