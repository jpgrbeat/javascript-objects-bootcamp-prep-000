var playlist = {"Ben Folds" : "Still Fighting It"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  
  return playlist;
}
function removeFromPlaylist(artist, song){
  
  delete playlist[artist]
  
  return playlist;
}