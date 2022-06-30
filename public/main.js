/* Main function addd wagera stuff*/

/*House
 increaser
 pro
 max*/
let WOOD = localStorage.getItem("Wood");
let BRICK = localStorage.getItem("Brick");
let METAL = localStorage.getItem("Metal");
let SmallHouseCount = localStorage.getItem("SmallHouse");
let BigHouseCount = localStorage.getItem("BigHouse");
let FactoryCount = localStorage.getItem("Factory");
let PortCount = localStorage.getItem("Port");
let HospitalCount = localStorage.getItem("Hospital");
let FarmCount = localStorage.getItem("Farm");

function IncrementHouse() {
    if (WOOD >= 15 && BRICK >= 20 && METAL >= 20) {
        for (let i = 0; i < 15; i++) {
            --WOOD;
        }

        for (let i = 0; i < 20; i++) {
            --BRICK;
        }

        for (let i = 0; i < 20; i++) {
            --METAL;
        }

        ++SmallHouseCount;
    } else {
        alert("Insufficient resources");
    }
} //  Chote waala House increaser

function IncrementBigHouse() {
    if (WOOD >= 25 && BRICK >= 30 && METAL >= 30) {
        for (let i = 0; i < 25; i++) {
            --WOOD;
        }

        for (let i = 0; i < 30; i++) {
            --BRICK;
        }

        for (let i = 0; i < 30; i++) {
            --METAL;
        }

        ++BigHouseCount;
    } else {
        alert("Insufficient resources");
    }
} //  Bada waala House increaser

/*Factory
 increaser
 pro
 max*/
function IncrementFactory() {
    if (WOOD >= 15 && BRICK >= 40 && METAL >= 35) {
        for (let i = 0; i < 15; i++) {
            --WOOD;
        }

        for (let i = 0; i < 40; i++) {
            --BRICK;
        }

        for (let i = 0; i < 35; i++) {
            --METAL;
        }

        ++FactoryCount;
    } else {
        alert("Insufficient resources");
    }
}

//Port

function IncrementPort() {
    if (WOOD >= 30 && BRICK >= 35 && METAL >= 50) {
        for (let i = 0; i < 30; i++) {
            --WOOD;
        }

        for (let i = 0; i < 35; i++) {
            --BRICK;
        }

        for (let i = 0; i < 50; i++) {
            --METAL;
        }

        ++PortCount;
    } else {
        alert("Insufficient resources");
    }
}

/*Hospital
 increaser
 pro
 max*/
function IncrementHospital() {
    if (WOOD >= 15 && BRICK >= 40 && METAL >= 35) {
        for (let i = 0; i < 15; i++) {
            --WOOD;
        }

        for (let i = 0; i < 40; i++) {
            --BRICK;
        }

        for (let i = 0; i < 35; i++) {
            --METAL;
        }
        ++HospitalCount;
    } else {
        alert("Indufficient resources!!");
    }
}

/*Farm
 increaser
 pro
 max*/
function IncrementFarm() {
    if (WOOD >= 15 && BRICK >= 40 && METAL >= 35) {
        for (let i = 0; i < 15; i++) {
            --WOOD;
        }

        for (let i = 0; i < 40; i++) {
            --BRICK;
        }

        for (let i = 0; i < 35; i++) {
            --METAL;
        }

        ++FarmCount;
    } else {
        alert("Indufficient resources!!");
    }
}

/* Market increment something */
function IncrementMarket() {}

//Update

document.getElementById("countHospital").innerText = HospitalCount;
document.getElementById("countHouse").innerText = SmallHouseCount;
document.getElementById("countFactory").innerText = FactoryCount;
document.getElementById("countPort").innerText = PortCount;
document.getElementById("countFarm").innerText = FarmCount;
document.getElementById("incrementMetal").innerText = METAL;
document.getElementById("incrementBrick").innerText = BRICK;
document.getElementById("incrementWood").innerText = WOOD;

localStorage.setItem("Farm", FarmCount);
localStorage.setItem("Factory", FactoryCount);
localStorage.setItem("Port", PortCount);
localStorage.setItem("Hospital", HospitalCount);
localStorage.setItem("Wood", WOOD);
localStorage.setItem("Brick", BRICK);
localStorage.setItem("Metal", METAL);
localStorage.setItem("SmallHouse", SmallHouseCount);

//Write this in main.html ka bottom of body waala script
/*
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();

});


document.onkeydown = function(e) {
    if (event.keycode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keycode == "I".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keycode == "J".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keycode == "U".charCodeAt(0)) {
        return false;
    }
}

*/