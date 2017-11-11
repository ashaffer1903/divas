<template lang="pug">
  section
    article
      div.container(style="padding-top: 30px; padding-bottom: 50px")
        div.columns.is-multiline
          div.column.is-one-third(v-for="service in services")
            div.card
              a(v-on:click="openModal()")
                div.card-image
                  figure.image.is-4by3
                    img(:src="service.mainImage")
              div.card-content
                div.media-content
                  p.title.is-4.has-text-centered {{service.title}}
                  p.subtitle.is-6(style="padding-top: 10px") {{service.subtitle}}

                div.content {{service.content}}

    article
      div.modal(v-bind:class="activateModal")
        div.modal-background
          div.modal-card
            header.modal-card-head
              p.modal-card-title Title
              button.delete(aria-label="close" v-on:click="closeModal()")
            section.modal-card-body
            footer.modal-card-foot
              button.button.is-success(v-on:click="closeModal()") Done
</template>

<script>
  export default {
    name: 'Services',
    data () {
      return {
        activateModal: '',
        services: [
          {
            mainImage: '/static/color-img.jpg',
            subImage: '',
            title: 'Color',
            content: 'Check our our color services. We offer everything from a simple re-touch to a beautiful balayage'
          },
          {
            mainImage: '/static/style-img.jpg',
            subImage: '',
            title: 'Style',
            content: 'Want to add some style? Let us transform your hair. We can unleash your hairs potential'
          },
          {
            mainImage: '/static/cut-img.jpg',
            subImage: '',
            title: 'Cut',
            content: 'Check our our color services. We offer everything from a simple re-touch to a beautiful balayage'
          },
          {
            mainImage: '/static/keratin-img.jpg',
            subImage: '',
            title: 'Treat',
            content: 'Have you been neglecting your hair? Let our powerful treatments restore it back to beautiful.'
          },
          {
            mainImage: '/static/pamper-img.jpg',
            subImage: '',
            title: 'Pamper',
            content: 'Check our our color services. We offer everything from a simple re-touch to a beautiful balayage'
          }
        ]
      }
    },
    methods: {
      openModal: function () {
        this.activateModal = 'is-active'
      },

      closeModal: function () {
        this.activateModal = ''
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

</style>
