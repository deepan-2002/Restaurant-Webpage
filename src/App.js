import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyForm from './components/My Form/MyForm';
import NextPage from './components/Next Page/NextPage';
import Menu from './components/Menu';


function App() {
    return (
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/' element={<MyForm/>} />
                <Route path='/response' element={<NextPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
