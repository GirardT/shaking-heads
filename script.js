document.addEventListener('DOMContentLoaded', function() {
    const shakingHeads = document.querySelectorAll('.shaking-head');
  
    shakingHeads.forEach(shakingHead => {
      shakingHead.addEventListener('click', function() {
        shakingHead.classList.toggle('shake');
      });
    });
  });
  