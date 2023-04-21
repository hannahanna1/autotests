describe("test_407", () => {
  it("Registration with different passwords", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/login/");
    // open signup page
    cy.get('[placeholder="Enter Email"]')
      .click()
      .type("hanna+taxp.109@repositax.com");
    cy.get('[placeholder="Enter password"]').click().type("1password!");

    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.wait(2000);
    cy.get('[href="/dashboard/firm/team"]').click();
    cy.get('[href="/dashboard/firm/billing"]').click();

    cy.get('//iframe[@name="__privateStripeFrame64512"]').its(
      "0.contentDocument.body"
    );
    // cy.get('[class="StripeElement StripeElement--empty"]')
    //   .parents("form")
    //   .find('iframe[name="__privateStripeFrame39112"]');

    // .find('[class="StripeElement StripeElement--empty"]')
    // .find('[name="__privateStripeFrame3916"]');

    // cy.get('[class="ElementsApp is-empty"]')
    //   .parents("form")
    //   .find('iframe[name="__privateStripeFrame39112"]')
    //   .focused()
    //   .type("123");
    //cy.get('[class="ElementsApp is-empty"]').parents("form");
    //cy.get('div[id="root"]').find("form").find("div").find("span").eq(1);
    // cy.document();
    // cy.get('[class="__PrivateStripeElement"]');
    // cy.get('[class="ElementsApp is-empty"]');
    //   .parents("form")
    //   .find('[class="StripeElement StripeElement--empty"]')
    //   .find('[name="__privateStripeFrame3916"]')
    //   .type("123");
    // .find('[aria-label="Credit or debit card number"]');
    // cy.get("input.InputElement").parents(".ElementsApp is-empty");
    // cy.get('[aria-label="Credit or debit card expiry date"]')
    //   .focused()
    //   .click()
    //   .type("123");
  });
});
