<script>
  document.getElementById('read-more-btn').addEventListener('click', function() {
    var moreText = document.querySelector('.more-text');
    var btn = document.getElementById('read-more-btn');
    
    if (moreText.classList.contains('hidden')) {
      moreText.classList.remove('hidden');
      btn.textContent = 'Read Less';
    } else {
      moreText.classList.add('hidden');
      btn.textContent = 'Read More';
    }
  });
</script>
