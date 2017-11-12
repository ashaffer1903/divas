<template lang="pug">
  section
    nav.level
      p.level-item.has-text-centered(v-on:click="updateActiveMenu('home')")
        router-link(to="/") Home
      p.level-item.has-text-centered(v-on:click="updateActiveMenu('about')")
        router-link(to="/about") About
      p.level-item.has-text-centered.is-uppercase.is-size-2 Divas
        span.has-text-grey HD
      p.level-item.has-text-centered(v-on:click="updateActiveMenu('services')")
        router-link(to="/services") Services
      p.level-item.has-text-centered(v-on:click="updateActiveMenu('contact')")
        router-link(to="/contact") Contact
    nav.level
      p.level-item(v-bind:class="isActive('home')")
      p.level-item(v-bind:class="isActive('about')")
      p.level-item(style="padding-right: 40px")
        span.title.is-size-4(style="padding-right: 5px") We
        span
          b-icon.is-danger.is-medium(icon="heart")
        span.title.is-size-4(style="padding-left: 5px") Hair
      p.level-item(v-bind:class="isActive('services')")
      p.level-item(v-bind:class="isActive('contact')")

    div(id="app")
      <!--img(src="./assets/logo.png")-->
      section.background
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
                  td(style="text-align: center") 151 Central Street
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
    name: 'app',
    data () {
      return {
        active: ''
      }
    },
    methods: {
      updateActiveMenu: function (tab) {
        this.active = tab
      },
      isActive: function (tab) {
        if (this.active === tab) {
          return 'active-menu'
        }
      }
    }
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

  .background
    background-image: url("/static/brick-img.jpg");
    min-height: 750px;

  .active-menu
    margin-bottom: 20px;
    border-bottom: 6px solid #00d1b2;
</style>
