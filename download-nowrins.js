var palkarNowrins = JSON.parse(localStorage.getItem('nowrins')); // take existingNowrins from browser cache
function downloadImages(id) {
    var url = "https://dl.dropboxusercontent.com/u/151176567/original/" + id + "_profile_pic";
    window.open(url);
}

    
for (var i=0; i<palkarNowrins.length; i++) {    
    downloadImages(palkarNowrins[i]);
}
