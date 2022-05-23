const projects = []

class Project {
    constructor(name,description,image){
        this.name=name;
        this.description=description;
        this.image=image;
        projects.push(this)
    }
}

new Project("Untitled Project Three","this is it");
new Project("YouFood","this is it");
new Project("Movie Generator","this is it");
new Project("JabberBlocky","this is it");
new Project("NHR Map","this is it");
new Project("History Game","this is it");

export default projects