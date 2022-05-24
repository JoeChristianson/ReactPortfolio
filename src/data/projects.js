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
const ethanJohnson = new Collaborator("Ethan","Johnson","https://github.com/AmplifyRebel","")
const jacksonWilliams = new Collaborator("Jackson","Williams","https://github.com/jackbradwilliams","")

const youFood = new Project("YouFood",
"this",
"youfoods.jpg",
["javascript","node","express","handlebars","mysql","sequelize","google-maps-api","heroku"],
[fongChang,bradyMavetz],
"https://pantry-find.herokuapp.com/",
"https://github.com/JoeChristianson/Food_Pantry_Map",""
);

youFood.description = `For this application, we created an online website in which users can track, contribute to, and set up various food shelves. Immediately upon loading the website, a map is generated using google maps that centers on the users location. Various cherry markers pop up that show nearby food shelters that other users have created. Clicking a marker will display information about that particular food shelf like its name, address, and the supplies that it needs. Users can choose to register and create a username and password that are stored within the application's database. They can use this login information to create a new food shelter and request supplies. A new marker will then be generated for the address that they provided. For each food shelf created, the user that created it can edit and post new requests that are then updated on their marker information.`
youFood.future = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


const movieGenerator = new Project("Movie Generator","this is it","movie-generator.png",["javascript","bootstrap","html"],[sarahTurner,ethanJohnson,jacksonWilliams],"https://amplifyrebel.github.io/movie-generator/","https://github.com/AmplifyRebel/movie-generator","");
movieGenerator.description = `I developed this site along with three fellow classmates in University of Minnesota’s full-stack bootcamp for our first group project. The project was meant as an exercise in the use of third party APIs. We utilized Open Movie Database for movie details and an API created by _________ for the selection of a random movie. 

I worked with the API calls and wrote the majority of the Javascript. My teammates primarily worked on the html and styling. They employed Bulma for a CSS framework.

The Movie Generator allows the user to sift through random movies, look over their details and decide whether or not to add them to a watch list. The watch list itself can be filtered and sorted by various parameters. After watching the movie, the user can give it a star rating, adding it to its previously watched list.`


movieGenerator.future = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


const jabberBlocky = new Project("JabberBlocky","this is it","jabberblocky.png",
["html","javascript","node","express","mysql","sequelize"],[],"https://jabberblocky.herokuapp.com/","https://github.com/JoeChristianson/JabberBlocky","");
jabberBlocky.description = `JabberBlocky is a multi-user tech blog site for developers. The basic features of such a site, including registration, log in, posting, commenting, etc. are available for users.

Bcrypt, sequelize, express, dotenv and mysql were all employed in the project.
`
jabberBlocky.future = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const nhrMap = new Project("NHR Map","this is it","nhr-map.png",[
    "html","javascript","node","google-maps-api","puppeteer","heroku"
],[],"https://nhr-map.herokuapp.com/","https://github.com/JoeChristianson/NHR-MAP","");
nhrMap.future = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



const wikiHistoryAPI = new Project("Wiki-History-API","This is it, the thing","wiki-events-api.png",[
    "node","puppeteer","heroku"
],[],"https://wiki-events-api.herokuapp.com/","https://github.com/JoeChristianson/HistoryAPI","");
wikiHistoryAPI.future = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const codingQuiz = new Project("Coding Quiz","this is it","coding-quiz.png",[
    "html","javascript","css"
],[],"https://joechristianson.github.io/CodingQuiz/","https://github.com/JoeChristianson/CodingQuiz","");
codingQuiz.future = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default projects