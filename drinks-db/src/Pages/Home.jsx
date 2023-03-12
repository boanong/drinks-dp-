import React from 'react';

function Home() {
  return (
    <>
      <div className="video-container">
        <div class="hero">
          <video autoPlay loop muted playsInline className="background-image">
            <source src="https://player.vimeo.com/external/371442179.sd.mp4?s=19006e11074706d3707ed00aea7b6c60ed67b814&profile_id=164&oauth2_token_id=57447761"></source>
          </video>
          <div className="center-content"> 
            <h1 className="drinks-db">It’s always a good time for a drink</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home; 
