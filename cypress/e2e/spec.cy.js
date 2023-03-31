describe('template spec', () => {
    it('create toast', () => {
        cy.visit(
            'http://localhost:6006/iframe.html?id=example-toastcontainer--default&viewMode=story',
        );
        cy.get('[data-cy="createToast"]').click();
        cy.get('[data-cy="Test"]');
    });
});
