class Player {
    constructor(id, name, nat, pos, team_id) {
        this.name = name;
        this.id = id;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
    }
    renderPlayer() {
        let playerDiv = document.getElementById("circle2")
        playerDiv.innerHTML += 
        `
       <h2>${this.name}</h2>
        <h4>${this.nat}</h4>       
        <h4>${this.pos}<h4>
        <button  class="delete-bttn" data-id=${this.id} onclick="deletePlayer()">Delete</button>
        `
    }
   

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
