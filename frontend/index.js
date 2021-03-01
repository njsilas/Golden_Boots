document.addEventListener("DOMContentLoaded", () =>{
 buildTeamPrompt()
 fetchTeams(); 
 buildPlayerForm();
 eventOnLoad();
 fetchPlayers ();
})
const BASE_URL = "http://127.0.0.1:3000"
const positions = ["GK", "RB", "LB", "RCB", "LCB", "RM-RW", "LM-LW", "LCM", "RCM", "LF-ST", "RF-ST"]

let currentTeamId;

function buildTeamPrompt () {
    let teamname;
    setTimeout(() => {
         teamname = prompt("Please Create a Team First:")
         teamSubmit(teamname)
    }, 500)
    
}
function buildPlayerForm() {
    let playersForm = document.getElementById("formspot")
     playersForm.innerHTML +=  
        `
        <div class="top">
        <h1 id= "teamname"> Golden Boots </h1>
        <form id="pform" >
          <input type="name" id="pname" name="name" placeholder="Name" value="">
          <select name="pos" id="ppos">
            <option value="GK">GK</option>
            <option value="RB">RB</option>
            <option value="RCB">RCB</option>
            <option value="LCB">LCB</option>
            <option value="LB">LB</option>
            <option value="LM-LW">LM-LW</option>
            <option value="LCM">LCM</option>
            <option value="RCM">RCM</option>
            <option value="RM-RW">RM-RW</option>
            <option value="LF-ST">LF-ST</option>
            <option value="RF-ST">RF-ST</option>
           
        <input type="nat" name="nat" id="pnat" placeholder="Nationality" value="">
          <input type="submit" id="playersubmit" value="Add player">
        </form>
       </div>
        `
       playersForm.addEventListener("submit", playerSubmit)

  }
  //function buildTeamForm () {
      
    
    //let teamForm = document.getElementById("formspot")
    //teamForm.innerHTML +=
   // `
   // <h1>Please Input Team Name</h1>
       // <form id="firstTeam">
        //<input type="name" id="teamname" name="name" placeholder="Team name goes here" value="">
       // <input type="submit" name="teamsubmit" id="teamsubmit" value="Create Team">
       // </form>
   // `
    //;
    
        //teamForm.addEventListener("submit", teamSubmit)
  //}
  function teamSubmit(teamname) {

      let team = {
          name: teamname
        
      }
      fetch(`${BASE_URL}/teams`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(team)
    })
    .then(resp => resp.json())
    .then(team => {
        let t = new Team(team.name, team.id)
       currentTeamId = t.id
       Team.all.push(t)
       t.renderTeam()
        t.renderDisplayAll()

})

  }
    function playerSubmit(event) {
        event.preventDefault() 
        let name = document.getElementById("pname")
        let pos = document.getElementById("ppos")
        let nat = document.getElementById("pnat")
        
        let player = {
            name: name.value,
            nat: nat.value,
            pos: pos.value,
            team_id: currentTeamId
        }
        fetch(`${BASE_URL}/players`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(player)
        })
        .then(resp => resp.json())
        .then(player => {
            let p = new Player(player.id, player.name, player.nat, player.pos, player.team_id)
           p.renderPlayer();
    })
    }
    function fetchTeams (){
    fetch(` ${BASE_URL}/teams`)
    .then(resp => resp.json())
    .then(teams => {
        for (const team of teams){
            
            let t = new Team(team.name, team.id)
           Team.all.push(t)
            t.renderDisplayAll();
           
        }
       
     })
    
   }
    function fetchPlayers (){
    fetch(` ${BASE_URL}/players`)
    .then(resp => resp.json())
    .then(players => {
        for (const player of players){
                
            let p = new Player(player.id, player.name, player.nat, player.pos, player.team_id)
            
        }
    
     })
    }
    function deletePlayer(event){
        
        let playerId = parseInt(event.target.dataset.id)
       
        if (window.confirm("Are you sure you want to delete them?")) {
            fetch(`${BASE_URL}/players/${playerId}`, {
                method: 'DELETE'
               
            })
        
            this.removeEventListener("click", deletePlayer)
           
            this.innerHTML = `${this.getAttribute("name")}`
        
        } 
        }
   function eventOnLoad() {
    let teamSelect = document.getElementById("teams")
    teamSelect.addEventListener('change', (e) => {
       getAllPlayersByTeam(e.target.value)
        
      });
   }
    function getAllPlayersByTeam(teamById) {
    
                squadWipe()
                for(player of Player.all) {
                if (player.team_id == currentTeamId && player.team_id == teamById){
                    player.renderPlayer()
                }
                else if (player.team_id == teamById){
                    player.guestRenderPlayer()
                }
            }
     
       
    } 
    function squadWipe(){
        for(position of positions) {
            let wipe = document.getElementById(`circle${position}`)
            wipe.innerText= `${position}`
        }
    }
