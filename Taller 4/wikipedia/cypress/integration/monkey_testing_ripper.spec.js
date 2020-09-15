describe('Wikipedia under monkeys', function() {
	beforeEach(function() {
		cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
		
        cy.wait(2000)
	})
	
    it.skip('Monkeys random', function() {
        randomClick(10);
    })
	
	it('Monkeys Event', function() {
        randomEvent(10);
    })
})

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

function randomClick(monkeysLeft) {
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
			var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }

            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}

function randomEvent(monkeys){
	console.log(monkeys);
	if(monkeys > 0) {
		var eventsArray = [0,1,2,3];
		switch (getRandomInt(0, eventsArray.length)) {
		  case 0:
			clickLink(monkeys)
			break;
		  case 1:
			fillField(monkeys)
			break;
		  case 2:
			selectCombo(monkeys)
			break;
		  case 3:
			clickButton(monkeys)
			break;
		  default:
			break;
		}		
	}
}

// Link Random 
function clickLink(monkeys){
	cy.get('a').then($links => {
		var randomLink = $links.get(getRandomInt(0, $links.length));
		if(!Cypress.dom.isHidden(randomLink)) {
			cy.wrap(randomLink).click({force: true});
			monkeys = monkeys - 1;
		}

		setTimeout(randomEvent, 1000, monkeys);
	});
}

//Campo Random
function fillField(monkeys){
	cy.get('input').then($inputs => {
		var randomInput= $inputs.get(getRandomInt(0, $inputs.length));
		cy.wrap(randomInput).type('Type in your name', { force: true });
		monkeys = monkeys - 1;
		setTimeout(randomEvent, 1000, monkeys);
	});
}
//Combo random
function selectCombo(monkeys){
	cy.get('select').children().its('length').then(($lenght) => {
		var randomItem = getRandomInt(0, $lenght);
		cy.get('select')
		.find('option')
		.eq(randomItem)
		.then(element => cy.get('select').select(element.val()))
		monkeys = monkeys - 1;
		setTimeout(randomEvent, 1000, monkeys);
	})
}
//Boton Random
function clickButton(monkeys){
	cy.get('button').then($buttons => {
		var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
		if(!Cypress.dom.isHidden(randomButton)) {
			cy.wrap(randomButton).click({force: true});
			monkeys = monkeys - 1;
		}
		setTimeout(randomEvent, 1000, monkeys);
	});
}