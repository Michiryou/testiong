
    const button = document.getElementById('test-btn');
    const statusText = document.getElementById('status-text');
    const statusText2 = document.getElementById('status-text2');
    button.addEventListener('click', () => {
      statusText.textContent = '🎉 It works! JavaScript and CSS are working!';
      statusText.style.color = '#28a745';
      statusText.style.fontWeight = 'bold';
      statusText2.textContent = 'AYOKO NA MAG capstone';
    });
