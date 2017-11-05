<template lang="pug">
  section
    nav.level
      p.level-item.has-text-centered
        router-link(to="/") Home
      p.level-item.has-text-centered
        router-link(to="/about") About
      p.level-item.has-text-centered.is-uppercase.is-size-2 Divas
        span.has-text-grey HD
      p.level-item.has-text-centered
        router-link(to="/services") Services
      p.level-item.has-text-centered
        router-link(to="/contact") Contact
    div(id="app")
      <!--img(src="./assets/logo.png")-->
      router-view
    div.footer(id="footer")
      div.container
        div.columns.is-centered
          div.column.is-one-third
            table(align="center")
              tbody
                tr
                  td
                    b-icon(icon="phone")
                  td(style="padding-left: 15px") (978) 466-5969
                tr
                  td
                    b-icon(icon="envelope-open-o")
                  td(style="padding-left: 15px") divas@divashd.com
          div.column.is-one-third
            table(align="center")
              tbody
                tr
                  td
                    a.has-text-info(href="https://www.facebook.com/DivasHD1" target="_blank")
                      b-icon(icon="facebook-square" size="is-medium")
                tr
                  td
                    b-icon(icon="twitter-square" size="is-medium")
                tr
                  td
                    a.has-text-primary(href="https://www.instagram.com/divas_hd/" target="_blank")
                      b-icon(icon="instagram" size="is-medium")
                tr
                  td
                    a.has-text-danger(href="https://www.pinterest.com/divashairdesign" target="_blank")
                      b-icon(icon="pinterest-square" size="is-medium")
          div.column.is-one-third
            table(align="center")
              tbody
                tr
                  td(style="text-align: center")
                    b-icon.has-text-danger(icon="map-pin" size="is-medium")
                tr
                  td(style="text-align: center") 797 Union Street
                tr
                  td(style="text-align: center") Leominster, Ma 01453


        div.content.has-text-centered

        div(style="padding-top: 15px")
          table(align="center")
            tbody
              tr
                td
                  i.fa.fa-copyright
                td(style="padding-left: 15px") 2017 | Divas Hair Design
</template>
<script>
  export default {
    name: 'app'
  }
</script>

<style lang="sass">
  @import "~bulma"
  @import "~buefy/src/scss/buefy"
  @import "../node_modules/font-awesome/css/font-awesome.min.css"

  .app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
</style>
