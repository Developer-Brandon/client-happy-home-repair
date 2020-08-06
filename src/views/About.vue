<template>
  <div class="sections">
    <div class="sections__inner">
      <div class="wrap-ceo-greetings">
        <div class="wrap-ceo-greetings__inner">
          <div class="wrap-title">
            <p class="font-bold title">
              인사말
            </p>
          </div>
          <div class="contents">
            <div class="contents__left">
              <!-- TODO: 사진, 싸인 넣어야 하는데... -->
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
      <div class="clear-both"></div>
      <div class="introduce-company">
        <div class="introduce-company__inner">
          <div class="wrap-title">
            <p class="title font-bold">
              회사소개
            </p>
          </div>
          <div class="contents">
            <ul class="introduce-list">
              <li><span class="introduce-box">대표이사</span><span class="introduce-contents">이성일</span></li>
              <li>
                <span class="introduce-box">사업분야</span><span class="introduce-contents">어쩌구저쩌구</span>
              </li>
              <li>
                <span class="introduce-box">주요업종</span><span class="introduce-contents">어쩌구저쩌구</span>
              </li>
              <li>
                <span class="introduce-box">주소</span><span
                  class="introduce-contents"
                >인천시 부평구 경인로 705</span>
              </li>
              <li>
                <span class="introduce-box">연락처</span><span
                  class="introduce-contents"
                >010-9018-5553</span>
              </li>
              <li>
                <span class="introduce-box">이메일</span><span class="introduce-contents">lain4444@naver.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
      <div class="wrap-how-to-come">
        <div class="wrap-how-to-come__inner">
          <div class="wrap-title">
            <p class="title font-bold">
              오시는 길
            </p>
          </div>
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
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @mixin title-common-style {
        margin: 0 auto;
        max-width: 870px;
        border-left: 3px solid cornflowerblue;
        padding-left: 10px;
        @media (max-width: $screen-mobile) {
            max-width: $screen-mobile;
            padding-left: 5px;
            margin-left: 10px;
        }
        .title {
            font-size: 20px;
            margin-bottom: 25px;
            @media (max-width: $screen-mobile) {
                margin-bottom: 20px;
            }
        }
    }

    .sections {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 10px;
        @media (max-width: $screen-mobile) {
            margin: 0 auto;
        }
        &__inner {
            width: 100%;
            height: 100%;
            padding-top: 25px;
            max-width: $contents-width;
            margin: 0 auto;
            @media (max-width: $screen-mobile) {
                padding-left: 10px;
                padding-right: 10px;
                max-width: $screen-mobile;
            }
            .wrap-ceo-greetings {
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
                                padding-left: 15px;
                                font-size: 20px;
                                @media (max-width: $screen-mobile) {
                                    padding-left: 0;
                                    clear: both;
                                }
                            }
                            .description {
                                padding-left: 15px;
                                @media (max-width: $screen-mobile) {
                                    padding-left: 0;
                                    clear: both;
                                }
                            }
                        }
                    }
                }
            }
            .introduce-company {
                width: 100%;
                height: 100%;
                &__inner {
                    width: 100%;
                    height: 350px;
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
                        height: 250px;
                        @media (max-width: $screen-mobile) {
                            height: 100%;
                        }
                        .introduce-list {
                            li {
                                &:nth-child(odd) {
                                    .introduce-box {
                                        display: inline-block;
                                        width: 400px;
                                        background-color: $hhr-blue;
                                        color: white;
                                        font-size: 20px;
                                        padding: 10px 0 10px 15px;
                                        @media (max-width: $screen-mobile) {
                                            width: 100%;
                                            display: block;
                                        }
                                    }
                                    .introduce-contents {
                                        display: inline-block;
                                        width: calc(100% - 400px);
                                        font-size: 20px;
                                        padding: 10px;
                                        @media (max-width: $screen-mobile) {
                                            width: 100%;
                                            display: block;
                                        }
                                    }
                                }
                                &:nth-child(even) {
                                    .introduce-box {
                                        display: inline-block;
                                        width: 400px;
                                        background-color: $hhr-gray;
                                        color: $hhr-deep-gray;
                                        font-size: 20px;
                                        padding: 10px 0 10px 15px;
                                        @media (max-width: $screen-mobile) {
                                            width: 100%;
                                            display: block;
                                        }
                                    }
                                    .introduce-contents {
                                        display: inline-block;
                                        width: calc(100% - 400px);
                                        font-size: 20px;
                                        padding: 10px;
                                        @media (max-width: $screen-mobile) {
                                            width: 100%;
                                            display: block;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .wrap-how-to-come {
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
        }
    }
</style>
