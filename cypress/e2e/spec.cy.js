describe('default', () => {
  it('create toast', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-toastcontainer--default&viewMode=story',
    );
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="Test"]').should('have.attr', 'type', 'info');
  });
});
describe('Warning', () => {
  it('create toast', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?args=type:warning;toastPosition:top-right&id=example-toastcontainer--default&viewMode=story',
    );
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="Test"]').should('have.attr', 'type', 'warning');
  });
});
describe('Error', () => {
  it('create toast', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?args=type:error;toastPosition:top-right&id=example-toastcontainer--default&viewMode=story',
    );
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="Test"]').should('have.attr', 'type', 'error');
  });
});
describe('Success', () => {
  it('create toast', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?args=type:success;toastPosition:top-right&id=example-toastcontainer--default&viewMode=story',
    );
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="Test"]').should('have.attr', 'type', 'success');
  });
});
describe('Max count of toast', () => {
  it('create toast', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=example-toastcontainer--default&viewMode=story',
    );
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="Test"]').should('have.length', 3);
  });
});

describe('Toast duration', () => {
  it('create toast', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?args=type:warning;toastPosition:top-right;duration:5000&id=example-toastcontainer--default&viewMode=story',
    );
    cy.get('[data-cy="createToast"]').click();
    cy.get('[data-cy="Test"]').should('have.length', 1);
    cy.wait(2500);
    cy.get('[data-cy="Test"]').should('have.length', 1);
    cy.wait(2500);
    cy.get('[data-cy="Test"]').should('have.length', 0);
  });
});
