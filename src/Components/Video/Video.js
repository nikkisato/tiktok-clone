import React, { useRef } from 'react';
import './Video.css';
function Video() {
  const videoRef = useRef(null);

  const onVideoPress = () => {
    videoRef.current.play();
  };
  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        controls
        ref={videoRef}
        onClick={onVideoPress}
        src='https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/7d0339c5b88d4fae8c87f702dc32e061/?a=1988&br=1272&bt=636&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1616560717&l=20210323223758010190192143404BDD85&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=amVpbWlsZnM6MzMzNzczM0ApZDc4ZTRkNjxoNzhnODc5OmdmYy9gYV5sNGZgLS0yMTZzc14zNGMwMGNiMWJiYzJeYjY6Yw%3D%3D&signature=75444c8beb1cccc9b4447887aa46e4f3&tk=tt_webid_v2&vl=&vr='
      ></video>
    </div>
  );
}
//src='https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/59302022dd9b4a97ae725319c45e945c/?a=1988&br=4892&bt=2446&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1616559189&l=202103232212470101902192101A49049E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=M2g2ampvZ2VuNDMzZzczM0ApNTQ1ZzpkZjs4NzM6ZDs0M2cvYm9qLXJeNC1gLS1jMTZzczAzNDYtM18zYy1hXjM1NC46Yw%3D%3D&signature=bc4539f7f27da060a6cc321e1781e873&tk=tt_webid_v2&vl=&vr='

//src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/5975d9aa868141bf8c8197b366b9af43/?a=1988&br=2008&bt=1004&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1616560783&l=20210323223917010190218203224B9A8B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=anJqczc0dmlodzMzNTczM0ApPDwzZmg1ZWRkN2Q1ODs2NGcyaGAtXjZscWBfLS1jMTZzczEtX2A0Yi1fNjMwLzUvNjA6Yw%3D%3D&signature=1a525b0613735290bb4bc99b8b513c64&tk=tt_webid_v2&vl=&vr="
export default Video;
