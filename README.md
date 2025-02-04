# Commit regler 

En commit ska: 

Representera en sak, exempel: ”add user authentication” inte ”add user authentication and update UI styles” 

Vara beskrivande, man ska kunna se på en commit vad som gjorts/ändrats utan att behöva gå in i koden. 

Flera exempel på bra commits: 

“add margin to nav items to prevent them from overlapping the logo” inte “add margin” 

 

 

### Git flow 

1. Main ska bara innehålla färdig/fungerande kod. 

2. Skapa feature-branches utifrån develop 

git checkout -b feature/name	 

3. Gör en push på feature-branch till github och gör en pull request innan merge. 

git push -u origin feature/name 

4. Merge feature-branch till develop och ta sedan bort feature-branch. 

git branch -d feature/name (tar bort branch) 

5. Skapa en release-branch utifrån develop-branch innan develop ska till main. 

6. Push release-branch (t.ex på start-sida) till både main och tillbaka till develop. 

7. För att fixa buggar på main, skapa en hotfix-branch från main, push till både main och develop när den är klar. 

### Branchnames (examples) 

Branchnamn ska också vara beskrivande: 

Feature – feature/add-user-autentication 

Hotfix – hotfix/database-connection-error 

Release – release/v1.2.0 

### Versionsnummer 

Använd tag i gitHub för att ge main ett versionsnummer 

När den grundläggande strukturen på webbsidan är klar, ge main ett första versionsnummer: v0.0.1 

När sidan får mer funktionalitet, v0.1.0 

När sidan är klar, v1.0.0 

### Definition of done 

* Kod ska ha god namnstandard 

* Engelska 

* Beskrivande variabelnamn 

* camelCase, förutom på klasser som börjar med stor bokstav 

* Enkla commits, hellre många mindre och meningsfulla än en stor commit 

* Gör en push på din branch till gitHub  

* Gör en pull request 

* Gör en merge när koden är godkänd 

* Ta bort din branch efter en merge 
