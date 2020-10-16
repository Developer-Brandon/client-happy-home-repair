<template>
  <transition name="component-fade">
    <div
      v-show="values.check.lifeCycle"
      class="how-to-come"
    >
      <div
        class="how-to-come__inner"
      >
        <hhr-page-title
          class="how-to-come-title-fade-in"
          title="오시는 길"
        />
        <div class="contents how-to-come-map-fade-in">
          <div class="wrap-google-map">
            <iframe
              class="google-map"
              :src="values.googleMap.address"
              width="100%"
              height="300"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="address-info">
            <span class="address">{{ getCommonAddress() }}</span>
            <span class="phone-number">&nbsp;/&nbsp;TEL.{{ getCommonPhoneNumber() }}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'

export default {
  name: 'HowToCome',
  components: {
    HhrPageTitle,
  },
  data() {
    return {
      values: {
        googleMap: {
          address: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12665.969553240351!2d126.7086183!3d37.4727054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f79a53be0c2baa7!2z7ZW07ZS87ZmI66as7Y6Y7Ja0!5e0!3m2!1sko!2skr!4v1596603748019!5m2!1sko!2skr',
        },
        check: {
          lifeCycle: false,
        },
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      // const map = new google.maps.Map(document.getElementsByClassName('google-map'), { zoom: 8 })
      // google.maps.event.addListenerOnce(map, 'tilesloaded', this.fixMyPageOnce)
      this.values.check.lifeCycle = true
    })
  },
  methods: {
    fixMyPageOnce() {
      // nothing to do ....
    },
  },
}
</script>

<style lang="scss" scoped>

    // @Local utils
    .how-to-come-title-fade-in {
        @include primary-fade-in-top-to-bottom(3, 2.5)
    }

    .how-to-come-map-fade-in {
        @include primary-fade-in-bottom-to-top(3, 2.5)
    }

    // @Classes
    .how-to-come {
        width: 100%;
        height: 100%;
        &__inner {
            width: 100%;
            height: 450px;
            margin-bottom: 100px;
            @media (max-width: $screen-mobile) {
                height: 100%;
                margin-bottom: 50px;
            }
            .wrap-title {
                @include title-common-style;
            }
            .contents {
                width: 100%;
                height: 350px;
                @media (max-width: $screen-mobile) {
                    height: 100%;
                }
                .wrap-google-map {
                    text-align: center;
                    margin-bottom: 10px;
                    .google-map {
                        @media (max-width: $screen-mobile) {
                            width: 100%;
                        }
                    }
                }
                .address-info {
                    text-align: center;
                    .address {
                        padding-top: 20px;
                        margin-bottom: 10px;
                    }
                    .phone-number {
                    }
                }
            }

        }
    }
</style>
