class Player {
    
    static all = []
    
    constructor(id, name, nat, pos, team_id) {
        this.id = id
        this.name = name;
        this.nat = nat;
        this.pos = pos
        this.team_id = team_id
       Player.all.push(this)
       Object.defineProperty(this, "uninat", {
        get() {
            
            let firstThree = this.nat.slice(0, 3)
            return firstThree
     }
   });
    }

  
    renderPlayer() {
        let playerDiv = document.getElementById(`circle${this.pos}`)
       
       console.log(playerDiv)
        playerDiv.innerHTML = 
        `
       <p class="ptxt" data-id="${this.id}">${this.name}<br>
        ${this.uninat}<br>
        ${this.pos}</p>
        `
         if (currentTeamId == this.team_id) {
            playerDiv.addEventListener("click", deletePlayer)
         }
         else {
            playerDiv.removeEventListener("click", deletePlayer)
         }
        
    }
   
   
    // add form to page
    
    // send player data to database

    //return data from database

    //place in correct location
}
