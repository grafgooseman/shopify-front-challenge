# Shopify Frontend Challenge
Made by [*Artem Gusev*](https://www.linkedin.com/in/gusev-artem/). Specially for [**Shopify Internship program**](https://internships.shopify.com/?utm_source=Shopify-careers&utm_medium=early-talent-page&utm_campaign=general) Fall 2022

#### Website link: https://shopify-front-challenge.pages.dev


## Additional Info
This application is made using React.
Out of additional challenges I did:
* Saving data on page reload
* Giving the possibility to users to choose the AI engine

### Semantics
Big thought was given to semantics and accessibility.  
All headings are ```<h1>``` or ```<h3>``` where needed, buttons are actually ```<button>``` elements and text is located in ```<p>``` tags
In addition, clicking ```Enter``` will also submit the AI request.

### Error Handling

The application also has Error Handling. If the OpenAI is inaccessible or API key is incorrect, the app will alert about it. 

### Styling
For styling, the React-Bootstrap + Styled Components combination was used.  
That allowed to have a quick and adaptable UI development workflow with the customization of Styled components 


AI engine choices are hard coded in the final version. Even though there was a special infrastructure that sent requests to the openAI API asking what engines are available, it resulted in a wall of specialized engines with just slight variations. That's why I opted on using a hard-wired solution.

Saving on reload is implemented throw browser Local storage and for instant UI updates without page reloading and data transfer, the React Context was used.

## Conclusion
I really hope that I could be useful to the Shopify team and the knowledge I got from college and my personal projects showed here in the best possible light.
Even though my code might not be perfect, I would really like to hear how can it be refactored and improved.

I am glad for the opportunity you are giving to all of us,  
Looking forward to hearing from you soon🙂
