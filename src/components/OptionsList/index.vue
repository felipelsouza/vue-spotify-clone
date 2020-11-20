<template>
  <div class="container">
    <img class="logo" src="../../assets/Logo.svg" alt="Logo" />
    <OptionButton text="Início" icon="home.svg" active />
    <OptionButton text="Buscar" icon="search.svg" />
    <OptionButton text="Sua Biblioteca" icon="library.svg" />

    <h3 class="playlists-title">Playlists</h3>
    <OptionButton text="Criar Playlist" icon="add.svg" playlistIcon />
    <OptionButton text="Músicas Curtidas" icon="heart.svg" playlistIcon />
  </div>
</template>

<script>
import OptionButton from "./OptionButton";

export default {
  components: {
    OptionButton,
  },
};
</script>

<style scoped lang="scss">
.container {
  grid-area: OL;
  display: flex;
  flex-direction: column;
  background: var(--primary-dark);
  padding: 8px;
}

.container::after {
  content: "";
  display: block;
  align-self: center;
  width: 180px;
  height: 1px;
  margin-top: 14px;
  background: var(--quaternary-dark);
}

.logo {
  align-self: flex-start;
  width: 130px;
  margin: 16px 16px 24px 16px;
}

.playlists-title {
  font-weight: 700;
  color: var(--secondary-light);
  font-size: 12px;
  text-transform: uppercase;
  margin: 18px 0 16px 18px;
  cursor: default;
}
</style>