Cypress.Commands.add('scrollToPosition', (selector, x = 0, y = 0) => {
    cy.get(selector).scrollTo(x, y);
});

Cypress.Commands.add('swipe', (selector, direction, distance = 200) => {
    const swipeOptions = {
        left: { dx: -distance, dy: 0 },
        right: { dx: distance, dy: 0 },
        up: { dx: 0, dy: -distance },
        down: { dx: 0, dy: distance }
    };

    const { dx, dy } = swipeOptions[direction];

    cy.get(selector)
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', dx, dy)
        .trigger('mouseup', { force: true });
});

Cypress.Commands.add('drag', (selector, destination) => {
    cy.get(selector)
        .trigger('mousedown', { which: 1 });

    cy.get(destination)
        .trigger('mousemove')
        .trigger('mouseup', { force: true });
});

Cypress.Commands.add('clickWithOptions', (selector, options = { multiple: false, force: true }) => {
    cy.get(selector).click(options);
});

Cypress.Commands.add('doubleClick', (selector) => {
    cy.get(selector).dblclick();
});

Cypress.Commands.add('hover', (selector) => {
    cy.get(selector).trigger('mouseover');
});

Cypress.Commands.add('rightClick', (selector) => {
    cy.get(selector).rightclick();
});

Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
    cy.get(sourceSelector)
        .trigger('mousedown', { which: 1 });

    cy.get(targetSelector)
        .trigger('mousemove')
        .trigger('mouseup', { force: true });
});

Cypress.Commands.add('typeText', (selector, textToFill) => {
    cy.get(selector).type(textToFill);
})

Cypress.Commands.add('scrollTillVisible', (selector, direction = 'down', distance = 200) => {
    const scrollOptions = {
        down: { dx: 0, dy: distance },
        up: { dx: 0, dy: -distance },
        right: { dx: distance, dy: 0 },
        left: { dx: -distance, dy: 0 }
    };

    const { dx, dy } = scrollOptions[direction];

    function scrollAndCheck() {
        cy.get('body').then($body => {
            if ($body.find(selector).length > 0) {
                cy.get(selector).scrollIntoView();
            } else {
                cy.window().then((win) => {
                    win.scrollBy(dx, dy);
                    cy.wait(200);
                    scrollAndCheck();
                });
            }
        });
    }

    scrollAndCheck();
});

Cypress.Commands.add('waitTillVisible', (selector, timeout = 10000) => {
    const checkVisibility = () => {
        cy.get('body').then($body => {
            if ($body.find(selector).length > 0) {
                cy.get(selector).should('be.visible');
            } else {
                cy.wait(500);
                checkVisibility();
            }
        });
    };

    cy.timeout(timeout);
    checkVisibility();
});

Cypress.Commands.add('waitForElementToBeLoaded', (selector, timeout = 10000) => {
    const startTime = Date.now();

    function checkLoaded() {
        cy.get('body').then($body => {
            const elapsedTime = Date.now() - startTime;

            if (elapsedTime >= timeout) {
                throw new Error(`Element ${selector} not loaded within ${timeout} ms`);
            }

            if ($body.find(selector).length > 0) {
                cy.get(selector).should('be.visible');
            } else {
                cy.wait(500);
                checkLoaded();
            }
        });
    }

    checkLoaded();
});

Cypress.Commands.add('checkRadioButton', (selector) => {
    cy.get(selector).then($radio => {
        if ($radio.is(':checked')) {
            cy.log('Radio button is already checked.');
        } else {
            cy.log('Radio button is not checked, selecting it now.');
            cy.get(selector).check();
        }
    });
});

Cypress.Commands.add('compareAndValidateSnapshot', (snapshotName, options = { errorThreshold: 1, failSilently: true }) => {
    cy.compareSnapshot(snapshotName, options).then(comparisonResults => {
      if (comparisonResults.error) {
        throw new Error(`Snapshot comparison failed: ${comparisonResults.error}`);
      }
    });
  });

  Cypress.Commands.add('checkCheckbox', (selector) => {
    cy.get(selector).then($checkbox => {
        if ($checkbox.is(':checked')) {
            cy.log('Checkbox is already checked.');
        } else {
            cy.log('Checkbox is not checked, checking it now.');
            cy.get(selector).check();
        }
    });
});

Cypress.Commands.add('uploadFile', (selector, filePath) => {
    cy.get(selector).selectFile(filePath, { force: true });
});
