<template>
  <div class="ceo-greetings">
    <div class="ceo-greetings__inner">
      <hhr-page-title title="인사말" />
      <div class="contents">
        <div class="contents__left">
          <img
            class="ceo-picture"
            alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어,010-9018-5553"
            src="@/assets/images/about/rivised-ddong-e.png"
          />
        </div>
        <div class="clear-both mobile-visible-block-only"></div>
        <div class="contents__right">
          <div class="headline">
            <p
              class="font-bold"
              v-html="ceoGreetingTitle"
            >
            </p><br />
          </div>
          <div class="description">
            <p v-html="ceoGreetingContents">
            </p>
          </div>
        </div>
        <div class="clear-both mobile-visible-block-only"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'

export default {
  name: 'CeoGreetings',
  components: {
    HhrPageTitle,
  },
  computed: {
    ceoPicAddress() {
      return this.$store.getters['about/ceoGreetingAddress']
    },
    ceoGreetingTitle() {
      return this.$store.getters['about/ceoGreetingTitle']
    },
    ceoGreetingContents() {
      return this.$store.getters['about/ceoGreetingContents']
    },
  },
}
</script>

<style lang="scss" scoped>
    .ceo-greetings {
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
                &__left {
                    width: 300px;
                    height: 350px;
                    float: left;
                    @media (max-width: $screen-mobile) {
                        clear: both;
                        margin: 0 auto;
                    }
                    .ceo-picture {
                    }
                }
                &__right {
                    width: calc(100% - 300px);
                    height: 350px;
                    float: right;
                    @media (max-width: $screen-mobile) {
                        padding-top: 25px;
                        width: 100%;
                        height: 100%;
                        clear: both;
                    }
                    .headline {
                        padding-left: 25px;
                        font-size: 20px;
                        @media (max-width: $screen-mobile) {
                            padding-left: 0;
                            clear: both;
                        }
                    }
                    .description {
                        padding-left: 25px;
                        @media (max-width: $screen-mobile) {
                            padding-left: 0;
                            clear: both;
                        }
                    }
                }
            }
        }
    }
</style>
