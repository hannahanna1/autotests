class Billing {
  setCardNumber(cardnumber) {
    cy.get('[class="InputElement is-empty Input Input--empty"]').type(
      "4242424242424242"
    );
  }
}
export default Billing;
