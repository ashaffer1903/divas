<template lang="pug">
  section
    article(style="padding-top: 125px")
      div.container
        div.columns.is-centered
          div.column.is-two-thirds
            div.box
              carousel(:perPage="1", paginationActiveColor="#00d1b2", :autoplay="true", :autoplayTimeout="6000", :paginationSize="20", style="min-height: 250px")
                slide
                  div.columns
                    div.column
                      figure.image
                        img(src="/static/thanksgiving.jpg")
                    div.column
                      p.is-size-5 Happy Thanksgiving! Don't forget to book early if you need your hair done for the Holiday's, we are booking up quick. Don't forget, we are closed on Friday, December 1st.
                slide
                  table(align="center")
                    tbody
                      tr
                        td.title.is-size-1 We
                        td(style="padding-left: 5px")
                          b-icon.is-danger.is-large(icon="heart")
                        td.title.is-size-1(style="padding-left: 5px") Hair
                  p.is-size-5.has-text-centered(style="padding-top: 30px") Welcome to Divas Hair Design! You have come to the right place for great hair.
                  p.is-size-5.has-text-centered(style="padding-top: 30px") Sit back. Relax. And let us take care of you.
                slide
                  div.columns.is-centered
                    div.column.is-half
                      table(align="center")
                        tbody
                          tr
                            td.is-size-4 Divas has a new Boutique
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
