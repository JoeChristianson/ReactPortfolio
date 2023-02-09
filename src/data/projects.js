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
const bretBanger = new Collaborator("Bret","Banger","https://github.com/Banger484","https://banger484.github.io/react-professional-portfolio/")
const aaronBelzer = new Collaborator("Aaron","Belzer","https://github.com/abelzer09",null)
const carolynNgo = new Collaborator("Carolyn","Ngo","https://github.com/carolynngo11","https://carolynngo11.github.io/my-react-portfolio/")


const puxhub = new Project("Pux Hub","","puxhub.png",[
    "typescript","node","express","react","mongoose","css","heroku"
],[],"https://www.puxhub.com/","https://github.com/JoeChristianson/puxhub","")

puxhub.description = "Single page website builder with quick setup and very intuitive editing. Pages are built using modular section rows that allow what you see is what you get editing for turning sections on and off, reordering them, changing out content,  and editing styles. Currently two templates are live, but others are currently underdevelopment. The app has some active users and can take subscription payments through Stripe."
puxhub.role = "I developed this individually. "
puxhub.future = "I will continue adding themes and additional components. I have started with some unit testing and am currently working towards full code coverage."


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