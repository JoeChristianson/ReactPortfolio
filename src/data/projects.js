const projects = []

class Project {
    constructor(name,description,image,tech,collaborators){
        this.name=name;
        this.description=description;
        this.image=image;
        this.tech=tech
        this.collaborators = collaborators;
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


const youFood = new Project("YouFood",
"this is it",
"youfoods.jpg",
["javascript","node","express","handlebars","mysql","sequelize","google-maps-api","heroku"],
[fongChang,bradyMavetz]
);

const movieGenerator = new Project("Movie Generator","this is it","movie-generator.png",["javascript","bootstrap","html"]);
new Project("JabberBlocky","this is it","jabberblocky.png",
["html","javascript","node","express","mysql","sequelize"]);
new Project("NHR Map","this is it","nhr-map.png",[
    "html","javascript","node","google-maps-api","puppeteer","heroku"
]);
new Project("Wiki-History-API","This is it, the thing","wiki-events-api.png",[
    "node","puppeteer","heroku"
]);
new Project("Coding Quiz","this is it","coding-quiz.png",[
    "html","javascript","css"
]);

export default projects