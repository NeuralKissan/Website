const PodImage = document.getElementById("PodImage");
let Speed = 20;
let Offset = 100;
let ImageSet = "Resized_";
let ImageExt = ".png";
let ScrollFrame = (
  "000" + Math.round(((window.scrollY + Offset) / Speed + 1) % 119)
).slice(-4);
let Frame = ScrollFrame;
const nav = document.querySelector("nav");

// PodImage.src = `Meida/Images/Seq/${ImageSet}${ScrollFrame}${ImageExt}`;
// PodImage.src = `Meida/Images/Op20001-0120.mp4`;
window.onscroll = () => {
  if (window.scrollY < 900 && window.scrollY > 400) {
    nav.style.opacity = 0;
  } else {
    nav.style.opacity = 1;
  }
  if (window.scrollY > 900) {
    ShowNavbar(true);
  } else {
    ShowNavbar(false);
    ScrollFrame = (
      "000" + Math.round(((window.scrollY + Offset) / Speed + 1) % 119)
    ).slice(-4);

    PodImage.currentTime=window.scrollY/500
    if (Frame < ScrollFrame) {
      for (let x = Frame; x < ScrollFrame; x++) {
        // Frame = ("000" + x).slice(-4);
        // PodImage.src = `Meida/Images/Seq/${ImageSet}${Frame}${ImageExt}`;
      }
    } else if (Frame > ScrollFrame) {
      for (let x = Frame; x > ScrollFrame; x--) {
        Frame = ("000" + x).slice(-4);
        // PodImage.src = `Meida/Images/Seq/${ImageSet}${Frame}${ImageExt}`;
      }
    } else if (window.scrollY == 0) {
      // PodImage.src = `Meida/Images/Seq/${ImageSet}0001${ImageExt}`;
    }
  }
};

function ShowNavbar(state) {
  if (state == true) {
    nav.style.position = "sticky";
    nav.style.opacity = 1;
    document.querySelector('#Main').style.backgroundColor='white'
  } else {
    document.querySelector('#Main').style.backgroundColor='#050505'

    nav.style.position = "static";
  }
}


