var playlist = {"Ben Folds" : "Still Fighting It"};

function updatePlaylist(obj, artist, song){
  obj[key] = song;
  
  return obj;
}
function removeFromPlaylist(artist, song){
  
  delete playlist[artist]
  
  return playlist;
}