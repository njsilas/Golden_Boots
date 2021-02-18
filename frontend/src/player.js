class Player {
    constructor(id, name, nat, pos, team_id) {
        this.name = name;
        this.id = id;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
    }
    renderTeam() {
        let teamDiv = document.getElementById('headerid')
        teamDiv.innerHTML += 
        `
        <ul>
        <h1>Team: ${this.name}</h1>
        </ul>
        `
    }

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
