<template>
  <div class="ceo-greetings">
    <div class="ceo-greetings__inner">
      <hhr-page-title
        class="greeting-title-fade-in"
        title="인사말"
      />
      <div class="contents">
        <div class="contents__left">
          <img
            class="ceo-picture greeting-pic-fade-in"
            :alt="getCommonAnnouncement()"
            src="@/assets/images/about/rivised-ddong-e.png"
          />
        </div>
        <hhr-clear-both
          resolution="mobile"
          type="block"
        />
        <div class="contents__right">
          <div class="headline greeting-sub-title-fade-in">
            <p
              class="font-bold"
              v-html="ceoGreetingTitle"
            >
            </p><br />
          </div>
          <div class="description greeting-explain-fade-in">
            <p v-html="ceoGreetingContents">
            </p>
          </div>
        </div>
        <hhr-clear-both
          resolution="mobile"
          type="block"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HhrClearBoth from '@/components/util/HhrClearBoth.vue'
import HhrPageTitle from '@/components/util/HhrPageTitle.vue'

export default {
  name: 'CeoGreetings',
  components: {
    HhrClearBoth,
    HhrPageTitle,
  },
  computed: {
    // TODO: 사진이 확정되고 나면 S3에서 참조하게끔 개발
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
    // @Local util
    .greeting-title-fade-in {
        @include primary-fade-in-top-to-bottom(1, 0.5)
    }

    .greeting-pic-fade-in {
        @include primary-fade-in-left-to-right(1, 0.5);
    }

    .greeting-sub-title-fade-in {
        @include primary-fade-in-right-to-left(1, 0.5);
    }

    .greeting-explain-fade-in {
        @include primary-fade-in-right-to-left(1, 0.5);
    }

    // @Classes
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
