function handleSubmit(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submit-btn');
  const originalBtnText = submitBtn.innerText;
  
  // 버튼 비활성화 (중복 클릭 방지)
  submitBtn.disabled = true;
  submitBtn.innerText = '전송 중...';

  // EmailJS 전송 파라미터 설정
  // index.html의 input name들과 일치해야 합니다.
  const templateParams = {
    from_name: document.getElementById('from_name').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  // EmailJS 전송
  emailjs.send('service_59a5ft6', 'sdsd2002v', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('문의가 성공적으로 접수되었습니다! 곧 연락드리겠습니다.');
       event.target.reset();
    }, function(error) {
       console.log('FAILED...', error);
       alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    })
    .finally(function() {
      // 버튼 복구
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
    });
}

// Global scope attachment for HTML onclick
window.handleSubmit = handleSubmit;
