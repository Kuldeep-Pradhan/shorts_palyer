import "./App.css";
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";
import video5 from "./videos/video5.mp4";
import Shorts from "./Components/Shorts";
import React, { useState, useRef, useEffect, createRef } from "react";
import { useInView, InView } from "react-intersection-observer";

const videos = [
  {
    id: 1,
    source: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    hashtag:
      "#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field",
    user: " Kuldeep",
    avatar:
      "https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no",
  },
  {
    id: 2,
    source: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    hashtag:
      "#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field",
    user: " Kuldeep",
    avatar:
      "https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no",
  },
  {
    id: 3,
    source: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-neon-light-1238-large.mp4",
    hashtag:
      "#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field",
    user: " Kuldeep",
    avatar:
      "https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no",
  },
  {
    id: 4,
    source: "https://assets.mixkit.co/videos/preview/mixkit-under-a-peripheral-road-with-two-avenues-on-the-sides-34560-large.mp4",
    hashtag:
      "#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field",
    user: " Kuldeep",
    avatar:
      "https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no",
  },
  {
    id: 5,
    source: "https://assets.mixkit.co/videos/preview/mixkit-white-flowers-in-the-breeze-1187-large.mp4",
    hashtag:
      "#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field#nature #flower #pink #field #nature #flower #pink #field #nature #flower #pink #field",
    user: " Kuldeep",
    avatar:
      "https://lh3.googleusercontent.com/a/AEdFTp7flxubvTafF1SKnrd8fQ_8QL3airoLyAXzCHYZJ7E=s288-p-rw-no",
  },
];

function App() {
  //   const [index, setIndex] = useState(0)
  //   const videoRefs = useRef([]);
  //   const [activeVideo, setActiveVideo] = useState(1)

  // const  observer = new IntersectionObserver((entries) => {
  //     // console.log(entries, "entries");
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log("entry", entry);
  //         const videoId = entry.target.dataset?.videoId;
  //         // const videoId = entry.target.dataset.videoId;
  //         setActiveVideo(videoId);
  //         // console.log(entry, "entries");
  //       }
  //     });
  //   });

  // console.log(activeVideo, "avtive video");
  // useEffect(() => {
  //   videoRefs.current.forEach((ref) => {
  //     console.log("ref.current", ref.current);
  //     observer.observe(ref.current);
  //   });
  //   return () => {
  //     videoRefs.current.forEach((ref) => {
  //       observer.unobserve(ref.current);
  //     });
  //   };
  // }, []);

  // let container = document.getElementById("video__play__container")
  // let currentVideo = videos[container.dataset.currentIndex]
  // console.log(container, "index");
  // const handleTouchMove = (event) => {
  //   const touch = event.touches[0];
  //   const deltaY = touch.pageY - touch.clientY;
  //   if (deltaY > 0 && index > 0) {
  //     setIndex(index - 1);
  //   } else if (deltaY < 0 && index <videos.length - 1) {
  //     setIndex(index + 1);
  //   }
  // };
  // const handleWheel = (event) => {
  //   if (event.deltaY > 0 && index < videos.length - 1) {
  //     setIndex(index + 1);
  //     console.log(index, "index");
  //   } else if (event.deltaY < 0 && index > 0) {
  //     setIndex(index - 1);
  //   }
  // };
  // useEffect(() => {
  //   console.log(videoRef.current, "videoref")
  // }, []);

  return (
    <>
      <div className="app">
        <div className="app__videos" id="app__videos">
          {/* {
          videos.map((video, index) => {
            videoRefs.current[index] = createRef()
            console.log("videoRefs", videoRefs);
            return (
              <InView>
                {({ inView, ref, entry }) => (

                  <Shorts
                    inView={inView}
                    id={video.id}
                    reference={videoRefs.current[index]}
                    source={video.source}
                    hashtag={video.hashtag}
                    user={video.user}
                    key={index}
                    avatar={video.avatar}
                  />
                )}
              </InView>
            )
          })
        } */}
          {videos.map((video, index) => (
            <Shorts
              id={video.id}
              source={video.source}
              hashtag={video.hashtag}
              user={video.user}
              key={index}
              avatar={video.avatar}

            />
          ))}
        </div>
      </div>
    </>
  );
}

// function App() {
//   const [activeVideo, setActiveVideo] = useState(null);
//   const videoRefs = useRef([]);

//   const observer = new IntersectionObserver((entries) => {
//     console.log("entries",entries);
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("entry",entry);
//         const videoId = entry.target.dataset.videoId;
//         setActiveVideo(videoId);
//       }
//     });
//   });

//   useEffect(() => {
//     videoRefs.current.forEach((ref) => {
//       observer.observe(ref.current);
//     });
//     return () => {
//       videoRefs.current.forEach((ref) => {
//         observer.unobserve(ref.current);
//       });
//     };
//   }, []);

//   return (
//     <div>
//       {videos.map((video, index) => {
//         videoRefs.current[index] = createRef();
//         return (
// <video
//   key={video.id}
//   ref={videoRefs.current[index]}
//   data-video-id={video.id}
// />
//           <Shorts
//             // inView={inView}
//             data-video-id={index}
//             reference={videoRefs.current[index]}
//             source={video.source}
//             hashtag={video.hashtag}
//             user={video.user}
//             key={index}
//             avatar={video.avatar}
//           />
//         );
//       })}
//       {activeVideo ? (
//         <div>
//           Currently playing: {activeVideo}
//         </div>
//       ) : (
//         <div>
//           No video is currently playing
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
