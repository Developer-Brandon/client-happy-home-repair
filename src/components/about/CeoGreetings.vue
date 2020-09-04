<template lang="html">
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
            <p class="font-bold">
              안녕하십니까, 평소 저희 <span class="hhr-blue">해리 홈 리페어</span>를 어쩌구 저쩌구...
            </p><br />
          </div>
          <div class="description">
            <br />
            <p>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌<br />
              구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구....<br />
              <br />
              어쩌구 / 저쩌구 / 어쩌구 / 저쩌구<br />
              구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저<br />
              쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구<br />
              저쩌구어쩌구저쩌구어쩌구저쩌구..어쩌구저쩌구어쩌구<br />
              저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저<br />
              쩌구어쩌구저쩌구어쩌구저쩌구, 어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구!<br />
              <br />
              <br />
              <br />
              쓸말이 이렇게 많이 없으려나?<br />
              어쩌구 저쩌구<br />
              그럼 사진의 세로크기를 줄이면...<br />
              어쩌구 저쩌구<br />
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
