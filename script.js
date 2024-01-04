document.addEventListener("DOMContentLoaded", function () {
  var imgH = document.getElementById("imgH");
  var imgC = document.getElementById("imgC");
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var agreeBtn = document.getElementById("Agree");
  var disagreeBtn = document.getElementById("disagree");
  var mindChangeBtn = document.getElementById("mindChange");

  imgH.style.display = "none";
  imgC.style.display = "none";
  p1.style.display = "none";
  p2.style.display = "none";

  mindChangeBtn.style.display = "none";

  agreeBtn.addEventListener("click", function () {
    imgH.style.display = "block";
    p1.style.display = "block";
    imgC.style.display = "none";
    p2.style.display = "none";
    showMindChangeButton();
  });

  disagreeBtn.addEventListener("click", function () {
    imgC.style.display = "block";
    p2.style.display = "block";
    imgH.style.display = "none";
    p1.style.display = "none";
    showMindChangeButton();
  });

  mindChangeBtn.addEventListener("click", function () {
    hideOptions();
  });

  function showMindChangeButton() {
    mindChangeBtn.style.display = "inline-block";
  }

  function hideOptions() {
    imgH.style.display = "none";
    imgC.style.display = "none";
    p1.style.display = "none";
    p2.style.display = "none";
    mindChangeBtn.style.display = "none";
  }
});
