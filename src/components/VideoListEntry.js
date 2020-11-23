import React from 'react';

const VideoListEntry = ({ video, handleClick }) => { //videos = fakeData  , video(데이터 하나하나)비디오 리스트에서 받아온다.
  const { url } = video.snippet.thumbnails.default
  const { title, description } = video.snippet
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={handleClick}>{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  )
};

export default VideoListEntry;
