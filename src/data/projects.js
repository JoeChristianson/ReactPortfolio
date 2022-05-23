const projects = []

class Project {
    constructor(name,description,image){
        this.name=name;
        this.description=description;
        this.image=image;
        projects.push(this)
    }
}

new Project("YouFood","this is it","youfoods.jpg");
new Project("Movie Generator","this is it","movie-generator.png");
new Project("JabberBlocky","this is it","jabberblocky.png");
new Project("NHR Map","this is it","nhr-map.png");
new Project("Wiki-History-API","This is it, the thing","wiki-events-api.png");
new Project("Coding Quiz","this is it","coding-quiz.png");

export default projects