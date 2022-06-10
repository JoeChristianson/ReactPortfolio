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

const inventoryPlus = new Project("Inventory Plus","","inventory-plus.png",[
    "javascript","node","express","react","mongoose","css","apollo","heroku"
],[bretBanger,aaronBelzer,carolynNgo],"https://inventoryplus.herokuapp.com/","https://github.com/Banger484/inventory-plus","")

inventoryPlus.description = "Inventory+ is your go to application for managing your inventory. With this application you will be able to easily add your enterprise, add employees,  add products, and track your inventories movement from purchase through order fulfillment to your customer and run detailed reports. This is a final project for the U of M full-stack bootcamp, which required a full implementation of the MERN stack. To log in to a dummy account: {email:Bob@aol.com, password:password1234}"

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


const movieGenerator = new Project("Movie Generator","this is it","movie-generator.png",["javascript","bootstrap","html"],[sarahTurner,ethanJohnson,jacksonWilliams],"https://amplifyrebel.github.io/movie-generator/","https://github.com/AmplifyRebel/movie-generator","");
movieGenerator.description = `I developed this site along with three fellow classmates in University of Minnesota’s full-stack bootcamp for our first group project. The project was meant as an exercise in the use of third party APIs. We utilized Open Movie Database for movie details and an API developed by Ketuman Vishwakarma ( https://github.com/k2maan) for the selection of a random movie. 

I worked with the API calls and wrote the majority of the Javascript. My teammates primarily worked on the html and styling. They employed Bulma for a CSS framework.

The Movie Generator allows the user to sift through random movies, look over their details and decide whether or not to add them to a watch list. The watch list itself can be filtered and sorted by various parameters. After watching the movie, the user can give it a star rating, adding it to its previously watched list.
`

movieGenerator.future = `The Random Movie API that we employed had a significant dataset, but a larger one would be needed. Thus, a new Random movie API should be made from scratch using a webscraper such as puppeteer or an existing dataset. 

Currently all data is being stored locally. A backend should be created with a database and user log so users can access their watch list across devices. 

Finally, there remain issues with design responsiveness, and some choices need to be made regarding the mobile experience.
`

const jabberBlocky = new Project("JabberBlocky","this is it","jabberblocky.png",
["html","javascript","node","express","mysql","sequelize"],[],"https://jabberblocky.herokuapp.com/","https://github.com/JoeChristianson/JabberBlocky","");
jabberBlocky.description = `This tech blog site was developed from scratch for a University of Minnesota Bootcamp assignment. It has user authentication, a minimalist user interface, and allows for CRUD operations on three different models. The user can register, log-in, add posts, view other user’s posts and comment on posts. `

jabberBlocky.future = `A new color scheme and sleeker templates will be added to the site, mimicking stereotypical text-editors familiar to developers. User’s will be able to follow and unfollow other users. Users will be able to alter their profile, adding a bio and links to github, linked in, etc.. Also, posts will be capable of being tagged for searches by other users. `

const nhrMap = new Project("NHR Map","this is it","nhr-map.png",[
    "html","javascript","node","google-maps-api","puppeteer","heroku"
],[],"https://nhr-map.herokuapp.com/","https://github.com/JoeChristianson/NHR-MAP","");

nhrMap.description = `This map was developed as a personal side project when I was first learning node. The user can search for National Historic Registry Sites by County and State. They populate on a google map along with a picture and a link to their wikipedia page and a link to directions. The data is scraped from Wikipedia pages for individual counties’ historic sites. `

nhrMap.future = `This was developed without the use of databases, express or any front-end frameworks, as I did not have any experience with them at the time. I plan to refactor the entire app and use a MERN stack. Additional features will be added, including the ability of users to save which sites they’ve been to.
`


const wikiHistoryAPI = new Project("Wiki-History-API","This is it, the thing","wiki-events-api.png",[
    "node","puppeteer","heroku"
],[],"https://wiki-events-api.herokuapp.com/","https://github.com/JoeChristianson/HistoryAPI","");

wikiHistoryAPI.description = `This API is for historical events by year. With year as a search parameter, API will return events, births and deaths within such year. Each item will also give other properties of the item such as event type or persons involved, along with links to the relevant wikipedia pages.`
wikiHistoryAPI.future = `A landing page needs to be added that gives documentation for the API. Further thought is needed on what purpose such an API would serve, so as to plan future development.
`

const codingQuiz = new Project("Coding Quiz","this is it","coding-quiz.png",[
    "html","javascript","css"
],[],"https://joechristianson.github.io/CodingQuiz/","https://github.com/JoeChristianson/CodingQuiz","");
codingQuiz.description = `This application is a hard-coded quiz application that offers a timed ten question long test on some web development concepts. The application uses html, css, and javascript, all vanilla and is purely front-end. It was an early activity for the University of Minnesota Full-Stack bootcamp and was developed from scratch.
`
codingQuiz.future = `With a few days work, this could be turned into a full-stack application where users can write their own custom quizzes, and store quiz-takers scores. 
`
export default projects