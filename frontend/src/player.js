class Player {
    
    static all = []
    
    constructor(id, name, nat, pos, team_id) {
        this.id = id
        this.name = name;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
       Team.all.push(this)
    
    }
    renderPlayer() {
        let playerDiv = document.getElementById(`circle${this.pos}`)
       
       console.log(playerDiv)
        playerDiv.innerHTML = 
        `
     
        
       <p class="ptxt" data-id="${this.id}">${this.name}<br>
        ${this.nat}<br>
        ${this.pos}</p>
       
        `
         playerDiv.addEventListener("click", deletePlayer)
        
    }
      
    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
