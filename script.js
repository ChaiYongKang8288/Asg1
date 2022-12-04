const updateBusiness = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(business);
    console.info(update);
  };
  
  const business = {
    name: "Lebron's Billionaire Route",
    business1: "NBA Career",
    business2: "Investment",
    business3: "Companies",
    business4: "Endorsement",
    business5: "Real Estate",
    
  };
  
  const markup = (business) => {
    return `
    <div>
      <h3>${business.name}</h3>
      <ul>
        <li>Source 1: ${business.business1}</li>
        <li>Source 2: ${business.business2}</li>
        <li>Source 3: ${business.business3}</li>
        <li>Source 4: ${business.business4}</li>
        <li>Source 5: ${business.business5}</li>
       
      </ul>
    </div>
  `;
  };
  
  const main = document.createElement("main");
  main.innerHTML = markup(business);
  document.body.appendChild(main);
  