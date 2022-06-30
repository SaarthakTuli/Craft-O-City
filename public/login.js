// S3t count of house and stuff as zero in the start

let CountOfSmallHouse = 0.0;
localStorage.setItem("SmallHouse", CountOfSmallHouse);

let CountOFBigHouse = 0.0;
localStorage.setItem("BigHouse", CountOFBigHouse);

let CountOfHospital = 0.0;
localStorage.setItem("Hospital", CountOfHospital);

let CountOfFactory = 0.0;
localStorage.setItem("Factory", CountOfFactory);

let CountOfPort = 0.0;
localStorage.setItem("Port", CountOfFactory);

let CountOfFarm = 0.0;
localStorage.setItem("Farm", CountOfFarm);

let CountOfMarket = 0.0;
localStorage.setItem("Market", CountOfMarket);

let CurrentPeople = 0;
localStorage.setItem("CurrentPeople", CurrentPeople);

let PeopleGoal = 200;
localStorage.setItem("PeopleGoal", PeopleGoal);

let HungerKilled = 0;
localStorage.setItem("Hunger", HungerKilled);

let Earthquake_Crisis = false;
localStorage.setItem("Earthquake_Crisis", Earthquake_Crisis);

let Start = false;
localStorage.setItem("Start", Start);

let MainTime = 3600;
localStorage.setItem("TotalTime", MainTime);

