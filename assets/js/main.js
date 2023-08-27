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
function tinhTienDien() {
  const inputs = $all('.form-bai2 input');
  const kwInput = +inputs[1].value;
  var total =
    kwInput > 0 && kwInput <= 50
      ? kwInput * 500
      : kwInput > 50 && kwInput <= 100
      ? 50 * 500 + (kwInput - 50) * 650
      : kwInput > 100 && kwInput <= 200
      ? 50 * 500 + 50 * 650 + (kwInput - 100) * 850
      : kwInput > 200 && kwInput <= 350
      ? 50 * 500 + 50 * 650 + 100 * 850 + (kwInput - 200) * 1100
      : kwInput > 350
      ? 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwInput - 350) * 1300
      : renderResult(txtSalary[1], 'Số KW không hợp lệ');
  if (total) {
    renderResult(
      txtSalary[1],
      `Họ tên : ${inputs[0].value}. Cần đóng ${new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(total)} tiền điện`
    );
  }
}

// bai 3
function tinhThue() {
  const inputs = $all('.form-bai3 input');
  const thuNhapChiuThue = +inputs[1].value - 4e6 - inputs[2].value * 16e5;
  var thue =
    thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e6
      ? thuNhapChiuThue * 0.05
      : thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6
      ? thuNhapChiuThue * 0.1
      : thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6
      ? thuNhapChiuThue * 0.15
      : thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6
      ? thuNhapChiuThue * 0.2
      : thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6
      ? thuNhapChiuThue * 0.25
      : thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6
      ? thuNhapChiuThue * 0.3
      : thuNhapChiuThue > 960e6
      ? thuNhapChiuThue * 0.35
      : renderResult(txtSalary[2], 'Bạn không phải chịu thuế');

  if (thue) {
    renderResult(
      txtSalary[2],
      `Họ tên : ${
        inputs[0].value
      }. Thuế thu nhập cá nhân : ${new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(thue)}`
    );
  }
}

// bài 4
function handleShowInput() {
  const inputs = $all('.form-bai4 input');
  const loaiKH = $a('#loaiKH').value;
  loaiKH == 'company'
    ? (inputs[2].style.display = 'block')
    : (inputs[2].style.display = 'none');
}

function tinhTienCap() {
  const inputs = $all('.form-bai4 input');
  const loaiKH = $a('#loaiKH').value;
  let total = 0;
  total =
    loaiKH == 'company'
      ? 15 +
        (+inputs[2].value >= 0 && +inputs[2].value <= 10
          ? +inputs[2].value * 75
          : +inputs[2].value > 0 && +inputs[2].value > 10
          ? 75 + (+inputs[2].value - 10) * 5
          : 0) +
        (+inputs[1].value > 0 ? +inputs[1].value * 50 : 0)
      : 4.5 + 20.5 + (+inputs[1].value > 0 ? 7.5 * +inputs[1].value : 0);
  loaiKH != 'company' ? ($all('#loaiKH option')[1].selected = true) : '';
  renderResult(
    txtSalary[3],
    `Mã khách hàng : ${inputs[0].value}; Tiền cáp : ${new Intl.NumberFormat(
      'en-US',
      { style: 'currency', currency: 'USD' }
    ).format(total)}`
  );
}

// Handle Click Btn & Enter Press :))
btnSalary[0].onclick = (e) => {
  e.preventDefault();
  tuyenSinh();
};
btnSalary[1].onclick = (e) => {
  e.preventDefault();
  tinhTienDien();
};
btnSalary[2].onclick = (e) => {
  e.preventDefault();
  tinhThue();
};
btnSalary[3].onclick = (e) => {
  e.preventDefault();
  tinhTienCap();
};
