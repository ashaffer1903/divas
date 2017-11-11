<template lang="pug">
  section
    article.hero.is-medium.is-primary.is-bold(style="padding-top: 20px")
      div.hero-body
        div.container
          div.columns
            div.column.is-one-third
              table(align="center")
                tbody
                  tr
                    td(style="text-align: center")
                      b-icon.has-text-danger(icon="phone" size="is-large")
                  tr
                    td.is-size-5.contact-text (978) 466-5969
            div.column.is-one-third
              table(align="center")
                tbody
                  tr
                    td(style="text-align: center")
                      b-icon.has-text-danger(icon="map-pin" size="is-large")
                  tr
                    td.is-size-5.contact-text 151 Central Street
                  tr
                    td.is-size-5(style="text-align: center") Leominster, Ma 01453
            div.column.is-one-third
              table(align="center")
                tbody
                  tr
                    td(style="text-align: center")
                      b-icon.has-text-danger(icon="envelope-open-o" size="is-large")
                  tr
                    td.is-size-5.contact-text divas@divashd.com
    article
      div.container(style="margin-top: -50px; padding-bottom: 50px")
        table(align="center")
          tbody
            tr
              td
                gmap-map(:center="{lat:42.520766, lng:-71.759168}", :zoom="18" map-type-id="terrain" style="width: 1000px; height: 400px")
                  gmap-marker(:key="{infoText: 'Divas Hair Design'}", :position="{lat: 42.520700, lng: -71.758725}", :clickable="true")
</template>

<script>
  export default {
    name: 'Contact',
    data () {
      return {
        msg: 'Hi from the Contacts page.'
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

  .contact-text {
    text-align: center;
    padding-top: 15px;
  }
</style>
