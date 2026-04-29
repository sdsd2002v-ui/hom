function handleSubmit(event) {
  event.preventDefault();
  alert('문의가 접수되었습니다. 실제 홈페이지 연결 시 관리자에게 전송되도록 설정할 수 있습니다.');
  event.target.reset();
}

// Global scope attachment for HTML onclick
window.handleSubmit = handleSubmit;
