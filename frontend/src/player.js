class Player {
    constructor(name, nat, pos, team_id, id) {
        this.name = name;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
        this.id = id
    }
    renderPlayer() {
        let playerDiv = document.getElementById(`circle${this.pos}`)
        console.log(this.id)
       
        playerDiv.innerHTML = 
        `
       <p class="ptxt">${this.name}<br>
        ${this.nat}<br>
        ${this.pos}</p>
       
        `
        playerDiv.addEventListener("click",deletePlayer)
    }
    

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
