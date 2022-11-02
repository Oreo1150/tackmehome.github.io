function linkPage(index) {
    console.log(index);
    var link = [
        "./Pages/pageDetail_1.html",
        "./Pages/pageDetail_2.html",
        "./Pages/pageDetail_3.html",
        "./Pages/pageDetail_4.html",
        "./Pages/pageDetail_5.html",
        "./Pages/pageDetail_6.html",
        "./Pages/pageDetail_7.html",
        "./Pages/pageDetail_8.html",
        "./Pages/pageDetail_9.html",
        "./Pages/pageDetail_10.html",
        "./Pages/pageDetail_11.html",
        "./Pages/pageDetail_12.html",
    ];

    window.location.assign(link[index]);
}


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}