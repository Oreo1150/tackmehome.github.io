function linkPage(index) {
    console.log(index);
    var link = [
        "./pages/pageDetail_1.html",
        "./pages/pageDetail_2.html",
        "./pages/pageDetail_3.html",
        "./pages/pageDetail_4.html",
        "./pages/pageDetail_5.html",
        "./pages/pageDetail_6.html",
        "./pages/pageDetail_7.html",
        "./pages/pageDetail_8.html",
        "./pages/pageDetail_9.html",
        "./pages/pageDetail_10.html",
        "./pages/pageDetail_11.html",
        "./pages/pageDetail_12.html",
    ];

    window.location.assign(link[index]);
}


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}