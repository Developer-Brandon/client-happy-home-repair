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
            <div class="contents__up">
              <p class="title font-semi-bold">
                본사안내
              </p>
            </div>
            <div class="contents__down">
              <div class="naver-address">
                <!-- * 카카오맵 - 지도퍼가기 -->
                <!-- 1. 지도 노드 -->
                <div
                  id="daumRoughmapContainer1596529272162"
                  class="root_daum_roughmap root_daum_roughmap_landing"
                ></div>
              </div>
              <div class="address-info">
                <span class="address">인천시 부평구 경인로 705</span>
                <span class="phone-number">&nbsp;&nbsp;&nbsp;&nbsp;TEL.010-9018-5553</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<!--&lt;!&ndash; 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. &ndash;&gt;-->
<!--<script-->
<!--charset="UTF-8"-->
<!--class="daum_roughmap_loader_script"-->
<!--src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"-->
<!--&gt;</script>-->
<!--&lt;!&ndash; 3. 실행 스크립트 &ndash;&gt;-->
<!--<script charset="UTF-8">-->
<!--new daum.roughmap.Lander({-->
<!--"timestamp": "1596529272162",-->
<!--"key": "2zihp",-->
<!--"mapWidth": "640",-->
<!--"mapHeight": "360"-->
<!--}).render();-->
<!--</script>-->

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
                    margin-bottom: 50px;
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
                    margin-bottom: 50px;
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
                    margin-bottom: 50px;
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
                        &__up {
                            .title {
                                margin-top: 15px;
                                margin-bottom: 5px;
                            }
                        }
                        &__down {
                            .naver-address {
                                text-align: center;
                            }
                            .address-info {
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
    }
</style>
