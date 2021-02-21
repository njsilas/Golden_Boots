class Player {
    constructor(id, name, nat, pos, team_id) {
        this.id = id
        this.name = name;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
       
    
    }
    renderPlayer() {
        let playerDiv = document.getElementById(`circle${this.pos}`)
        
       
        playerDiv.innerHTML = 
        `
       <p class="ptxt">${this.name}<br>
        ${this.nat}<br>
        ${this.pos}</p>
       
        `
        playerDiv.addEventListener("click", deletePlayer(this.id))
    }
    

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
