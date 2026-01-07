function getShows() {
   const showList = getShowList(); // get the list of shows below into this function
   const cat = showCat.value; // get the category selected by a user from the dropdown menu
    
  // construct the table content into rowString variable
   rowString = "<tr><th>Index</th><th>Title</th><th>Casts</th><th>Year</th><th>Rating / Score</th></tr>";
   results.innerHTML = "" // reset content of table for each getShows() function call
   for (let ndx=0; ndx < showList.length; ndx++) {
     if (showList[ndx].category == cat || cat == "All") { // include only the selected shows based on category
       rowString += "<tr>";
       rowString += "<td>" + ndx + "</td>";
       rowString += "<td>" + showList[ndx].title + "</td>";
       rowString += "<td>" + showList[ndx].cast + "</td>";
       rowString += "<td>" + showList[ndx].year + "</td>";
      rowString += "<td>" + showList[ndx].ratingScore() + "</td></tr>";
     }
   }
   results.innerHTML = rowString; // show the table content on the browser
}

function getShowList() {
  // sample of an array with objects
 const netflixShows = [
  {
    title: "Breaking Bad",
    category: "Drama",
    year: 2008,
    seasons: 5,
    rating: "TV-MA",
    cast: ["Bryan Cranston", "Aaron Paul"],
    language: "English",
    imdbScore: 9.5,
    awards: ["Emmy", "Golden Globe"],
    duration: "47 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "The Crown",
    category: "Drama",
    year: 2016,
    seasons: 6,
    rating: "TV-MA",
    cast: ["Olivia Colman", "Claire Foy"],
    language: "English",
    imdbScore: 8.6,
    awards: ["Golden Globe"],
    duration: "55 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Brooklyn Nine-Nine",
    category: "Comedy",
    year: 2013,
    seasons: 8,
    rating: "TV-14",
    cast: ["Andy Samberg", "Terry Crews"],
    language: "English",
    imdbScore: 8.4,
    awards: ["Golden Globe"],
    duration: "22 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Sex Education",
    category: "Comedy",
    year: 2019,
    seasons: 4,
    rating: "TV-MA",
    cast: ["Asa Butterfield", "Gillian Anderson"],
    language: "English",
    imdbScore: 8.3,
    awards: ["BAFTA Nominee"],
    duration: "50 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Stranger Things",
    category: "Sci-Fi",
    year: 2016,
    seasons: 5,
    rating: "TV-14",
    cast: ["Millie Bobby Brown", "Finn Wolfhard"],
    language: "English",
    imdbScore: 8.7,
    awards: ["SAG Award"],
    duration: "50 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Black Mirror",
    category: "Sci-Fi",
    year: 2011,
    seasons: 6,
    rating: "TV-MA",
    cast: ["Various"],
    language: "English",
    imdbScore: 8.8,
    awards: ["Emmy"],
    duration: "60 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "One Piece",
    category: "Anime",
    year: 1999,
    seasons: "Ongoing",
    rating: "TV-14",
    cast: ["Mayumi Tanaka", "Kazuya Nakai"],
    language: "Japanese",
    imdbScore: 8.9,
    awards: ["Anime Awards"],
    duration: "24 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Attack on Titan",
    category: "Anime",
    year: 2013,
    seasons: 4,
    rating: "TV-MA",
    cast: ["Yuki Kaji", "Marina Inoue"],
    language: "Japanese",
    imdbScore: 9.0,
    awards: ["Anime Awards"],
    duration: "24 min per episode",
    availability: "Global",
    ratingScore: function () {
      return this.rating + " / " + this.imdbScore;
    }
  }
];

  return netflixShows;
}