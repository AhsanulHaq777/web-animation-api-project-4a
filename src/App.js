import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import audiances from './audiacne.gif'; 
import horse3 from './horana.gif'
import horse4 from './horee.gif';
import horsep2 from './horsep2.gif'
import horseR5 from './horseR5.gif';
import racecource from './racecourse.jpg';


function App() {
  const {ref, getAnimation} = useWebAnimations({
    keyframes: [
      {transform: "translateX(0%)"},
      {transform: "translateX(-181%)"}
    ],
    timing:{
      duration: 4000,
      iterations: Infinity,
      playbackRate: -2
    }
  });
  // setInterval(function(){
  //   if(getAnimation().playbackRate > 1) {
  //     getAnimation().playbackRate *=.9
  //   }
  // },2000);
  const updatePlayBackRate = () => {
    getAnimation().playbackRate *=1.1
  };
  
  return (
    <div>
      <div className="wrapper">
        <div onClick={updatePlayBackRate} ref={ref}>
          <div>
              <img id="background" alt="racecourse" src={racecource} />
          </div>
          <div>
              <img id="background2" alt="racecourse2" src={racecource} />
          </div>
          <div>
              <img id="audiance" alt="audiance" src={audiances} />
          </div>
          <div>
              <img id="audiance2" alt="racecourse audiance" src={audiances}/>
          </div>
          <div>
              <img id="audiance3" alt="racecourse audiance3" src={audiances}/>
          </div>
          <div>
              <img id="audiance4" alt="racecourse audiance4" src={audiances}/>
          </div>
          <div>
              <img id="audiance5" alt="racecourse audiance5" src={audiances}/>
          </div>
          <div>
              <img id="audiance6" alt="racecourse audiance6" src={audiances}/>
          </div>
        </div>
       
        
        {/* <div className="horse">
            <img id="horse" alt="horse animation" src={horse}/>
        </div>
        <div className="horse2">
            <img id="horse2" alt="horse animation2" src={horse2}/>
        </div> */}
        <div className="horse3">
            <img id="horse3" alt="horse animation3" src={horse3}/>
        </div>
        <div className="horse4">
            <img id="horse4" alt="horse animation4" src={horse4}/>
        </div>

        <div className="horseR5">
            <img id="horsedR5" alt="horse animationdR5" src={horseR5}/>
        </div>
        <div className="horsep2">
            <img id="horsedp2" alt="horse animationdp2" src={horsep2}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
