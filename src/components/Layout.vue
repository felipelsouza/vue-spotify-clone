<template>
  <div id="grid">
      <OptionsList />
      <AlbumCover cover="https://images-na.ssl-images-amazon.com/images/I/71PgZkUb-eL._AC_SX679_.jpg" />
  </div>
</template>

<script>
import OptionsList from './OptionsList';
import AlbumCover from './AlbumCover';

export default {
    components: {
        OptionsList,
        AlbumCover
    }
}
</script>

<style scoped>
#grid {
    display: grid;
    height: 100vh;

    grid-template-columns: 232px auto;
    grid-template-rows: 360px auto 115px;

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