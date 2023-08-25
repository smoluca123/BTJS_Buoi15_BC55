const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
var btnSalary = $all('#btnSalary');
var txtSalary = $all('#txtSalary');

function renderResult(element, result) {
  element.innerText = result;
}
// bài 1
function tuyenSinh() {
  const inputs = $all('.form-bai1 input');
  const selects = $all('.form-bai1 select');
  if (+inputs[1].value < 1 || +inputs[2].value < 1 || +inputs[3].value < 1) {
    renderResult(txtSalary[0], 'Bạn đã rớt vì có điểm số 0 điểm');
    return;
  }
  var diem =
    +inputs[1].value +
    +inputs[2].value +
    +inputs[3].value +
    (+selects[0].value + +selects[1].value);
  renderResult(
    txtSalary[0],
    diem >= inputs[0].value
      ? `Bạn đã đậu. ${diem} điểm`
      : `Bạn không đủ điểm. ${diem} điểm`
  );
}

// bai 2

// Handle Click Btn
btnSalary[0].onclick = (e) => {
  e.preventDefault();
  tuyenSinh();
};
