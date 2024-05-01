/*for checklists part*/
function percentage(){
    var x = document.querySelectorAll('input[type="checkbox"]').length;
    var y = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var result = y/x * 100;
    document.getElementById("percent").textContent = result.toFixed(0) + "%";
}
/*for audio part*/
function audio_link(url){
    window.open(url,"_blank");
}