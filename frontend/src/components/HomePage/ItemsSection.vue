<template>
  <section class="container">
    <div class="section-title">
      <h2 class="title">{{ title }}</h2>
      <a href="#">Ver Tudo</a>
    </div>

    <div class="items-container">
      <ItemCard
        isArtist
        artist="Black Sabbath"
        cover="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/06/Black-Sabbath.jpg"
      />
      <ItemCard
        isAlbum
        album="The way of all flesh"
        artist="Gojira"
        cover="https://img.discogs.com/Q4VEwdRA0xMu7L1aYRAOwEj3JhM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13068997-1551063165-2964.jpeg.jpg"
      />
      <ItemCard
        isAlbum
        album="Sobrevivendo no Inferno"
        artist="Racionais mc's"
        cover="https://i1.wp.com/periferiaemmovimento.com.br/wp-content/uploads/2018/11/05112018_-racionais-sobrevivendo-no-inferno.jpg?fit=1000%2C1000"
      />
      <ItemCard
        isArtist
        artist="Death"
        cover="https://roadie-metal.com/wp-content/uploads/2020/03/Death-band.jpg"
      />
      <ItemCard
        isAlbum
        album="Paranoid"
        artist="Black Sabbath"
        cover="https://images-shoptime.b2w.io/produtos/01/00/oferta/63180/4/63180492_1SZ.jpg"
      />
      <ItemCard
        isAlbum
        album="Lamb of God"
        artist="Lamb of God"
        cover="https://1.bp.blogspot.com/-QUl7BBQineU/XvtjmZ_x6zI/AAAAAAABczw/_GL98jwhGDsIFRvsbSlqZHBFvHHabdsbwCK4BGAsYHg/d/85024028_10158432850901435_6318370330956005376_o.jpg"
      />
    </div>
  </section>
</template>

<script>
import ItemCard from "./ItemCard";

export default {
  components: {
    ItemCard
  },

  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  height: 354px;
  margin: 0 32px;
}

.section-title {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
}

.section-title a {
  font-weight: 700;
  color: var(--secondary-light);
  font-size: 12px;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
}

.title {
  font-weight: 700;
  font-size: 22px;
  color: var(--primary-light);
}

.items-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
