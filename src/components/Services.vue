<template lang="pug">
  section
    article
      div.container(style="padding-top: 30px; padding-bottom: 50px")
        div.columns.is-multiline
          div.column.is-one-third(v-for="service in services")
            div.card
              a(v-on:click="openModal(service)")
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
              p.modal-card-title.has-text-centered {{activeService.title}}
              button.delete(aria-label="close" v-on:click="closeModal()")
            section.modal-card-body
              b-table(:data="activeService.serviceList", :bordered="true", :striped="true", :narrowed="false")
                template(slot-scope="props")
                  b-table-column(label="Service")
                    span {{props.row.name}}
                    span.tag.is-rounded.is-primary.is-pulled-right(v-if="props.row.tag") {{props.row.tag}}
                  b-table-column(label="Price*") {{ props.row.price }}
              p.is-size-7(style="padding-left: 15px; padding-top: 20px") *Prices above indicate starting price, and are subject to change upon consultation.
            footer.modal-card-foot
              button.button.is-primary(v-on:click="closeModal()") Done
</template>

<script>
  export default {
    name: 'Services',
    data () {
      return {
        activateModal: '',
        activeService: '',
        services: [
          {
            mainImage: '/static/color-img.jpg',
            subImage: '',
            title: 'Color',
            content: 'Check our our color services. We offer everything from a simple re-touch to a beautiful balayage',
            serviceList: [
              {
                name: 'Single Process',
                price: '$55',
                tag: 'Full Color'
              },
              {
                name: 'Single Process',
                price: '$35',
                tag: 'Color Re-touch'
              },
              {
                name: 'Corrective Color',
                price: '$120'
              },
              {
                name: 'Partial Highlight',
                price: '$70'
              },
              {
                name: 'Full Highlight',
                price: '$100'
              },
              {
                name: 'Partial Low-lights',
                price: '$65'
              },
              {
                name: 'Full Low-lights',
                price: '$85'
              },
              {
                name: 'Ombre',
                price: '$100'
              },
              {
                name: 'Corrective Ombre',
                price: '$150'
              },
              {
                name: 'Balayage',
                price: '$120'
              }
            ]
          },
          {
            mainImage: '/static/style-img.jpg',
            subImage: '',
            title: 'Style',
            content: 'Want to add some style? Let us transform your hair. We can unleash your hairs potential',
            serviceList: [
              {
                name: 'Blow Dry',
                price: '$25',
                tag: 'Short'
              },
              {
                name: 'Blow Dry',
                price: '$30',
                tag: 'Medium'
              },
              {
                name: 'Blow Dry',
                price: '$40',
                tag: 'Long'
              },
              {
                name: 'Roller Set',
                price: '$25',
                tag: 'Short'
              },
              {
                name: 'Roller Set',
                price: '$30',
                tag: 'Medium'
              },
              {
                name: 'Roller Set',
                price: '$35',
                tag: 'Long'
              },
              {
                name: 'Up-Do',
                price: '$65'
              }
            ]
          },
          {
            mainImage: '/static/cut-img.jpg',
            subImage: '',
            title: 'Cut',
            content: 'Whether it\'s your three month trim, or you\'re looking for a change. We\'ve got the cuts for you',
            serviceList: [
              {
                name: 'Womens Cut',
                price: '$18'
              },
              {
                name: 'Mens Cut',
                price: '$12'
              },
              {
                name: 'Trim Bangs',
                price: '$5'
              }
            ]
          },
          {
            mainImage: '/static/keratin-img.jpg',
            subImage: '',
            title: 'Treat',
            content: 'Have you been neglecting your hair? Let our powerful treatments restore it back to beautiful.',
            serviceList: [
              {
                name: 'Keratin',
                price: '$100/oz'
              },
              {
                name: 'Shine Treatment',
                price: '$15'
              },
              {
                name: 'Hydrating Treatment',
                price: '$15'
              },
              {
                name: 'Reconstructive',
                price: '$15'
              }
            ]
          },
          {
            mainImage: '/static/wax-img.jpg',
            subImage: '',
            title: 'Wax',
            content: 'Starting to look like Frida Kahlo? Don\'t worry, we\'ve got you, we have wax!',
            serviceList: [
              {
                name: 'Eyebrows',
                price: '$10'
              },
              {
                name: 'Upper Lip',
                price: '$5'
              },
              {
                name: 'Chin',
                price: '$7'
              },
              {
                name: 'Sideburns',
                price: '$15'
              },
              {
                name: 'Full Face',
                price: '$25'
              }
            ]
          },
          {
            mainImage: '/static/pamper-img.jpg',
            subImage: '',
            title: 'Pamper',
            content: 'Let us take care of you for the day. You deserve to be pampered, and we\'re here to do it for you.',
            serviceList: [
              {
                name: 'Color + Treat + Wax',
                price: '$250'
              },
              {
                name: 'Style + Color + Treat + Wax',
                price: '$275'
              },
              {
                name: 'Cut + Style + Color + Treat + Wax',
                price: '$300'
              }
            ]
          }
        ]
      }
    },
    methods: {
      openModal: function (service) {
        this.activateModal = 'is-active'
        this.activeService = service
      },

      closeModal: function () {
        this.activateModal = ''
        this.activeService = ''
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
