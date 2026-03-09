let selectedRating = 0;

function updateStars(rating) {
  document.querySelectorAll(".star").forEach(star => {
    star.classList.toggle('selected', Number(star.dataset.value) <= Number(rating));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', function() {
      selectedRating = Number(this.dataset.value);
      updateStars(selectedRating);
    });

    star.addEventListener('mouseover', function() {
      updateStars(this.dataset.value);
    });

    star.addEventListener('mouseout', function() {
      updateStars(selectedRating);
    });
  });

  // initialize visuals
  updateStars(selectedRating);

  // call displayMovies if it's defined elsewhere
  if (typeof displayMovies === 'function') displayMovies();
});


function submitMovie() {
  const title = document.getElementById('movieTitle').value.trim();
  const year = document.getElementById('director').value.trim();
  const genreRaw = document.getElementById('genre').value;
  let genre = '';
  if (genreRaw) {
    if (genreRaw.includes('-')) {
      genre = genreRaw.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('-');
    } else {
      genre = genreRaw.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    }
  }
  const rating = selectedRating;

  if (!title) {
    alert('Please enter a movie title');
    return;
  }

  const list = document.getElementById('listOfMovies');
  const li = document.createElement('li');

  const stars = '★'.repeat(rating) + '☆'.repeat(Math.max(0, 5 - rating));
  li.textContent = `${title} ${year ? '(' + year + ')' : ''} - ${genre || ''}, Rating:  `;
  const starSpan = document.createElement('span');
  starSpan.textContent = `${stars}`;
  starSpan.style.color = '#e8cf3a';
  li.appendChild(starSpan);

  list.appendChild(li);

  // reset form and rating visuals
  const form = document.getElementById('movieDetails');
  if (form) form.reset();
  selectedRating = 0;
  updateStars(0);
}