import Register from "../../PageObjects/Register_client.js";
describe("test_88", () => {
  it("Registration with invalid data on the email field (Client)", () => {
    cy.viewport("macbook-15");
    cy.visit("https://beta.repositax.com/register");
    // open register page

    // input First Name
    const ln = new Register();
    ln.setFirstName();

    // input Second Name
    ln.setLastName();

    //input email without domain part
    cy.get('[id="email"]').type("plainaddress");
    cy.get(".ant-form-item-children-icon")
      .eq(0)
      .should("have.css", "color", "rgb(255, 77, 79)");

    //input Password
    ln.setPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(1)
      .should("have.css", "color", "rgb(82, 196, 26)");

    // confirm password
    ln.setConfirmPassword();
    cy.get(".ant-form-item-children-icon")
      .eq(2)
      .should("have.css", "color", "rgb(82, 196, 26)");

    // select a client type
    cy.get('[class="ant-form ant-form-horizontal register_form__GKcr2"]')
      .find('[class="ant-radio-button-wrapper"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons).eq(1).click();
      });

    // mark the chekbox
    cy.get('label[class="ant-checkbox-wrapper"]').contains(
      "I agree to the Terms of Service & Privacy Policy"
    );
    cy.get('[type="checkbox"]').click();

    // click button
    cy.get('button[type="submit"]').click();
    cy.get('[class="ant-form-item-explain-error"]')
      .should("have.text", "Email is not valid")
      .and("have.css", "color", "rgb(255, 77, 79)");

    // test 2
    it("Registration with invalid data on the email field (Client)", () => {
      cy.viewport("macbook-15");
      cy.visit("https://beta.repositax.com/register");
      // open register page

      // input First Name
      const ln = new Register();
      ln.setFirstName();

      // input Second Name
      ln.setLastName();

      //input email without domain part
      cy.get('[id="email"]').type("email.domain.com");
      cy.get(".ant-form-item-children-icon")
        .eq(0)
        .should("have.css", "color", "rgb(255, 77, 79)");

      //input Password
      ln.setPassword();
      cy.get(".ant-form-item-children-icon")
        .eq(1)
        .should("have.css", "color", "rgb(82, 196, 26)");

      // confirm password
      ln.setConfirmPassword();
      cy.get(".ant-form-item-children-icon")
        .eq(2)
        .should("have.css", "color", "rgb(82, 196, 26)");

      // select a client type
      cy.get('[class="ant-form ant-form-horizontal register_form__GKcr2"]')
        .find('[class="ant-radio-button-wrapper"]')
        .then((radioButtons) => {
          cy.wrap(radioButtons).eq(1).click();
        });

      // mark the chekbox
      cy.get('label[class="ant-checkbox-wrapper"]').contains(
        "I agree to the Terms of Service & Privacy Policy"
      );
      cy.get('[type="checkbox"]').click();

      // click button
      cy.get('button[type="submit"]').click();
      cy.get('[class="ant-form-item-explain-error"]')
        .should("have.text", "Email is not valid")
        .and("have.css", "color", "rgb(255, 77, 79)");
    });
  });
});
