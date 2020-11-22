<template>
  <div id="grid">
      <OptionsList />
      <AlbumCover cover="https://images-na.ssl-images-amazon.com/images/I/71PgZkUb-eL._AC_SX679_.jpg" />
      <MusicPlayer musicName="Flying Whales" artist="Gojira" />
      <HomePage />
  </div>
</template>

<script>
import OptionsList from './OptionsList';
import AlbumCover from './AlbumCover';
import MusicPlayer from './MusicPlayer';
import HomePage from './HomePage';

export default {
    components: {
        OptionsList,
        AlbumCover,
        MusicPlayer,
        HomePage
    }
}
</script>

<style scoped>
#grid {
    display: grid;
    height: 100vh;

    grid-template-columns: 232px auto;
    grid-template-rows: 340px auto 110px;

    /*  OL = Options list
        HP = Home Page
        AC = Album Cover
        MP = Music Player
    */
    grid-template-areas: 
        "OL HP"
        "AC HP"
        "MP MP" 
    ;
}
</style>