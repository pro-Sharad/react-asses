import React from "react";

function Content() {
  return (
    <>
      <div class="content">
        <div class="left">
          <div class="text1">
            <span style={{ color: "orange" }}>Studying</span> Online is now much
            easier
          </div>
          <div class="text2">
            Skilline is an excellent platform that will teach you in a more
            interactive way
          </div>
          <div class="buttons">
            <button class="btn btn3">Join for free</button>
            <button class="btn btn4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f4/OOjs_UI_icon_play-ltr-progressive.svg"
                alt=""
              />
            </button>
            <span style={{ fontSize: "20px" }}>Watch how it works</span>
          </div>
        </div>
        <div class="right">
          <div class="boxes">
            <div class="box1">
              <img
                src="\images\exam-svgrepo-com.svg"
                alt=""
                height="80%"
                width="80%"
              />
              <div class="caption">
                <div class="caphead">Attempt livetests</div>
                <div class="capinfo">and track your preparation</div>
              </div>
            </div>

            <div class="box2">
              <div class="upper">
                <img
                  class="prof_img"
                  src="https://s3.envato.com/files/285270070/School_kids_group_2019_317.jpg"
                  alt=""
                  height="60px"
                  width="60px"
                />
                <div class="caption">
                  <div class="caphead">100K</div>
                  <div class="capinfo">Already enrolled with us!</div>
                </div>
              </div>
              <div class="lower">
                <button class="btn btn5">Join Now</button>
              </div>
            </div>
          </div>
          <img
            class="girl_img"
            src="\images\toppng.com-free-college-student-png-student-girl-image-400x798.png"
            alt=""
          />

          <div class="box3">
            <img
              src="\images\toppng.com-orange-transparent-email-icon-red-email-icons-1296x1296.png"
              alt=""
              height="90%"
              width="90%"
            />
            <div class="caption">
              <div class="caphead">Study Fast</div>
              <div class="capinfo">Get hands on our crash courses</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
