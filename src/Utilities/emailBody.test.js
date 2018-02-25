import { text, body, createEmail } from './emailBody.js';

describe('emailBody', () => {
  let form;
  let expectedText;
  beforeEach = () => {

  }
  describe('text', () => {
    it('should return text from the form passed to it', () => {
    const form = {
      roaster:'Corvus',
      name:'San Sebastian',
      region:'Panama',
      acidity:'5',
      body:'4',
      sweetness:'5',
      tactile:'3',
      overallImpression:'tasted great',
      overallScore:'5 '
    }

    const expectedText = 
      `
      Hello Corvus! 
      Attached, you will find our review of the sample you supplied us. We Want to thank you for the opportunity to work with you, and hope you find this useful. 
      Roast Name: San Sebastian 
      Region: Panama 
      Acidity (1-6): 5 
      Body (1-6): 4 
      Sweetness (1-6): 5 
      Tactile (1-6): 3 
      Overall Impression: tasted great 
      Overall Score: 5 `
      expect(text(form)).toEqual(expectedText);
    })
  })

  describe('form', () => {
    it('should return html from the form passed to it', () => {

    })
  })

  describe('createEmail', () => {
    it('should return an object with text and html', () => {

    })
  })
})