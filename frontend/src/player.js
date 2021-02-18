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
        let nameDiv = document.getElementById("pname")
        let natDiv = document.getElementById("pnat")
        let posDiv = document.getElementById("ppos")
        playerDiv.innerHTML += 
        `
       <td>${this.name}</td>
       
        <td>${this.nat}</td>
       
           <td>${this.pos}</td>
        `

    }

    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
