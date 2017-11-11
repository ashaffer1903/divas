<template lang="pug">
  section
    article
      div.container(style="padding-top: 30px; padding-bottom: 50px")
        div.columns
          div.column.is-one-third
            div.box.about-detail
              table(align="center")
                tbody
                  tr
                    td
                      b-icon.is-primary(icon="home" size="is-large")
              h1.is-size-4.has-text-centered The History
              p.has-text-centered.about-content {{history}}
          div.column.is-one-third
            div.box.about-detail
              table(align="center")
                tbody
                  tr
                    td
                      b-icon.is-danger(icon="user-circle" size="is-large")
              h1.is-size-4.has-text-centered The Team
              p.has-text-centered.about-content {{team}}
          div.column.is-one-third
            div.box.about-detail
              table(align="center")
                tbody
                  tr
                    td
                      b-icon.is-info(icon="shopping-bag" size="is-large")
              h1.is-size-4.has-text-centered The Products
              p.has-text-centered.about-content {{products}}
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        msg: 'Hi from the About page.',
        history: `We are a family owned business, that has been serving the community for over 10 years. Our mission
              has always been one thing, to make you feel beautiful. We source the best possible products for our clients, and
              regardless of their cost to us, we make it affordable enough for everyone. It is our duty to treat every client
              like family, and we always love adding more members to it.`,
        team: `Our stylists are highly trained, trusted, and honest. The reason we don't have a lot of stylists is simple.
          We would never put you in the hands of someone we don't trust, or want doing our own hair. We are small, but
          we think that's exactly what makes us great.`,
        products: `We hand pick every product that makes it's way into our Salon. Whether it be for retail, or a service
        you're getting done, it has to be the best. Rest assured, even though these products are much more expensive than
        other brands, we keep our margins as small as possible in order to ensure we are the most affordable place around.`
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

  .about-content {
    padding-top: 15px;
  }

  .about-detail {
    min-height: 450px;
  }

</style>
