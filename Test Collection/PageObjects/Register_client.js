class Register {
  setEmail(email) {
    cy.get("#email").type("hanna+client.newcl0@repositax.com");
  }
  setFirstName(firstname) {
    cy.get("#firstName").type("Michelle");
  }
  setLastName(lastname) {
    cy.get("#lastName").type("Colson");
  }
  setPassword(password) {
    cy.get('[placeholder="Password"][type="password"]').type("1password!");
  }
  setConfirmPassword(confirmpassword) {
    cy.get('[id="confirmPassword"]').type("1password!");
  }
}

export default Register;
