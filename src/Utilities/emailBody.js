export const text = 'Thank you for subscribing to our email services! Below, you will find your roast review.'

export const body = (form) => {
  `<div>
    <h1> Hello ${form.roaster}! </h1>
    <p> 
      Attached, you will find our review of the sample you supplied us.
      We Want to thank you for the opportunity to work with you, and hope
      you find this useful.
      <li>Roast Name: ${form.name}</li>
      <li>Region: ${form.region}</li>
      <li>Acidity (1-6): ${form.acidity}</li>
      <li>Body (1-6): ${form.body}</li>
      <li>Sweetness (1-6): ${form.sweetness}</li>
      <li>Tactile (1-6): ${form.tactile}</li>
      <li>Overall Impression: ${form.overallImpression}</li>
      <li>Overall Score: ${form.overallScore}</li>
    </p>
  </div>`
}


createEmail = (form) => {
  
}
