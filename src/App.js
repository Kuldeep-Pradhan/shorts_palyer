import "./App.css";
import Shorts from "./Components/Shorts";


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

  return (
    <>
      <div className="app">
        <div className="app__videos" id="app__videos">
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

export default App;
