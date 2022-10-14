import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import AsideBtn from './components/side/aside_btn';



function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
    .search(query)
    .then(videos => {
      setVideos(videos)
      setSelectedVideo(null);
    });
  };
    
  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <AsideBtn/>
    <div className={styles.main}>
      <SearchHeader onSearch={search} />
      <div className={styles.asidebtn}>
      </div>
      <section className={styles.content}>
      {selectedVideo && ( 
      <div className={styles.detail}>
        <VideoDetail video={selectedVideo} />
      </div> 
      )}
        <div className={styles.list}>
        <VideoList 
        videos={videos} 
        onVideoClick={selectVideo}
        display={selectedVideo ? 'list': 'grid' } />
        </div>
      </section>
    </div>
    </div>

  );
}

export default App;