// Login
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var firstTime = true;
localStorage.setItem("firstTime", JSON.stringify(firstTime));
var Status = localStorage.getItem("StatusOfUser");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ronak jain") {
        // SOLD TO RONAK FOR 46K
        let explorers_Wood = 300;
        let explorers_Brick = 400;
        let explorers_Metal = 300;
        let explorers_Money = 14000;
        localStorage.setItem("Money", explorers_Money);
        localStorage.setItem("Wood", explorers_Wood);
        localStorage.setItem("Brick", explorers_Brick);
        localStorage.setItem("Metal", explorers_Metal);
    } else if (username === "amigos") {
        // SOLD  to amigos for 42K
        let Aksh_Wood = 260;
        let Aksh_Brick = 360;
        let Aksh_Metal = 260;
        let Aksh_Money = 18000;
        localStorage.setItem("Money", Aksh_Money);
        localStorage.setItem("Wood", Aksh_Wood);
        localStorage.setItem("Brick", Aksh_Brick);
        localStorage.setItem("Metal", Aksh_Metal);
    } else if (username === "passion pavers") {
        // SOLD to passion pavers for 40 K
        let Ekam_Wood = 230;
        let Ekam_Brick = 330;
        let Ekam_Metal = 230;
        let Ekam_Money = 20000;
        localStorage.setItem("Money", Ekam_Money);
        localStorage.setItem("Wood", Ekam_Wood);
        localStorage.setItem("Brick", Ekam_Brick);
        localStorage.setItem("Metal", Ekam_Metal);
    } else if (username === "bob the builder") {
        // Sold to bob the builder for 40 K
        let Reet_Wood = 210;
        let Reet_Brick = 310;
        let Reet_Metal = 210;
        let Reet_Money = 20000;
        localStorage.setItem("Money", Reet_Money);
        localStorage.setItem("Wood", Reet_Wood);
        localStorage.setItem("Brick", Reet_Brick);
        localStorage.setItem("Metal", Reet_Metal);
    } else if (username === "prime") {
        // Sold to prime for 38K
        let Priyanka_Wood = 190;
        let Priyanka_Brick = 290;
        let Priyanka_Metal = 190;
        let Priyanka_Money = 22000;
        localStorage.setItem("Money", Priyanka_Money);
        localStorage.setItem("Wood", Priyanka_Wood);
        localStorage.setItem("Brick", Priyanka_Brick);
        localStorage.setItem("Metal", Priyanka_Metal);
    } else if (username === "sigmapreneurs") {
        // dols to sigmapreneurs for 37K
        let Anmol_Wood = 170;
        let Anmol_Brick = 270;
        let Anmol_Metal = 170;
        let Anmol_Money = 23000;
        localStorage.setItem("Money", Anmol_Money);
        localStorage.setItem("Wood", Anmol_Wood);
        localStorage.setItem("Brick", Anmol_Brick);
        localStorage.setItem("Metal", Anmol_Metal);
    } else if (username === "vishwas bhalla") {
        // Sold to vishwas bhalla for 60K
        let Gautam_Wood = 160;
        let Gautam_Brick = 260;
        let Gautam_Metal = 160;
        let Gautam_Money = 0;
        localStorage.setItem("Money", Gautam_Money);
        localStorage.setItem("Wood", Gautam_Wood);
        localStorage.setItem("Brick", Gautam_Brick);
        localStorage.setItem("Metal", Gautam_Metal);
    } else if (username === " -") {
        let Tanisha_Wood = 150;
        let Tanisha_Brick = 250;
        let Tanisha_Metal = 150;
        let Tanisha_Money = 60000;
        localStorage.setItem("Money", Tanisha_Money);
        localStorage.setItem("Wood", Tanisha_Wood);
        localStorage.setItem("Brick", Tanisha_Brick);
        localStorage.setItem("Metal", Tanisha_Metal);
    } else if (username === "-") {
        let Simar_Wood = 140;
        let Simar_Brick = 240;
        let Simar_Metal = 140;
        let Simar_Money = 60000;
        localStorage.setItem("Money", Simar_Money);
        localStorage.setItem("Wood", Simar_Wood);
        localStorage.setItem("Brick", Simar_Brick);
        localStorage.setItem("Metal", Simar_Metal);
    } else if (username === "-") {
        let Archit_Wood = 130;
        let Archit_Brick = 230;
        let Archit_Metal = 130;
        let Archit_Money = 60000;
        localStorage.setItem("Money", Archit_Money);
        localStorage.setItem("Wood", Archit_Wood);
        localStorage.setItem("Brick", Archit_Brick);
        localStorage.setItem("Metal", Archit_Metal);
    } else if (username === "-") {
        let Archit_Wood = 130;
        let Archit_Brick = 230;
        let Archit_Metal = 130;
        let Archit_Money = 60000;
        localStorage.setItem("Money", Archit_Money);
        localStorage.setItem("Wood", Archit_Wood);
        localStorage.setItem("Brick", Archit_Brick);
        localStorage.setItem("Metal", Archit_Metal);
    } else if (username === "-") {
        let Archit_Wood = 130;
        let Archit_Brick = 230;
        let Archit_Metal = 130;
        let Archit_Money = 60000;
        localStorage.setItem("Money", Archit_Money);
        localStorage.setItem("Wood", Archit_Wood);
        localStorage.setItem("Brick", Archit_Brick);
        localStorage.setItem("Metal", Archit_Metal);
    }

    if (
        // explorers, passion pavers, prime, superworkz,
        // bob the builder, dream_boat, divyadarsini s p, vishwas bhalla
        // gold, ronak jain, sigmapreneurs, prasuk jain
        username === "ronak jain" ||
        username === "amigos" ||
        username === "passion pavers" ||
        username === "bob the builder" ||
        username === "prime" ||
        username === "sigmapreneurs" ||
        username === "vishwas bhalla" ||
        username === "-" ||
        username === "-" ||
        username === "-" ||
        username === "-" ||
        username === "-"
    ) {
        console.log(username);
        if (password === "admin") {
            let Start = localStorage.getItem("Start");
            Start = true;
            localStorage.setItem("Start", Start);
            //Code to allow enter once.. add at the end
            // if (firstTime === true && (Status === true || Status === "null")) {
            alert("You have successfully logged in.");
            localStorage.setItem("username", JSON.stringify(username));
            window.location.href = "main.html";
            //} else {
            //     alert("You have submitted the game once");
            // }
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});