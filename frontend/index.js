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
}