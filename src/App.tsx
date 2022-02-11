import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Scills from './Components/Scills/Scills';
import MyWorks from './Components/MyWorks/MyWorks';
import Description from './Components/Description/Description';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/Main/AboutMe';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root')

function App() {
    const [aboutMe, setAboutMe] = useState(false)


    function opening() {
        setAboutMe(true)
    }

    function closing() {
        setAboutMe(false)
    }

    function onRequestClose() {
        setAboutMe(false)
    }


    const bodyClass = aboutMe ? 'filterBody' : '';
    return (
        <div className={`wrapper ${bodyClass}`}>
            <ReactModal isOpen={aboutMe}
                        closeTimeoutMS={200}
                        preventScroll={true}
                        onRequestClose={onRequestClose}
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1000,
                                backgroundColor: 'rgba(0,0,0,0.6)'
                            },
                            content: {
                                position: 'absolute',
                                top: '10%',
                                left: '10%',
                                right: '10%',
                                bottom: '5%',
                                border: '1px solid #ccc',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '4px',
                                outline: 'none',
                                padding: '20px'
                            }
                        }}

            >

                <AboutMe closing={closing}/>
            </ReactModal>
            <Header/>
            <Main opening={opening}/>
            <Scills/>
            <MyWorks/>
            <Description/>
            <Contacts/>
            <Footer/>
        </div>
    )

}

export default App;
