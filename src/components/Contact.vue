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
                    td.is-size-5(style="text-align: center; padding-top: 15px") (978) 466-5969
            div.column.is-one-third
              table(align="center")
                tbody
                  tr
                    td(style="text-align: center")
                      b-icon.has-text-danger(icon="map-pin" size="is-large")
                  tr
                    td.is-size-5(style="text-align: center; padding-top: 15px") 151 Central Street
                  tr
                    td.is-size-5(style="text-align: center") Leominster, Ma 01453
            div.column.is-one-third
              table(align="center")
                tbody
                  tr
                    td(style="text-align: center")
                      b-icon.has-text-danger(icon="envelope-open-o" size="is-large")
                  tr
                    td.is-size-5(style="text-align: center; padding-top: 15px") divas@divashd.com
    article
      div.container(style="margin-top: -50px; padding-bottom: 50px")
        table(align="center")
          tbody
            tr
              td
                gmap-map(:center="{lat:42.520766, lng:-71.759168}", :zoom="18" map-type-id="terrain" style="width: 1000px; height: 400px")
                  gmap-marker(:key="{infoText: 'Divas Hair Design'}", :position="{lat: 42.520700, lng: -71.758725}", :clickable="true")
    article(style="padding-top: 30px; padding-bottom: 50px")
      div.container
        div.columns.is-centered
          div.is-one-third
            h1.has-text-centered.is-size-4 Send Us A Message
        div.columns.is-centered
          div.column.is-half
            div.field
              label.label
                div.control
                  input.input(type="text" placeholder="First Name")
            div.field
              label.label
                div.control
                  input.input(type="text" placeholder="Last Name")
            div.field
              label.label
                div.control.has-icons-left
                  input.input(type="email" placeholder="E-Mail")
                  span.icon.is-small.is-left
                    i.fa.fa-envelope
            div.field
              div.control
                textarea.textarea(placeholder="Message" rows="8")
            table(align="center")
              tbody
                tr
                  td
                    a.button.is-large.is-primary Submit
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
</style>
