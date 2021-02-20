class Team {
    constructor(name, id) {
        this.name = name;
        this.id = id
    }
    // render team instance method
    renderTeam() {
        let teamDiv = document.getElementById('teamname')
       
        teamDiv.innerHTML =
       
        `
    Team: ${this.name}
       
        `
    }
    // add data about team
  
    //allow chaning of teams to seeded data
    renderLastTeam() {
        return this.id
    }
}