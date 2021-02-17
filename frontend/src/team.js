class Team {
    constructor(id, name) {
        this.name = name;
        this.id = id
    }
    // render team instance method
    renderTeam() {
        let teamDiv = document.getElementById('headerid')
        teamDiv.innerHTML += 
        `
        <ul>
        <h1>Team: ${this.name}</h1>
        </ul>
        `
    }
}