import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRppt6rof60oGOUxQNjJOKCF1cjabgf2I_muZYMn4oMATqubTUcW4qjfWtHV5S6nsl9w&usqp=CAU'/>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'/>
                </div>
                <div>
                    ava+sescription
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        Old post
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
