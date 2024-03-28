# Jest

- Test runner
- Coverage (How much code in a project is being tested)
- Built in API for testing ( expect() )
- Watching by default
- Causes pain (jk)
- Made for code (helper functions)

# React Testing Library

- Test React components
- render() then choose between getBy, queryBy, findBy
  - getBy : Try to find an element, and will throw an error if it doesn't find it
    getByText("Page Title")
    expect(getByText("Page Title")).toBeInTheDocument()

  - queryBy : Try to find an element, and will return null if it doesn't find it
    queryByText("Page Title") not enough
    expect(queryByText("Page Title")).not.toBeInTheDocument()

  - findBy : Same as getBy, but will have a grace period, asynchronous (by default wait for 1s)

# Cypress

- Test a web app / website

- cy.get("css selector")