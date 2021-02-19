class Player {
    constructor(id, name, nat, pos, team_id) {
        this.name = name;
        this.id = id;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
    }
    renderPlayer() {
        let playerDiv = document.getElementById("table-body")
        playerDiv.innerHTML += 
        `
        <td>${this.name}</td>
        <td>${this.nat}</td>
        <td>${this.pos}</td>
        <td><button  class="delete-bttn" data-id=${this.id} onclick="deletePlayer()">Delete</button></td>
        `
    }
    

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
