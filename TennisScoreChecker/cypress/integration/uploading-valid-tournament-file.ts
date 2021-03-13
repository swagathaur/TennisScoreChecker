describe('Uploading a tennis score file', () => {
    it('Uploads the file and reads the scores to the screen', () => {
        cy.visit('http://localhost:3000');

        //Get file fixture and attach to button
        // eslint-disable-next-line jest/valid-expect-in-promise
        cy.fixture('full_tournament.txt').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'full_tournament',
            });
        });

        //Click the submit button
        cy.get('[data-testid="fileSubmitButton"]').click();

        //Check the match lists length is 2
        cy.get('[data-testid=matchList>li').should('have.length', 2);

        //Check the results within the matches
        cy.get('[data-testid=matchList').within(() => {
            
            //NOTE:: Making an assumption that the display will be correct in both cases if its correct in one, as the component tests should be checking the rest.
            cy.get('[name="matchOutcome0"]').within(() => {

                //Check that table contains the two player strings
                cy.get('tr').eq(0).get('td').eq(0).contains('Person A');
                cy.get('tr').eq(1).get('td').eq(0).contains('Person B');
                
                //Check that each column contains the right game data for that set
                cy.get('tr').eq(0).get('td').eq(1).contains('6');
                cy.get('tr').eq(1).get('td').eq(1).contains('0');
                
                //Check that the table contains the correct sets in the final column
                cy.get('tr').eq(0).get('td').eq(2).contains('2');
                cy.get('tr').eq(1).get('td').eq(2).contains('0');

                //TODO:: Check that the winner row has the winners styling
            });  
        })
    });
});

export {}