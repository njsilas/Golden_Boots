# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#Team.create([{name: "Flying Dutchmen", id: 3}, {name: "Dutch National Team", id:4}, {name: "1998 TOTY", id: 5}])

#Player.create(team_id: 4, name: "Robert Van Percy", pos: "ST", nat: "Dutch")
Player.Create([{team_id: 1, name: "Yashin", pos: "GK", nat:"RUS"}, {team_id: 1, name: "Lahm", pos: "RB", nat: "GER"}, {team_id: 1, name: "Beckenbauer", pos: "RCB", nat: "GER"}, {team_id: 1, name: "Maldini", pos: "LCB", nat: "ITA"}, 
    {team_id: 1, name: "Carlos", pos: "LB", nat: "BRA"}, {team_id: 1, name: "Iniesta", pos: "LM-LW", nat: "ESP"}, {team_id: 1, name: "Matthaus", pos: "LCM", nat: "GER"}, {team_id: 1, name: "Zidane", pos: "RCM", nat: "FRA"}, 
    {team_id: 2, name: "Buffon", pos: "GK", nat: "ITA"}, {team_id: 2, name: "Cafu", pos: "RB", nat: "BRA"}, {team_id: 2, name: "Puyol", pos: "RCB", nat: "ESP"}, 
    {team_id: 2, name: "Pepe", pos: "LCB", nat: "POR"}, {team_id: 2, name: "Carlos", pos: "LB", nat: "BRA"}, {team_id: 2, name: "Iniesta", pos: "LM-LW", nat: "ESP"}, {team_id: 2, name: "Pirlo", pos: "LCM", nat: "ITA"}, 
    {team_id: 2, name: "Zidane", pos: "RCM", nat: "ITA"}, {team_id: 2, name: "Messi", pos: "RM-RW", nat: "ARG"}, {team_id: 2, name: "Ronaldo", pos: "RF-ST", nat: "BRA"}, {team_id: 2, name: "Ronaldo", pos: "LF-ST", nat: "POR"}, 
    {team_id: 3, name: "Buffon", pos: "GK", nat: "ITA"}, {team_id: 3, name: "Lahm", pos: "RB", nat: "GER"}, {team_id: 3, name: "Cannavaro", pos: "RCB", nat: "ITA"}, 
    {team_id: 3, name: "Maldini", pos: "LCB", nat: "ITA"}, {team_id: 3, name: "Marcelo", pos: "LB", nat: "BRA"}, {team_id: 3, name: "Zidane", pos: "LM-LW", nat: "FRA"}, {team_id: 3, name: "Makalele", pos: "LCM", nat: "FRA"}, 
    {team_id: 3, name: "Scholes", pos: "RCM", nat: "ENG"}, {team_id: 3, name: "Messi", pos: "RM-RW", nat: "ARG"}, {team_id: 3, name: "Ronaldo", pos: "RF-ST", nat: "BRA"}, {team_id: 3, name: "Ronaldo", pos: "LF-ST", nat: "POR"}, 
    {team_id: 4, name: "Buffon", pos: "GK", nat: "ITA"}, {team_id: 4, name: "Lahm", pos: "RB", nat: "GER"}, {team_id: 4, name: "Ramos", pos: "RCB", nat: "ESP"}, 
    {team_id: 4, name: "Cannavaro", pos: "RCB", nat: "ITA"}, {team_id: 4, name: "Carlos", pos: "LB", nat: "BRA"}, {team_id: 4, name: "Ronaldinho", pos: "LM-LW", nat: "BRA"}, {team_id: 4, name: "Xavi", pos: "LCM", nat: "ESP"}, 
    {team_id: 4, name: "Gerrard", pos: "RCM", nat: "ENG"}, {team_id: 4, name: "Ronaldo", pos: "RM-RW", nat: "POR"}, {team_id: 4, name: "Ronaldo", pos: "RF-ST", nat: "BRA"}, {team_id: 4, name: "Lewendowski", pos: "LF-ST", nat: "POL"}, 
    {team_id: 5, name: "Buffon", pos: "GK", nat: "ITA"}, {team_id: 5, name: "Zanetti", pos: "RB", nat: "ARG"}, {team_id: 5, name: "Nesta", pos: "RCB", nat: "ITA"}, 
    {team_id: 5, name: "Maldini", pos: "LCB", nat: "ITA"}, {team_id: 5, name: "Alba", pos: "LB", nat: "ESP"}, {team_id: 5, name: "Ronaldo", pos: "LM-LW", nat: "POR"}, {team_id: 5, name: "Pirlo", pos: "LCM", nat: "ITA"}, 
    {team_id: 5, name: "Makelele", pos: "RCM", nat: "FRA"}, {team_id: 5, name: "Messi", pos: "RM-RW", nat: "ARG"}, {team_id: 5, name: "Zidane", pos: "RF-ST", nat: "FRA"}, {team_id: 5, name: "Ronaldo", pos: "LF-ST", nat: "BRA"}, 
    {team_id: 6, name: "Neuer", pos: "GK", nat: "GER"}, {team_id: 6, name: "Cafu", pos: "RB", nat: "BRA"}, {team_id: 6, name: "Ramos", pos: "RCB", nat: "ESP"}, 
    {team_id: 6, name: "Maldini", pos: "LCB", nat: "ITA"}, {team_id: 6, name: "Marcelo", pos: "LB", nat: "BRA"}, {team_id: 6, name: "De Bruyne", pos: "LM-LW", nat: "BLG"}, {team_id: 6, name: "Lampard", pos: "LCM", nat: "ENG"}, 
    {team_id: 6, name: "Modric", pos: "RCM", nat: "CRO"}, {team_id: 6, name: "Messi", pos: "RM-RW", nat: "ARG"}, {team_id: 6, name: "Ronaldo", pos: "RF-ST", nat: "POR"}, {team_id: 6, name: "Ronaldo", pos: "LF-ST", nat: "BRA"}, 
    {team_id: 1, name: "Cruyff", pos: "RM-RW", nat: "NED"}, {team_id: 1, name: "Pele", pos: "RF-ST", nat: "BRA"}, {team_id: 1, name: "Maradona", pos: "LF-ST", nat: "ARG"}])
    