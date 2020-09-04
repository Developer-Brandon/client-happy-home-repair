<template lang="html">
  <div class="how-to-come">
    <div class="how-to-come__inner">
      <hhr-page-title title="오시는 길" />
      <div class="contents">
        <div class="wrap-google-map">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12665.969553240351!2d126.7086183!3d37.4727054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f79a53be0c2baa7!2z7ZW07ZS87ZmI66as7Y6Y7Ja0!5e0!3m2!1sko!2skr!4v1596603748019!5m2!1sko!2skr"
            width="700"
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="address-info">
          <span class="address">인천시 부평구 경인로 705 해피홈리페어</span>
          <span class="phone-number">&nbsp;/&nbsp;TEL.010-9018-5553</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'

export default {
  name: 'HowToCome',
  components: {
    HhrPageTitle,
  },
}
</script>

<style lang="scss" scoped>
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
