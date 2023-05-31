/* -- portfolio popup --- */
let modal = $(".notice_portfolio"),
  modalBtnClose = modal.find("button"),
  modalInput = modal.find("input");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}
function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  let reject = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      reject = true;
      break;
    }
  }
  if (!reject) {
    modal.removeClass("__hidden");
  }
}
checkCookie("portfolio_LMS");

modalBtnClose.click(function () {
  modal.addClass("__hidden");
  if (modalInput.is(":checked")) {
    console.log("button click");
    setCookie(
      "portfolio_LMS",
      "본 사이트는 구직용 포트폴리오 사이트입니다.",
      1
    );
  } else {
    setCookie(
      "portfolio_LMS",
      "본 사이트는 구직용 포트폴리오 사이트입니다.",
      -1
    );
  }
});