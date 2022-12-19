const projects = []

class Project {
    constructor(name,description,image,tech,collaborators,live,code,future){
        this.name=name;
        this.description=description;
        this.image=image;
        this.tech=tech
        this.collaborators = collaborators;
        this.live = live;
        this.code = code;
        this.future = future
        projects.push(this)
    }
}

class Collaborator {
    constructor(first,last,github,portfolio){
        this.first=first;
        this.last=last;
        this.github=github;
        this.portfolio=portfolio;
    }
}

const fongChang = new Collaborator("Fong","Chang","https://github.com/fchang1720","https://fchang1720.github.io/My-portfolio/")
const bradyMavetz = new Collaborator("Brady","Mavetz","https://github.com/BMavetz","https://github.com/BMavetz")
const sarahTurner = new Collaborator("Sarah","Turner","https://github.com/smturner","https://smturner.github.io/portfolio/")
const ethanJohnson = new Collaborator("Ethan","Johnson","https://github.com/AmplifyRebel",null)
const jacksonWilliams = new Collaborator("Jackson","Williams","https://github.com/jackbradwilliams",null)
const bretBanger = new Collaborator("Bret","Banger","https://github.com/Banger484","https://banger484.github.io/react-professional-portfolio/")
const aaronBelzer = new Collaborator("Aaron","Belzer","https://github.com/abelzer09",null)
const carolynNgo = new Collaborator("Carolyn","Ngo","https://github.com/carolynngo11","https://carolynngo11.github.io/my-react-portfolio/")


const micStan = new Project("Mic Stan","","micstan.png",[
    "typescript","node","express","react","mongoose","css","heroku"
],[],"https://inventoryplus.herokuapp.com/","https://github.com/JoeChristianson/MicStan","")

micStan.description = "CMS developed primarily for performers with quick setup and very intuitive editing. The site currently has some active users"
micStan.role = "I developed this individually. "
micStan.future = "I will continue adding themes and additional components. I have started with some unit testing and am currently working towards full code coverage."



const inventoryPlus = new Project("Inventory+","","inventory-plus.png",[
    "javascript","node","express","react","mongoose","css","apollo","heroku"
],[bretBanger,aaronBelzer,carolynNgo],"https://www.micstan.com/","https://github.com/Banger484/inventory-plus","")

inventoryPlus.description = "Inventory+ is your go to application for managing your inventory. With this application you will be able to easily add your enterprise, add employees,  add products, and track your inventories movement from purchase through order fulfillment to your customer and run detailed reports. This is a final project for the U of M full-stack bootcamp, which required a full implementation of the MERN stack. To log in to a dummy account: {email:eRandolf@supply-town.com, password:RedNose12}"
inventoryPlus.role = "On this project I created the models, data analysis, most GraphQL queries and mutations, charts, uploading photos to AWS, user authentication, theming, some react components. "
inventoryPlus.future = "There is a lot of additional functionality to add, including, but not limited to: search fields for product/order guides, more form validation for user signup and adding new products, expanding on reporting, incorporating financials and financial reporting, styling/sizing for smaller devices, Email reports and product journey updates from purchase order to fulfillment."

const youFoods = new Project("YouFoods",
"this",
"youfoods.jpg",
["javascript","node","express","handlebars","mysql","sequelize","google-maps-api","heroku"],
[fongChang,bradyMavetz],
"https://pantry-find.herokuapp.com/",
"https://github.com/JoeChristianson/Food_Pantry_Map",""
);

youFoods.description = `I developed this web app along with two fellow University of Minnesota bootcamp students for our first full-stack group project. The concept came from a brief experience volunteering with a food shelf and recalling there not being a system for various food shelves to post what supplies they are in need of on a central site. You Foods meets this need. Food shelves can register their locations and post and delete requests for various items. These food shelves appear on a map on the landing page so that donors can find locations to drop off specific items. The results on the map can also be filtered by item. `
youFoods.future = "The next stage involves reaching out to food shelves to see if this is a service that they would find useful. If so, we will be looking for feedback on design and suggestions for additional features."
youFoods.role = "I created the initial configuration, database models, queries, and mutations, controllers, and sidebar. I also was the project manager."

const pebbo = new Project("Pebbo",null,"pebbo.png",["node","react","express","mongoose","apollo","heroku"],[],"https://pebbo.herokuapp.com/","https://github.com/JoeChristianson/Pebbo",null)

pebbo.description = "This is a positive psychology app that allows the user to test various habits' effects on aspects of their well-being. It also includes a queue and task module on its dashboard. It includes an extensive tutorial as well which goes through the majority of its features. I have been using it daily for almost the past year, but it has evolved signficantely month to month."

pebbo.future = "My plan is to put this out for beta testing amongst friends and family relatively soon."

const stripeGoose = new Project("Stripegoose",null,"stripegoose.png",[
    "mongoose","node","stripe","npm","typescript"
],[],"https://joechristianson.github.io/CodingQuiz/","https://github.com/JoeChristianson/CodingQuiz","");
stripeGoose.description = `
    This npm package I put together for an internship. It handles stripe actions using a customerId value in a mongoose document's field. It encapsulates a lot of the stripe logic in an object's methods, which just requires a stripeId and model to instantiate. The package is written in typescript, and uses strong typing throughout
`

stripeGoose.future = `I plan to continue to add more methods month to month and integrate other ORMs.
`

// const nhrMap = new Project("NHR Map","this is it","nhr-map.png",[
//     "html","javascript","node","google-maps-api","puppeteer","heroku"
// ],[],"https://nhr-map.herokuapp.com/","https://github.com/JoeChristianson/NHR-MAP","");

// nhrMap.description = `This map was developed as a personal side project when I was first learning node. The user can search for National Historic Registry Sites by County and State. They populate on a google map along with a picture and a link to their wikipedia page and a link to directions. The data is scraped from Wikipedia pages for individual counties’ historic sites `

// nhrMap.future = `This was developed without the use of databases, express or any front-end frameworks, as I did not have any experience with them at the time. I plan to refactor the entire app and use a MERN stack. Additional features will be added, including the ability of users to save which sites they’ve been to.
// `
export default projects