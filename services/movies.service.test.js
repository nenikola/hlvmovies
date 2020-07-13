import moviesService from "./movies.service";
import axios from "axios";
import * as mockMoviesJSON from "../mocks/orgMovies.json";

jest.mock("axios");

describe("Movies service", () => {
  baseMovies = mockMoviesJSON.data.results.slice(0, 10).map((orgMovie) => ({
    key: orgMovie["id"],
    title: orgMovie["title"],
    releaseDate: new Date(orgMovie["release_date"]),
    voteRate: orgMovie["vote_average"],
    imageURL: orgMovie["poster_path"],
    backdropImageURL: orgMovie["backdrop_path"],
    description: orgMovie["overview"],
    genres: orgMovie["genre_ids"],
  }));
  detailsMovies = baseMovies.map((baseMovie) => ({
    ...baseMovie,
    ...JSON.parse(detailsTemplate(baseMovie)),
  }));

  it("should return array of base movies", async () => {
    axios.get.mockResolvedValue(mockMoviesJSON);
    const movies = await moviesService.getMovies(10);

    expect(movies).toEqual(baseMovies);
  });

  it("should return array of 10 base movies", async () => {
    axios.get.mockResolvedValue(mockMoviesJSON);
    const movies = await moviesService.getMovies();

    expect(movies).toEqual(baseMovies);
  });

  it("should return array of movies details", async () => {
    axios.get.mockImplementation((movie) => {
      return JSON.parse(`{ "data": ${detailsResponseTemplate(movie)}}`);
    });
    const movies = await moviesService.getMoviesDetails(baseMovies);

    expect(movies).toEqual(detailsMovies);
  });

  it("should throw an error", async () => {
    axios.get.mockImplementation((movie) => {
      return JSON.parse(`{ "data": ${detailsResponseTemplate(movie)}}`);
    });
    try {
      const movies = await moviesService.getMoviesDetails();
    } catch (error) {
      expect(error.message).toEqual("Movies must be defined array");
    }
  });
  it("should return empty array", async () => {
    axios.get.mockImplementation((movie) => {
      return JSON.parse(`{ "data": ${detailsResponseTemplate(movie)}}`);
    });
    const movies = await moviesService.getMoviesDetails([]);
    expect(movies).toEqual([]);
  });
});

