<template>
  <div id="grid"></div>
</template>

<script></script>

<style scoped>
#grid {
    display: grid;
    height: 100vh;

    grid-template-columns: 230px auto;
    grid-template-rows: 350px auto 115px;

    /*  OL = Options list
        HP = Home Page
        PL = PlayLists
        MP = Music Player
    */
    grid-template-areas: 
        "OL HP"
        "PL HP"
        "MP MP" 
    ;
}
</style>