import Login from "../PageObjects/LoginPage_client.js";
describe("test_562", () => {
  it("Sign in with unregistered email", () => {
    cy.viewport("macbook-15");
    // open signup page
    cy.visit("/");
    // input unregistered email
    const ln = new Login();
    ln.setunregEmail("hanna+client.client01920h@repositax.com");

    // input password
    ln.setPassword("1password!");

    cy.wait(2000);

    cy.get('button[type="submit"]').click();

    cy.get('[class="ant-alert ant-alert-error ant-alert-no-icon"]')
      .should("be.visible")
      .should("have.css", "background-color", "rgb(255, 242, 240)");
  });
});
