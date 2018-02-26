import { text, body, createEmail } from './emailBody.js';

describe('emailBody', () => {
  let form;
  let expectedText;
  let expectedBody;
  let expectedMessage;

  beforeAll(() => {
    form = {
      roaster:'Corvus',
      name:'San Sebastian',
      region:'Panama',
      acidity:'5',
      body:'4',
      sweetness:'5',
      tactile:'3',
      overallImpression:'tasted great',
      overallScore:'5 ',
      email: 'dom@corvus.com'
    }

    expectedText = 
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

    expectedBody =
      `<div>
      <h1> Hello Corvus! </h1>
      <p> 
        Attached, you will find our review of the sample you supplied us.
        We Want to thank you for the opportunity to work with you, and hope
        you find this useful.
        <ul>
          <li>Roast Name: San Sebastian</li>
          <li>Region: Panama</li>
          <li>Acidity (1-6): 5</li>
          <li>Body (1-6): 4</li>
          <li>Sweetness (1-6): 5</li>
          <li>Tactile (1-6): 3</li>
          <li>Overall Impression: tasted great</li>
          <li>Overall Score: 5 </li>
        </ul>
      </p>
    </div>` 
  })



  describe('text', () => {
    it('should return text from the form passed to it', () => {
      expect(text(form)).toEqual(expectedText);
    })
  })

  describe('form', () => {
    it('should return html from the form passed to it', () => {
      expect(body(form)).toEqual(expectedBody)
    })
  })

  describe('createEmail', () => {
    it('should return an object with text and html', () => {

    expectedMessage = {
      to: 'dom@corvus.com',
      from: 'elle@amethystcoffee.co',
      subject: 'Coffee Review',
      text: expectedText,
      html: expectedBody
  }
      expect(createEmail(form)).toEqual(expectedMessage)
    })
  })
 }) 
