let selectedRating = 0;

function updateStars(rating) {
  document.querySelectorAll(".star").forEach(star => {
    star.classList.toggle('selected', Number(star.dataset.value) <= Number(rating));
  });
}

function loadMovies() {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  const list = document.getElementById('listOfMovies');
  list.innerHTML = ''; // Clear existing list
  movies.forEach((movie, index) => {
    const li = document.createElement('li');
    const starCount = Math.round(movie.rating);
    const stars = '★'.repeat(starCount) + '☆'.repeat(Math.max(0, 5 - starCount));
    li.textContent = `${movie.title} ${movie.year ? '(' + movie.year + ')' : ''} - ${movie.genre || ''}, Rating: `;
    const starSpan = document.createElement('span');
    starSpan.textContent = `${movie.rating}/5 ${stars}`;
    starSpan.style.color = '#e8cf3a';
    li.appendChild(starSpan);

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Movie';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.backgroundColor = '#f44336';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.padding = '10px 5px';
    deleteBtn.style.borderRadius = '6px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', () => deleteMovie(index));
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

function deleteMovie(index) {
  if (confirm("Are you sure you want to delete this movie?")) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.splice(index, 1); // Remove the movie at the given index
    localStorage.setItem('movies', JSON.stringify(movies));
    loadMovies(); // Refresh the display
  }
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

  updateStars(selectedRating);

  loadMovies();
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

  const movie = {
    title: title,
    year: year,
    genre: genre,
    rating: rating
  };

  const movies = JSON.parse(localStorage.getItem('movies')) || [];

  const existingIndex = movies.findIndex(m => m.title.toLowerCase() === title.toLowerCase());
  if (existingIndex !== -1) {

    const existingMovie = movies[existingIndex];
    const averagedRating = (existingMovie.rating + rating) / 2;
    movies[existingIndex] = {
      title: title,
      year: year,
      genre: genre,
      rating: averagedRating
    };
  } else {
    movies.push(movie);
  }

  localStorage.setItem('movies', JSON.stringify(movies));

  loadMovies();

  const form = document.getElementById('movieDetails');
  if (form) form.reset();
  selectedRating = 0;
  updateStars(0);
}