document.addEventListener("DOMContentLoaded", () =>{
  buildTeamPrompt()
  buildPlayerForm()
})
const BASE_URL = "http://127.0.0.1:3000"
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
        <h1 id= "teamname"> name goes here </h1>
        <form id="pform" >
          <input type="name" id="pname" name="name" placeholder="Name" value="">
          <input type="pos" name="pos"id="ppos" placeholder="Position" value="">
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
        console.log(currentTeamId)
        t.renderTeam()
        

})

  }
    function playerSubmit() {
        event.preventDefault() 
        let name = document.getElementById("pname")
        let pos = document.getElementById("ppos")
        let nat = document.getElementById("pnat")
        
        let player = {
            name: name.value,
            pos: pos.value,
            nat: nat.value,
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
            let p = new Player(player.team_id, player.name, player.pos, player.nat)
           p.renderPlayer();
    })
    }
    function fetchTeams (){
    fetch(` ${BASE_URL}/teams`)
    .then(resp => resp.json())
    .then(teams => {
        for (const team of teams){
            console.log(team)
            let t = new Team(team.id, team.name)
           t.renderTeam();
        }

     })
   }
    function fetchPlayers (){
    fetch(` ${BASE_URL}/players`)
    .then(resp => resp.json())
    .then(players => {
        for (const player of players){
             console.log(player)
                let p = new Player(player.id, player.name, player.pos, player.nat)
            p.renderPlayer();
        }
    
     })
    }
    function deletePlayer(){

        let playerId = parseInt(event.target.dataset.id)
    
        fetch(`${BASE_URL}/players/${playerId}`, {
            method: 'DELETE'
        })
    
        this.location.reload()
    }
    function getlastTeam() {
        fetch(` ${BASE_URL}/teams`)
        .then(resp => resp.json())
        .then(teams => { 
           let t = teams[0]
           t.renderLastTeam();
      })

    } 
