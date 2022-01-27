import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Scills from './Components/Scills/Scills';
import MyWorks from './Components/MyWorks/MyWorks';
import Description from './Components/Description/Description';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';


function App() {

    return (
            <div className='wrapper'>
                <Header/>
                <Main/>
                <Scills/>
                <MyWorks/>
                <Description/>
                <Contacts/>
                <Footer/>
            </div>
    );
}

export default App;
