
describe("Header and Footer elements find and test", () => {

  const contactsSection = "#contactsSection";

  const socialLinks = {
    facebook: "a[href*='facebook']",
    telegram: "a[href*='t.me']",
    youtube: "a[href*='youtube']",
    instagram: "a[href*='instagram']",
    linkedin: "a[href*='linkedin']",
  };

  const contacts = {
    website: "ithillel.ua",
    email: "support@ithillel.ua",
  };

  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("should find Sign up button in header", () => {
    cy.contains("Sign up").should("be.visible");
  });

  it("should find all footer social links", () => {
    cy.get(contactsSection).within(() => {
      cy.get(socialLinks.facebook).should("exist");
      cy.get(socialLinks.telegram).should("exist");
      cy.get(socialLinks.youtube).should("exist");
      cy.get(socialLinks.instagram).should("exist");
      cy.get(socialLinks.linkedin).should("exist");
    });
  });

  it("should find footer contacts", () => {
    cy.get(contactsSection).within(() => {
      cy.contains(contacts.website).should("be.visible");
      cy.contains(contacts.email).should("be.visible");
    });
  });

});