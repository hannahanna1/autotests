class Login {
  setEmail(email) {
    cy.get('[placeholder="Enter Email"]')
      .click()
      .type("hanna+client.client01@repositax.com");
  }
  setPassword(password) {
    cy.get('[placeholder="Enter password"]').click().type("1password!");
  }
  setunregEmail(email) {
    cy.get('[placeholder="Enter Email"]')
      .click()
      .type("hanna+client.client01920h@repositax.com");
  }
  setResetEmail(email) {
    cy.get('input[placeholder="Enter Email"]').type(
      "hanna+client.client01@repositax.com"
    );
  }
}
export default Login;
