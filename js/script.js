$(".autoplay").slick({
  autoplay: true,
  vertical: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
});

// ******* INTERACTIVE

const mainPOVideo = document.querySelector(
  ".gs__popup--form__step--intro-content__video"
);
const btnGetStarted = document.getElementById("btn--get-started");
btnGetStarted.style.opacity = "0";

function btnActivate() {
  const bgsAnimation = btnGetStarted.animate(
    [
      {
        opacity: 0,
        transform: "translateY(4rem)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      iterations: 1,
      delay: 0,
      easing: "ease-in",
      fill: "backwards",
    }
  );
  bgsAnimation.onfinish = function () {
    btnGetStarted.style.opacity = "1";
  };
}

// **** Handling the form step changes
const steps = Array.from(
  document.querySelectorAll("form.gs__popup--form .step")
);
const btnNext = document.querySelectorAll(".gs__popup--form .btn--next");
const btnPrev = document.querySelectorAll(".gs__popup--form .btn--back");
const form = document.querySelector(".gs__popup--form");

btnNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeStep("next");
  });
});

btnPrev.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeStep("prev");
  });
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector("form.gs__popup--form .step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
