# Shopify Frontend Challenge
Made by [*Artem Gusev*](https://www.linkedin.com/in/gusev-artem/) as a *Shopify Frontend Challenge* Fall 2022

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

### LightHouse Report
![image](https://user-images.githubusercontent.com/56235052/169668275-abc2d3e0-8f7e-4dc3-b417-f7ff0cad4cb9.png)


### Error Handling
The application also has Error Handling. If the OpenAI is inaccessible or API key is incorrect, the app will alert about it. 

### Styling
For styling, the ```React-Bootstrap``` + ```Styled Components``` combination was used.  
That allowed to have a quick and adaptable UI development workflow with the customization of *Styled components* 

Saving on reload is implemented through browser ```Local storage``` and for instant UI updates without page reloading and data transfer, the ```React Context``` was used.
