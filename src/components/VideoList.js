import React from 'react';
import VideoListEntry from './VideoListEntry';

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from './__test__/fakeData';
console.log(fakeData)

const VideoList = ({videos,handleClick}) => { //videos === fakeDate , 비디오 리스트 엔트리에 비디오를 보내줘야함 

  return(
  <div className="video-list media">
    {videos.map(item=> <VideoListEntry key ={item.etag}  video = {item} handleClick = {handleClick}/>)}
  </div>
  )
};

export default VideoList;
