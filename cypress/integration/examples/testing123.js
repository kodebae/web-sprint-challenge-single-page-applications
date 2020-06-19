describe("Form inputs", () => {
    it("can navigate to the site", () => {
      cy.visit("http://localhost:3000/pizza");
      cy.url().should("include", "localhost");
    });
  
    it(".button is disabled", () => {
      cy.get(".button").should("be.disabled");
    });
  
    it("can type a name", () => {
      cy.get('input[name="name"]')
        .type("Lady Gaga")
        .should("have.value", "Lady Gaga");
    });
  
    it("can select a size", () => {
      cy.get('select[name="size"]')
        .select("Medium")
        .should("have.value", "medium");
    });
  
    it("submit button not disabled any more", () => {
      cy.get("button.submit").should("not.be.disabled");
    });
  
    it("checkbox can be checked", () => {
      cy.get(".terms input").should("not.be.disabled");
    });
  });
  
 
  
  describe("Form validation", () => {
    it("validates if form is empty", () => {

      cy.visit("http://localhost:3000/pizza");
  
      cy.get(".input").invoke("val").should("contain", "");
    });
  });