function detailsTemplate(movie) {
  return JSON.stringify({
    genres: [
      {
        id: 12,
        name: "Авантуристички",
      },
      {
        id: 14,
        name: "Фантастика",
      },
    ],
    credits: [
      {
        credit_id: "5acdac5b9251410c0601afab",
        department: "Production",
        gender: 2,
        id: 1100,
        job: "Producer",
        name: "Arnold Schwarzenegger",
        profile_path: "/dgp6aeBeKif0zOEFZDggovsL6Zh.jpg",
      },
      {
        credit_id: "5acdac3e0e0a267f97020b40",
        department: "Production",
        gender: 2,
        id: 7592,
        job: "Producer",
        name: "Sergey Selyanov",
        profile_path: null,
      },
      {
        credit_id: "5acdac51c3a3687e0e03837c",
        department: "Production",
        gender: 2,
        id: 18897,
        job: "Producer",
        name: "Jackie Chan",
        profile_path: "/sVuTm1w5G6ofrx4lRjy64D7MRiS.jpg",
      },
      {
        credit_id: "583be7b1925141233700651a",
        department: "Directing",
        gender: 2,
        id: 238220,
        job: "Director",
        name: "Oleg Stepchenko",
        profile_path: null,
      },
      {
        credit_id: "5acda7019251410c0601a96d",
        department: "Production",
        gender: 2,
        id: 1289984,
        job: "Producer",
        name: "Alexey A. Petrukhin",
        profile_path: null,
      },
      {
        credit_id: "58a864a192514156690092f6",
        department: "Production",
        gender: 2,
        id: 1760461,
        job: "Producer",
        name: "Gleb Fetisov",
        profile_path: "/giWgs0gjFgrbeO5nLALrFtZ9QBN.jpg",
      },
      {
        credit_id: "58a86567925141566d009397",
        department: "Production",
        gender: 1,
        id: 1760479,
        job: "Executive Producer",
        name: "Marina Bespalov",
        profile_path: null,
      },
    ],
  });
}
function detailsResponseTemplate(movie) {
  return JSON.stringify({
    genres: [
      {
        id: 12,
        name: "Авантуристички",
      },
      {
        id: 14,
        name: "Фантастика",
      },
    ],
    id: movie.key,
    credits: {
      cast: [
        {
          cast_id: 5,
          character: 'Jonathan Green "Dzhonatan Grin"',
          credit_id: "583be85cc3a3686101005ac4",
          gender: 2,
          id: 973,
          name: "Jason Flemyng",
          order: 0,
          profile_path: "/4jL6MmeqL1Bj9WbxIR4QxNDNKJR.jpg",
        },
        {
          cast_id: 2,
          character: "James Hook",
          credit_id: "583be83cc3a36860000057fd",
          gender: 2,
          id: 1100,
          name: "Arnold Schwarzenegger",
          order: 1,
          profile_path: "/dgp6aeBeKif0zOEFZDggovsL6Zh.jpg",
        },
      ],
      crew: [
        {
          credit_id: "5acdac5b9251410c0601afab",
          department: "Production",
          gender: 2,
          id: 1100,
          job: "Producer",
          name: "Arnold Schwarzenegger",
          profile_path: "/dgp6aeBeKif0zOEFZDggovsL6Zh.jpg",
        },
        {
          credit_id: "5acdac3e0e0a267f97020b40",
          department: "Production",
          gender: 2,
          id: 7592,
          job: "Producer",
          name: "Sergey Selyanov",
          profile_path: null,
        },
        {
          credit_id: "5acdac51c3a3687e0e03837c",
          department: "Production",
          gender: 2,
          id: 18897,
          job: "Producer",
          name: "Jackie Chan",
          profile_path: "/sVuTm1w5G6ofrx4lRjy64D7MRiS.jpg",
        },
        {
          credit_id: "5c4061530e0a26386791deb6",
          department: "Camera",
          gender: 2,
          id: 70749,
          job: "Director of Photography",
          name: "Man-Ching Ng",
          profile_path: "/x9zRgWBowVKS1z8uml2d94A2INs.jpg",
        },
        {
          credit_id: "5acda61a9251410bda01a213",
          department: "Writing",
          gender: 2,
          id: 238220,
          job: "Screenplay",
          name: "Oleg Stepchenko",
          profile_path: null,
        },
        {
          credit_id: "583be7b1925141233700651a",
          department: "Directing",
          gender: 2,
          id: 238220,
          job: "Director",
          name: "Oleg Stepchenko",
          profile_path: null,
        },
        {
          credit_id: "5f0542c6a35c8e003822f6be",
          department: "Writing",
          gender: 2,
          id: 1097807,
          job: "Characters",
          name: "Nikolai Gogol",
          profile_path: null,
        },
        {
          credit_id: "5acda635c3a3687e4003a905",
          department: "Writing",
          gender: 2,
          id: 1289984,
          job: "Screenplay",
          name: "Alexey A. Petrukhin",
          profile_path: null,
        },
        {
          credit_id: "5acda7019251410c0601a96d",
          department: "Production",
          gender: 2,
          id: 1289984,
          job: "Producer",
          name: "Alexey A. Petrukhin",
          profile_path: null,
        },
        {
          credit_id: "58a864a192514156690092f6",
          department: "Production",
          gender: 2,
          id: 1760461,
          job: "Producer",
          name: "Gleb Fetisov",
          profile_path: "/giWgs0gjFgrbeO5nLALrFtZ9QBN.jpg",
        },
        {
          credit_id: "58a86567925141566d009397",
          department: "Production",
          gender: 1,
          id: 1760479,
          job: "Executive Producer",
          name: "Marina Bespalov",
          profile_path: null,
        },
        {
          credit_id: "5acdaa8e9251410c3901b7d9",
          department: "Writing",
          gender: 2,
          id: 1996041,
          job: "Story Editor",
          name: "Dmitriy Paltsev",
          profile_path: null,
        },

        {
          credit_id: "5c406168c3a368694e41828f",
          department: "Sound",
          gender: 1,
          id: 2020862,
          job: "Original Music Composer",
          name: "Alexandra Magakyan",
          profile_path: null,
        },
        {
          credit_id: "5bc53ecd92514179ca066a4d",
          department: "Camera",
          gender: 2,
          id: 2020863,
          job: "Director of Photography",
          name: "Ivan Gudkov",
          profile_path: null,
        },
      ],
    },
  });
}
