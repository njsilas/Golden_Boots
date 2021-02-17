document.addEventListener("DOMContentLoaded", () =>{
    fetchTeams()
})
const BASE_URL = "http://127.0.0.1:3000"
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
function fetchPlayers (){
    fetch(`${BASE_URL}/players`)
    .then(resp => resp.json())
    .then(players => {
        for (const player of players){
            console.log(player)
            let p = new Player(player.id, name.id, nat.id, pos.id)
            p.renderPLayer();
        }
    })
}
// add players to database
// connect player to team
// add containers to overlap

}