class Player {
    constructor(id, name, nat, pos, team_id) {
        this.name = name;
        this.id = id;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
    }
    renderPlayer() {
        let playerDiv = document.getElementById(`circle${this.pos}`)
        playerDiv.innerHTML += 
        `
        ${this.name}
        ${this.nat}
        ${this.pos}
       
        `
    }
    

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
