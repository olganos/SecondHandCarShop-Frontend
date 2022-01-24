# SecondHandCarShop-Frontend

This is a code challenge for Cognizant and this project is a frontend for https://github.com/olganos/SecondHandCarShop-Api repository.

These two repositories are parts of one Visual Studio 2022 Preview 3 solution.

To run:
1. You should put frontend part under frontend folder inside the solution
2. Restore packages for all .Net projects and do npm i for frontend
3. Have installed PostgresSQL 13.0 or higher 
4. Check connection string in Backend/appsettings.json
5. To init DB
  a) Set Backend as a startup project
  b) open nuget console and select DAL as default project
  b) run command "Update-Database createDB". It will create DB and populate tables accordingly createDB in Migration folder
6. Right click on Solution and select Set Starup Progects
7. Check multple and select Backend and fronted.
8. Click Start button
