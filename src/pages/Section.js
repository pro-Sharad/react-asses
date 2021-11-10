import React from "react";

function Section() {
  return (
    <>
      <div class="container2">
        <div class="heading">
          <span style={{ color: "blue" }}>Helping Students</span> Achieve Their
          Dream
        </div>
        <div class="line1">
          A journey of a few IITians and NIITians that started with a goal to
          bring back the long lost meaning of education to the real world
        </div>
        <div class="line2">
          tools needed to run a successful school or office
        </div>
        <div class="cards">
          <div class="card-content card1">
            <img
              src="\images\toppng.com-lanning-icon-you-will-ace-the-test-914x914.png"
              alt=""
            />
            <h3>Exams/Courses</h3>
            <p class="para">CBSC,ICSE,ISC</p>
            <p class="para">JEE,BITSAT,NEET</p>
            <p class="para">KVPY</p>
            <p class="para">MHCET,WBJEE</p>
          </div>
          <div class="card-content card2">
            <img src="\images\pngwing.com.png" alt="" />
            <h3>Crash Courses</h3>
            <p class="para">Foundation (Class 6-10)</p>
            <p class="para">CBSC,ICSE,ISC</p>
            <p class="para">JEE,NEET</p>
            <p class="para">KVPY Bootcamp</p>
          </div>
          <div class="card-content card3">
            <img
              src="\images\kisspng-user-profile-computer-icons-transparency-clip-art-huawei-mobile-cloud-5d0d154313f116.7977613315611384990817.png"
              alt=""
            />
            <h3>Career Guidance</h3>
            <p class="para">Medical </p>
            <p class="para">Engineering</p>
            <p class="para">General Science</p>
            <p class="para">Research Fields</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
