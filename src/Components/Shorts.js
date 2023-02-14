import React, { useRef, useEffect, useState } from "react";
import "./Shorts.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import useElementOnScreen from '../hooks/useElementOnScreen';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { red } from "@mui/material/colors";
import CommentBox from "./CommentBox";

// import video1 from "../videos/video1.mp4";

const Shorts = ({ inView, source, hashtag, avatar, user, reference, id }) => {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [follow, setFollow] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);

  const videoRef = useRef(null);
  const commentReef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);
  useEffect(() => {
    let handler = (e) => {
      if (
        commentReef.current != null &&
        !commentReef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    const seekBarFill = document.querySelector(`#seekBarFill_${id}`);

    if (videoRef && isVisibile) {
      videoRef.current.addEventListener("timeupdate", function () {
        const percent =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        seekBarFill.style.width = percent + "%";
      });
    }
  }, [videoRef, isVisibile, id]);

  const handleClickShare = async () => {
    try {
      if (navigator.share) {
        const shareData = {
          title: "Web Share Demo",
          text: "This is some text I wanted to share",
          url: "https://josephkhan.me",
        };
        await navigator
          .share(shareData)
          .then(() => {
            setIsSharing(true);
          })
          .catch((error) => {
            setIsSharing(false);
          });

        setIsSharing(true);
      }
    } catch (error) {
    }
  };

  return (
    <>
      <div className="video__header">
        {/* <ArrowBackRoundedIcon className="header__arrow" /> */}

        <h3>Reels</h3>
      </div>
      <div
        className="video"

      >
        <video
          // data-video-id={id}
          src={source}
          className="video__player"
          id="video__player"
          ref={videoRef}
          onClick={onVideoClick}
          loop
          muted="muted"
          preload="true"
        ></video>
        <div className="seekBarContainer">
          <div
            style={{
              height: "100%",
              width: 0,
              background:
                "linear-gradient(261deg, rgba(21,13,158,0.9) 0%, rgba(0,212,255,0.5) 100%)",
              position: "absolute",
              bottom: 0,
            }}
            id={`seekBarFill_${id}`}
          ></div>
        </div>
        <div className="videoFooter">
          <img className="videoFooter__img" src={avatar} alt="avtar" />

          <div className="videoFooter__text">
            <div className="user_and__follow">
              <h3>{user}</h3>
              {follow ? (
                <button
                  style={{
                    borderRadius: "30px",
                    background:
                      "linear-gradient(261deg, rgba(21,13,158,1) 0%, rgba(0,212,255,1) 100%)",
                    width: "100px",
                    height: "30px",
                    border : "none"
                  }}
                  onClick={() => setFollow(!follow)}
                >
                  Following
                </button>
              ) : (
                <button
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "blue",
                    width: "70px",
                    height: "30px",
                    border : "none"
                  }}
                  onClick={() => setFollow(!follow)}
                >
                  {" "}
                  Follow{" "}
                </button>
              )}
            </div>
            <p className="videoFooter__description">
              {isReadMore ? hashtag.slice(0, 15) : hashtag}
              <span
                onClick={() => {
                  setIsReadMore(!isReadMore);
                }}
                className="read_or_hide"
              >
                {isReadMore ? "...read more" : " show less"}
              </span>
            </p>
          </div>
        </div>

        <div className="videoSidebar">
          <div className="videoSidebar__button">
            {liked ? (
              <FavoriteIcon
                fontSize="large"
                sx={{ color: red[500] }}
                onClick={() => {
                  setLiked(!liked);
                }}
              />
            ) : (
              <FavoriteBorderIcon
                fontSize="large"
                onClick={() => {
                  setLiked(!liked);
                }}
              />
            )}
            <p>12</p>
          </div>
          <div className="videoSidebar__button">
            <MessageIcon
              fontSize="large"
              onClick={() => {
                setOpen(!open);
              }}
            />
            <p>23</p>
          </div>
          <div
            className="videoSidebar__button"
            onClick={handleClickShare}
          >
            <ShareSharpIcon fontSize="large" />
            <p>90</p>
          </div>
        </div>
        {!playing && (
          <div className="video_play_button">
            <PlayArrowRoundedIcon
              onClick={onVideoClick}
              fontSize="large"
              className="video_play_icon"
            />
          </div>
        )}
      </div>
      {open ? <CommentBox reference={commentReef} /> : ""}
    </>
  );
};
export default Shorts;
