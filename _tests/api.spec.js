const request = require("supertest");
const server = require("../api/index");
const db = require("../data/index");

// describe("Games API", () => {
//   beforeAll( done => {
//     db.seed.run();
//     done();
//   });

  describe("GET /", () => {
    it("Responds with a status code of 200(OK)", async () => {
      const res = await request(server).get("/")
      //console.log(res)
      expect(res.status).toBe(200);
    });

    it("Returns a JSON response",  async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe('application/json');
    });

    it("Returns a response indicating uptime",  async () => {
      const res =  await request(server).get("/");
      expect(res.body).toEqual({ message: "The Games API is up" });
    });
  });

  describe("GET /games/", () => {
    it("Responds with a status code of 200(OK)",  async () => {
      const res =  await request(server).get("/games");
      expect(res.status).toBe(200);
    });

    it("Returns a JSON response",  async () => {
      const res =  await request(server).get("/games");
      expect(res.type).toBe("application/json");
    });

    it("Returns an array of games (potentially empty)",  async () => {
      const res =  await (request(server).get("/games/"))
      expect(res.body).toEqual(expect.any(Array));
    });
  });

  describe("POST /games", () => {
    it("Returns a status of 201(Added)",  async () => {
      const entry = {
        title: "Darkest Dungeon",
        genre: "Ludonarrative",
        releaseYear: 2016
      };

      // const response =  await request(server)
      //   .post("/games")
      //   .send({
      //     title: "Dragon",
      //     genre: "Ludonarrative",
      //     releaseYear: 2010
      //   });
      // console.dir(response)
      // expect(response.status).toBe(201);
     });

    it("Returns a 400 error if required properties are missing",  async () => {
      const response =  await request(server)
        .post("/games")
        .send({ title: "Not Enough Info" });
      expect(response.status).toBe(422);
    });

    // it("Returns the newly created game",  async () => {
    //   const entry = {
    //     title: "Crazy Meat Boy",
    //     genre: "platformer",
    //     releaseYear: 2010
    //   };
    //   const response =  await request(server)
    //     .post("/games")
    //     .send(entry);
    //     expect(response.body.data).toEqual(entry);
    //    // console.log(response)
    });
