describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  })

  it('First Test', () => {
    expect(true).to.equal(true);
  })

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75').then(function($el) {
      expect($el).to.have.value(75)
    })
  })

  it('Volume changes when slider is moved', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input').then(function($el) {
      expect($el).to.have.value(33)
    })
  })

  it('Volume changes when slider is moved', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input').then(function($el) {
      expect($el).to.have.value(33)
    })
    
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33)
    })
  })
  
  it('image and sound source change when selecting party horn', () => {
    cy.get('#radio-party-horn').check().then(function($el) {
    })
    
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg')
    })
    
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')
    })
  })

  it('vol image changes when increasing volume', () => {
    cy.get('#volume-number').clear().type(0).then(function($el) {
      cy.get('#volume-image').then(function(img) {
	expect(img).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
      })
    })

    cy.get('#volume-number').clear().type(33).then(function($el) {
      cy.get('#volume-image').then(function(img) {
	expect(img).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
      })
    })

    cy.get('#volume-number').clear().type(66).then(function($el) {
      cy.get('#volume-image').then(function(img) {
	expect(img).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
      })
    })

    cy.get('#volume-number').clear().type(100).then(function($el) {
      cy.get('#volume-image').then(function(img) {
	expect(img).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
      })
    })
  })

  it('honk button is disable for empty or non num volume', () => {
    cy.get('#volume-number').clear().then(function($el) {
      cy.get('#honk-btn').then(function(btn) {
	expect(btn).to.have.attr('disabled', 'disabled')
      })
    })

    cy.get('#volume-number').clear().type('a').then(function($el) {
      cy.get('#honk-btn').then(function(btn) {
	expect(btn).to.have.attr('disabled', 'disabled')
      })
    })
  })

  it('get error for out of bounds input', () => {
    cy.get('#volume-number').clear().type('-5').then(function() { 
      cy.get('[type="submit"]').click()
      cy.get('#volume-number').then(($input) => {
	expect($input[0].validationMessage).to.eq('Value must be greater than or equal to 0.')
      }) 
    })

    cy.get('#volume-number').clear().type('101').then(function() { 
      cy.get('[type="submit"]').click()
      cy.get('#volume-number').then(($input) => {
	expect($input[0].validationMessage).to.eq('Value must be less than or equal to 100.')
      }) 
    })


  })
})
