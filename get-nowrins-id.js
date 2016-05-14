var existingNowrins = JSON.parse(localStorage.getItem('nowrins')); // take existingNowrins from browser cache

$(".px60.hide-for-small-only").each(function (index, value) {
   var palkarId = $(value).html().replace(/\s/g, "");;
   if (palkarId.length == 4) {
       if (existingNowrins.indexOf(palkarId) == -1) {
           existingNowrins.push(palkarId);
       }
   }   
});

localStorage.setItem('nowrins', JSON.stringify(existingNowrins)); // update newly updated nowrins into browser cache
