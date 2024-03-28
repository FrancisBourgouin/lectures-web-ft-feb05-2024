/// <reference types="cypress" />

describe("Weather App Stories", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load for a user, let a user type a city, and get the weather for it", () => {
    // Visit the app OK!
    // Type in the form
    cy.get("form input").type("Patate{enter}")
    // View the weather for the city in the form (Mock || Look for name)
    cy.get('.CurrentWeather > h1').should("contain.text","Patate")
    // ...
    // Profit!
  });
  it("should let a user store previously searched cities, and easily access the weather for those", () => {
    // Visit the app OK!
    // Type in the form
    cy.get("form input").type("Patate{enter}")
    // View the weather
    cy.get('.CurrentWeather > h1').should("contain.text","Patate")
    // View the city button
    // Type another city
    cy.get("form input").type("Victoria{enter}")
    cy.get('.CurrentWeather > h1').should("contain.text","Victoria")
    // View multiple buttons

    cy.get("ul li").should("have.length", 2)
    // Happy times.
  });
  it("should let a user store previously searched cities, without having duplicates in the list", () => {
    // Visit the app OK!
    // Type in the form
    cy.get("form input").type("Toronto{enter}")
    // View the weather
    cy.get('.CurrentWeather > h1').should("contain.text","Toronto")
    // View the city button
    // Type another city
    cy.get("form input").type("Toronto{enter}")
    cy.get('.CurrentWeather > h1').should("contain.text","Toronto")
    // View single button

    cy.get("ul li").should("have.length", 1)
    // Happy times.
  });
});
