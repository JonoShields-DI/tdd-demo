const request = require('supertest');
const properties = require("./properties.json");
const app = require('./app');

describe("GET requests /properties", () => {
    test("should return a 200 a list of not archived properties", async () => {
        // arrange
        const expectedStatus = 200
        const expectedProperties = [properties[0], properties[1], properties[2]]

        // act
        const response = await request(app).get('/properties')

        //assert
        expect(response.status).toBe(expectedStatus)
        expect(response.body).toEqual(expectedProperties)
    })
})