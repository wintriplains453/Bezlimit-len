import './App.scss';

//Components
import Header from './Components/Big_Components/Header/Header';
import Phone from './Components/Meddium_Components/Phone/Phone';

//Video
import VideoSRC from './Assets/videos/bezlimit_video.mp4'

function App() {
  return (
    <>
      <div>
        <div className='backgrond__video'>
          <div className='black__screen'></div>
          <video autoPlay loop muted >
            <source src={VideoSRC} type="video/mp4" />
          </video>          
        </div>

        <div className="myindex__content">
          <Header />
          <div className='header__content'>
            <div className='wrapper__padding_top'>
              <div className='wrapper__item_phone'>
                <Phone />
              </div>
            </div>          
          </div>             
        </div>
      </div>
    </>
  );
}

export default App;
