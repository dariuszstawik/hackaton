// WERSJA KODU Z HACKATONU

// star="*";
// emptySpace="          ";

// for (let i=0; i<10; i++) {
//     console.log(emptySpace,star);
//     emptySpace=emptySpace.replace(" ", "");
//     star=star+"**";

// }

//     console.log("           @");
//     console.log("          ###");
//     console.log("         &&&&&");


// NOWA WERSJA KODU

let h=25;
let star="*";
let emptySpace="";

const emptySpacesAmount = function(height) {
    let space=" ";
    for (i=0; i<h; i++) {
        emptySpace+=space;
    }
}

const treeHead = function() {
    let emptySpaceHead = emptySpace;

    for (let i=0; i<h; i++) {
        console.log(emptySpaceHead,star);
        emptySpaceHead=emptySpaceHead.replace(" ", "");
        star=star+"**";
    }
}

const treeBottom = function() {
    console.log(emptySpace+"@@");
    console.log(emptySpace+"##");
    console.log(emptySpace+"&&");
}

emptySpacesAmount(h);
treeHead();
treeBottom();
