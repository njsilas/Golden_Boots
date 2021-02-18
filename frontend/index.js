document.addEventListener("DOMContentLoaded", () =>{
    buildForm()
    fetchTeams();
    
})
const BASE_URL = "http://127.0.0.1:3000"
function buildForm() {
    let playersForm = document.getElementById("formid")
        playersForm.innerHTML +=  
        `
        <form>
          <input type="name" name="name" placeholder="Name" value="">
          <input type="pos" name="pos" placeholder="Position" value="">
          <input type="nat" name="nat" placeholder="Nationality" value="">
          <input type="submit" id="playersubmit" value="Add player">
        </form>
        `
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

// add players to database
// connect player to team
// add containers to overlap

}