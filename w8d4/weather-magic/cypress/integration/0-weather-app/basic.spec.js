/// <reference types="cypress" />

describe("Basic Weather App tests", () => {
  it("shows the title", () => {
    cy.visit("http://localhost:3001");
    cy.get("header > h1").should("exist");
    cy.get("header > h1").should("contain", "Super Weather App");

    // cy.get("header > h1").should("not.exist");
  });
  it("shows the two elements in the list of cities", () => {
    cy.get(".SearchHistory ul li").should("have.length", 2)
  });
  it("is possible to type in the input field for weather search", () => {

    cy.get(".WeatherSearch input").type("Name of city")
    // cy.get(".WeatherSearch button").click()
  });
});
