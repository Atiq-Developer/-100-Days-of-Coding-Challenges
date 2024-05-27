/*-----------------------Question-40----------------------*/
function createAlbum(title: string, artist: string, year: number, genre?: string, tracks?: number) {
  let music_album = {
    title,
    artist,
    year,
    genre,
    tracks,
  };
  return music_album;
}

const album1 = createAlbum("Tajdar-e-Hram", "Atif Aslam", 2016, "Qawali", 1);
const album2 = createAlbum("Barh do johli", "Amjad Sabri", 1992);
const album3 = createAlbum("The Dark Side of the Moon","Pink Floyd",1973,"Progressive Rock");
console.log(album1.artist);
console.log(album2);
console.log(album3);
