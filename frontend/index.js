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
        t.renderTeam()
        

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
            let p = new Player(player.name, player.nat, player.pos, player.team_id)
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
             
                let p = new Player(player.name, player.pos, player.nat, player.id)
            
                p.renderPlayer();
        }
    
     })
    }
    function deletePlayer(){

        let playerId = parseInt(event.target.dataset.id)
        console.log(playerId)
        if (window.confirm("Are you sure you want to delete them?")) {
            fetch(`${BASE_URL}/players/${playerId}`, {
                method: 'DELETE'
             
            })
        
           console.log(this.location) 
        } 
        }
   
    function getlastTeam() {
       
        fetch(` ${BASE_URL}/teams`)
        .then(resp => resp.json())
        .then(teams => { 
           let t = teams[0]
           t.renderLastTeam();
      })

    } 
