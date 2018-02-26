export const text = (form) => {
  return (
    `
      Hello ${form.roaster}! 
      Attached, you will find our review of the sample you supplied us. We Want to thank you for the opportunity to work with you, and hope you find this useful. 
      Roast Name: ${form.name} 
      Region: ${form.region} 
      Acidity (1-6): ${form.acidity} 
      Body (1-6): ${form.body} 
      Sweetness (1-6): ${form.sweetness} 
      Tactile (1-6): ${form.tactile} 
      Overall Impression: ${form.overallImpression} 
      Overall Score: ${form.overallScore}`
  )
}

export const body = (form) => {
  return (
    `<div>
      <h1> Hello ${form.roaster}! </h1>
      <p> 
        Attached, you will find our review of the sample you supplied us.
        We Want to thank you for the opportunity to work with you, and hope
        you find this useful.
        <ul>
          <li>Roast Name: ${form.name}</li>
          <li>Region: ${form.region}</li>
          <li>Acidity (1-6): ${form.acidity}</li>
          <li>Body (1-6): ${form.body}</li>
          <li>Sweetness (1-6): ${form.sweetness}</li>
          <li>Tactile (1-6): ${form.tactile}</li>
          <li>Overall Impression: ${form.overallImpression}</li>
          <li>Overall Score: ${form.overallScore}</li>
        </ul>
      </p>
    </div>`
  )
}


export const createEmail = (form) => {
  const emailBody = body(form);
  const emailText = text(form);
  const msg = {
    to: form.email,
    from: 'elle@amethystcoffee.co',
    subject: 'Coffee Review',
    text: emailText,
    html: emailBody
  };
  return msg
}
