<template lang="pug">
  section
    article
      nav.level
        p.level-item.has-text-centered
          a.link.is-info Home
        p.level-item.has-text-centered
          a.link.is-info About
        p.level-item.has-text-centered.is-uppercase.is-size-2 Divas
          span.has-text-grey HD
        p.level-item.has-text-centered
          a.link.is-info Services
        p.level-item.has-text-centered
          a.link.is-info Contact

    article.hero.is-medium.is-primary.is-bold(style="margin-top: 20px")
      div.hero-body
        div.container
          div.columns.is-centered
            div.column.is-half
              table(align="center")
                tbody
                  tr
                    td.title We
                    td(style="padding-left: 5px")
                      b-icon.is-danger.is-medium(icon="heart")
                    td.title(style="padding-left: 5px") Hair
          p.is-size-5.has-text-centered(style="padding-top: 30px") Welcome to Divas Hair Design! You have come to the right place for great hair.
          p.is-size-5.has-text-centered(style="padding-top: 30px") Sit back. Relax. And let us take care of you.

</template>

<script>
  export default {
    name: 'HelloWorld',
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
