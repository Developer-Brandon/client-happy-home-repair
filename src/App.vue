<template>
  <div id="app">
    <div class="container">
      <!-- header -->
      <header class="header">
        <div id="nav">
          <div class="wrap-logo-and-title">
            <img class="logo"
                 alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
                 src="@/assets/images/logos/big-main-title-icon.png"/>
            <div class="wrap-pc-titles">
              <h2 class="sub-title font-light">해피 홈 리페어</h2>
              <h1 class="title font-bold">HAPPY&nbsp;HOME<br>REPAIR</h1>
            </div>
            <div class="wrap-mobile-titles">
              <h2 class="sub-title font-light">해피 홈 리페어</h2>
              <h1 class="title font-bold">Happy home repair</h1>
            </div>
          </div>
          <div class="right-menus__wrapper font-light">
            <router-link class="menus font-regular" id="introduce-products" to="/introduceProducts">제품소개</router-link>
            <router-link class="menus font-regular" id="introduce-company" to="/introduceCompany">회사소개</router-link>
            <router-link class="menus font-regular" id="notice" to="/notice">공지사항</router-link>
            <router-link class="menus font-regular" id="price-inquiry" to="/priceInquiry">견적문의</router-link>
          </div>
        </div>
      </header>
      <!-- body -->
      <div class="body">
        <!-- 0.sns 모음 -->
        <div class="body__sns">
          <div class="body__sns__inner">
          </div>
        </div>
        <!-- 1.메인 슬라이더 -->
        <div class="body__main-slider">
          <div class="body__main-slider__inner">
            <div class="body__main-slider__inner__contents">
              <!-- 1-(1). main -->
              <div class="wrap-slider-contents">
                <div class="wrap-slider-contents__wrap-logo">
                  <img class="logo"
                       alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
                       src="@/assets/images/logos/final-logo.png"/>
                </div>
                <div class="wrap-slider-contents__wrap-main-title">
                  <h3 class="logo-title font-bold">집안 <span class="above-dot hhr-deep-blue">곳곳</span> 못고치는게 없는</h3>
                  <h3 class="logo-title font-bold">전국 <span class="above-dot hhr-deep-blue">곳곳</span> 안가는곳이 없는</h3>
                  <h3 class="logo-title font-bold">프리미엄 홈 리페어 서비스</h3>
                  <h2 class="logo-explain font-light">창호수리/방충망/페인트/문짝설치/기타작업</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2. 그 외 -->
        <div class="body__other-information">
          <div class="body__other-information__inner">
            <!-- 2. 기업 안내  -->
            <div class="announce-company">
              <div class="announce-company__inner">
                <h2 class="question font-semi-bold"><span class="hhr-blue font-bold title">해피 홈 리페어</span>는 무엇이 다른가요?</h2>
                <div class="hhr-blue-small-divider"></div>
                <div class="question-explain">
                  <p class="wrap-contents"><span class="hhr-blue font-bold contents">첫째</span>, 20년 경력의 내장수리 전문가가 직접
                    케어해드립니다</p>
                  <p class="wrap-contents"><span class="hhr-blue font-bold contents">둘째</span>, 블로그를 시작한 이래로 1,000여건이 넘는
                    시공 사례가 있습니다</p>
                  <p class="wrap-contents"><span class="hhr-blue font-bold contents">셋째</span>, 타 업체와 비교 불가능한 합리적인 비용으로
                    수리해드립니다</p>
                </div>
              </div>
            </div>
            <div class="hhr-small-divider"></div>
            <!-- 3. 신청서  -->
            <div class="announce-selection-for-client">
              <div class="announce-selection-for-client__inner">
                <h2 class="selection font-semi-bold"><span class="font-bold title">지금</span>, 합리적인 가격으로 만나보세요</h2>
                <div class="selection-list">
                  <div class="wrap-application-form">
                    <img class="application-form-logo"
                         src="@/assets/images/logos/white-application-form.png"/>
                    <br>
                    <br>
                    <button class="online-applicationform font-bold">온라인으로 신청할래요</button>
                  </div>
                  <div class="wrap-phone-call-logo">
                    <img class="application-form-logo"
                         src="@/assets/images/logos/white-phone-call2.png"/>
                    <br>
                    <br>
                    <button class="call-applicationform font-bold">유선으로 신청할래요</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="hhr-small-divider"></div>
            <!-- 4. 시공 사례모음 -->
            <div class="all-products-announce">
              <div class="all-products-announce__inner">
                <h2 class="big-title font-semi-bold"><span class="hhr-blue font-bold title">직접</span>, 시공 후기를 살펴보고
                  결정하세요</h2>
                <div class="hhr-blue-small-divider"></div>
                <p class="small-title font-semi-bold">약 <span class="hhr-blue font-bold title">1,000</span>여 건이 넘는 포스팅
                  보러가기</p>
                <div class="all-products-list">
                  <div class="all-products-list__inner">
                    <!-- TODO: 네이버 블로그에서 사진과 글귀 끍어오기. 먼저 어떻게 긁어와야되는지 조사가 필요하다 -->
                  </div>
                </div>
              </div>
            </div>
            <!--<div class="hhr-small-divider"></div>-->
          </div>
        </div>
        <!-- router view -->
        <router-view/>
      </div>
      <!-- footer -->
      <footer class="footer">
        <div class="footer__inner">
          <div class="footer__inner__left">
            <div class="owner-information">
              <h2 class="owner-information__title font-bold">사업자 정보</h2>
              <ul class="owner-information__explain">
                <li>상호: 해피 홈 리페어</li>
                <li>대표: 전희선</li>
                <li>주소: 인천시 부평구 경인로 705</li>
                <li>전화: 010-9018-5553</li>
                <li>메일: lain4444@naver.com</li>
                <li>사업자번호: 392-22-00352</li>
              </ul>
              <caption class="owner-information__copyright">Copyright©DKStudio</caption>
            </div>
          </div>
          <div class="footer__inner__middle">
            <div class="partnership-information">
              <h2 class="partnership-information__title font-bold">대표 전화 / 제휴 문의</h2>
              <ul class="partnership-information__explain">
                <li>CALL<br><span style="display:block; text-align: right">010-9018-5553</span></li>
                <li>E-MAIL<br><span style="display:block; text-align: right">lain4444@naver.com</span></li>
              </ul>
            </div>
            <div class="hhr-gray-small-divider"></div>
            <div class="email-information">
              <h2 class="email-information__title">CONTACT US</h2>
              <ul class="email-information__explain">
                <li>E-MAIL<br> <span style="display:block; text-align: right">lovefinance@naver.com</span></li>
              </ul>
            </div>
            <div class="open-time-information">
              <!-- TODO: 오픈시간을 표기할건지 말건지에 대해서는 아빠랑 추가적으로 상의를 해보아야한다 -->
            </div>
          </div>
          <div class="footer__inner__right">
            <div class="wrap-all-information">
              <div class="wrap-logo-and-title">
                <img class="logo"
                     alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
                     src="@/assets/images/logos/big-main-title-icon.png"/>
                <div class="wrap-pc-titles">
                  <h2 class="sub-title font-light">해피 홈 리페어</h2>
                  <h1 class="title font-bold">HAPPY&nbsp;HOME<br>REPAIR</h1>
                </div>
              </div>
              <div class="clear-both"></div>
              <div class="sns-channels">
                <div class="wrap-sns-logo">
                  <img class="logo"
                       alt="인스타그램"
                       src="@/assets/images/logos/sns/icon-instagram.png"/>
                </div>
                <div class="wrap-sns-logo">
                  <img class="logo"
                       alt="네이버 블로그"
                       src="@/assets/images/logos/sns/icon-naverblog.png"/>
                </div>
                <div class="wrap-sns-logo">
                  <img class="logo"
                       alt="카카오톡"
                       src="@/assets/images/logos/sns/icon-kakaotalk.png"/>
                </div>
              </div>
              <div class="clear-both"></div>
              <div class="hhr-gray-small-divider"></div>
              <div class="wrap-sub-title">
                <ul class="sub-title-list font-hair-line">
                  <li>내장수리 20년 경력의 전문가가 확실하게 고쳐드립니다</li>
                  <li>"집안 곳곳의 부서진 곳 수리해드립니다"</li>
                  <li>"타 업체에서 수리하지 못하는 곳 수리해드립니다"</li>
                  <li class="font-regular">해피 홈 리페어 / 010-9018-5553</li>
                  <li>내장수리 전문 해피 홈 리페어에 문의해보세요</li>
                </ul>
              </div>
              <div class="clear-both"></div>
            </div>
          </div>
        </div>
      </footer>
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

  .ceo-font-style {
    color: cornflowerblue;
  }

  .above-dot {
    font-size: 30px;
    text-emphasis-style: dot;
    text-emphasis-position: over left;
    -webkit-text-emphasis-style: dot;
    -webkit-text-emphasis-position: over;
  }

  #app {
    font-family: 'Arita', serif;
    .container {
      max-width: 100%;
      .header {
        width: $contents-width;
        margin: 0 auto;
        padding: 10px 0;
        #nav {
          display: table;
          width: 100%;
          height: 45px;
          padding-left: 40px;
          padding-right: 40px;
          position: center;
          background-repeat: no-repeat;
          background-image: none;
          background-position-x: right;
          background-size: 200px 45px;
          @media (max-width: $screen-mobile) {
            display: block;
            background-image: url('~@/assets/images/main/menu-background.png');
            background-position-x: center;
            padding-left: 20px;
            padding-right: 20px;
          }
          .wrap-logo-and-title {
            cursor: pointer;
            padding-left: 15px;
            float: left;
            @media (max-width: $screen-mobile) {
              padding: 0;
              width: 100%;
              height: 100%;
              text-align: center;
              clear: both;
            }
            .logo {
              position: absolute;
              display: table-cell;
              vertical-align: middle;
              opacity: 0.2;
              transition: 0.3s;
              width: 45px;
              height: 45px;
              @media (max-width: $screen-mobile) {
                display: none;
              }
              &:hover {
                opacity: 0.8;
              }
            }
            .wrap-pc-titles {
              position: relative;
              width: 120px;
              height: 45px;
              margin-left: 33px;
              @media (max-width: $screen-mobile) {
                display: none;
              }
              .sub-title {
                position: absolute;
                top: 3px;
                left: 50%;
                font-size: 9px;
                transition: 0.3s;
                @media (max-width: $screen-mobile) {
                  position: relative;
                  top: 0;
                  text-align: center;
                }
              }
              .title {
                position: absolute;
                top: 15px;
                font-size: 16px;
                line-height: 14px;
                text-align: center;
                transition: 0.3s;
                @media (max-width: $screen-mobile) {
                  display: block;
                  position: relative;
                  top: 0;
                  text-align: center;
                  margin: 0 auto;
                }
              }
            }
            .wrap-mobile-titles {
              display: none;
              @media (max-width: $screen-mobile) {
                display: block;
              }
              .sub-title {
                @media (max-width: $screen-mobile) {
                  font-size: 9px;
                  top: 7px;
                  text-align: center;
                  position: relative;
                }
              }
              .title {
                @media (max-width: $screen-mobile) {
                  top: 12px;
                  letter-spacing: 2px;
                  font-size: 16px;
                  line-height: 14px;
                  text-align: center;
                  display: block;
                  position: relative;
                  margin: 0 auto;
                }
              }
            }
          }
          .right-menus {
            width: calc(100% - 140px);
            &__wrapper {
              display: table-cell;
              text-align: right;
              vertical-align: middle;
              width: 500px;
              height: 100%;
              @media (max-width: $screen-mobile) {
                display: none;
              }
              .menus {
                color: black;
                text-decoration: none;
                margin-right: 20px;
                transition: 0.4s;
                &:hover {
                  font-weight: 700;
                }
                &:last-child {
                  margin-right: 0;
                }
              }
              #introduce-products {
              }
            }
          }
        }
      }
      .body {
        display: block;
        width: 100%;
        height: 100%;
        &__main-slider {
          width: 100%;
          height: 400px;
          background-size: 1200px 400px;
          background: url('~@/assets/images/main/banner/main-slide-background.png');
          &__inner {
            width: $contents-width;
            height: 100%;
            padding: 50px 10px;
            margin: 0 auto;
            background-color: #ffffff;
            background-color: rgba(255, 255, 255, 0);
            &__contents {
              width: 100%;
              height: 100%;
              .wrap-slider-contents {
                width: 100%;
                height: 260px;
                &__wrap-logo {
                  text-align: center;
                  .logo {
                    width: 120px;
                    height: 120px;
                  }
                }
                &__wrap-main-title {
                  line-height: 40px;
                  .logo-title {
                    font-size: 25px;
                    &:nth-child(1) {
                      text-align: center;
                    }
                    &:nth-child(2) {
                      text-align: center;
                    }
                    &:nth-child(3) {
                      font-size: 20px;
                      text-align: center;
                      line-height: 20px;
                      margin-top: 20px;
                    }
                  }
                  .logo-explain {
                    text-align: center;
                    line-height: 20px;
                    font-size: 15px;
                  }
                }
              }
            }
          }
        }
        &__other-information {
          width: 100%;
          height: 1000px;
          /*background-size: 300px 200px;*/
          /*background-image: url('~@/assets/images/main/background-logos-pattern4.png');*/
          &__inner {
            .announce-company {
              padding: 50px 0;
              &__inner {
                width: $contents-width;
                margin: 0 auto;
                .question {
                  text-align: center;
                  margin-bottom: 10px;
                  .title {
                    font-size: 30px;
                  }
                }
                .question-explain {
                  margin-top: 35px;
                  .wrap-contents {
                    .contents {
                      font-size: 30px;
                    }
                    &:nth-child(1) {
                      text-align: left;
                      margin-bottom: 25px;
                    }
                    &:nth-child(2) {
                      text-align: center;
                      margin-bottom: 25px;
                    }
                    &:nth-child(3) {
                      text-align: right;
                    }
                  }
                }
              }
            }
            .announce-selection-for-client {
              height: 300px;
              background-color: $hhr-blue;
              &__inner {
                width: 100%;
                height: 100%;
                margin: 0 auto;
                text-align: center;
                padding: 50px 0;
                .selection {
                  color: white;
                  height: 40px;
                  margin-bottom: 40px;
                  .title {
                    font-size: 30px;
                  }
                }
                .selection-list {
                  height: 170px;
                  .wrap-application-form {
                    width: 30%;
                    min-width: 200px;
                    margin-left: 20%;
                    float: left;
                    .application-form-logo {
                      width: 40px;
                      height: 40px;
                    }
                    .online-applicationform {
                      border: 1px solid white;
                      border-radius: 5px;
                      color: white;
                      width: 200px;
                      height: 45px;
                      margin-bottom: 5px;
                      margin-right: 15px;
                      transition: 0.3s;
                      &:hover {
                        color: $hhr-deep-blue;
                        background-color: white;
                        font-size: 16.5px;
                      }
                    }
                  }
                  .wrap-phone-call-logo {
                    width: 30%;
                    min-width: 200px;
                    margin-right: 20%;
                    float: left;
                    .application-form-logo {
                      width: 40px;
                      height: 40px;
                    }
                    .call-applicationform {
                      border: 1px solid white;
                      border-radius: 5px;
                      color: white;
                      width: 200px;
                      height: 45px;
                      margin-bottom: 5px;
                      transition: 0.3s;
                      &:hover {
                        color: $hhr-deep-blue;
                        background-color: white;
                        font-size: 16.5px;
                      }
                    }
                  }
                }
              }
            }
            .all-products-announce {
              padding: 50px 0;
              height: 600px;
              &__inner {
                width: $contents-width;
                margin: 0 auto;
                .big-title {
                  text-align: center;
                  margin-bottom: 10px;
                  .title {
                    font-size: 30px;
                  }
                }
                .small-title {
                  text-align: center;
                  font-size: 15px;
                }
                .all-products-list {
                  &__inner {
                    width: 580px;
                    // 네이버 블로그에서 사진과 글귀
                  }
                }
              }
            }
          }
        }
      }
      .footer {
        width: 100%;
        background-color: $hhr-gray;
        &__inner {
          width: 980px;
          height: 400px;
          margin: 0 auto;
          padding: 60px 0;
          &__left {
            width: 25%;
            height: 100%;
            float: left;
            .owner-information {
              height: 100%;
              position: relative;
              margin-right: 10px;
              &__title {
                font-size: 15px;
                color: #333333;
                margin-bottom: 10px;
              }
              &__explain {
                font-size: 12px;
                color: #333333;
                li {
                  line-height: 20px;
                }
              }
              &__copyright {
                position: absolute;
                bottom: 0;
                font-size: 10px;
                color: #333333;
              }
            }
          }
          &__middle {
            width: 20%;
            float: left;
            .partnership-information {
              &__title {
                font-size: 15px;
                color: #333333;
                margin-bottom: 20px;
              }
              &__explain {
                font-size: 12px;
                color: #333333;
                li {
                  line-height: 20px;
                }
              }
            }
            .email-information {
              &__title {
                font-size: 15px;
                color: #333333;
                margin-bottom: 20px;
              }
              &__explain {
                font-size: 12px;
                color: #333333;
                li {
                  line-height: 20px;
                }
              }
            }
          }
          &__right {
            position: relative;
            width: 55%;
            float: left;
            .wrap-all-information {
              position: absolute;
              top: 0;
              right: 0;
              // 1 logo & title
              .wrap-logo-and-title {
                cursor: pointer;
                float: right;
                padding-left: 15px;
                margin-bottom: 15px;
                @media (max-width: $screen-mobile) {
                  padding: 0;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  clear: both;
                }
                .logo {
                  position: absolute;
                  display: table-cell;
                  vertical-align: middle;
                  opacity: 0.2;
                  transition: 0.3s;
                  width: 45px;
                  height: 45px;
                  @media (max-width: $screen-mobile) {
                    display: none;
                  }
                }
                .wrap-pc-titles {
                  position: relative;
                  width: 120px;
                  height: 45px;
                  margin-left: 33px;
                  @media (max-width: $screen-mobile) {
                    display: none;
                  }
                  .sub-title {
                    position: absolute;
                    top: 3px;
                    left: 50%;
                    font-size: 9px;
                    opacity: 0.5;
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                      position: relative;
                      top: 0;
                      text-align: center;
                    }
                  }
                  .title {
                    position: absolute;
                    top: 15px;
                    font-size: 16px;
                    line-height: 14px;
                    opacity: 0.5;
                    text-align: center;
                    transition: 0.3s;
                    @media (max-width: $screen-mobile) {
                      display: block;
                      position: relative;
                      top: 0;
                      text-align: center;
                      margin: 0 auto;
                    }
                  }
                }
                .wrap-mobile-titles {
                  display: none;
                  @media (max-width: $screen-mobile) {
                    display: block;
                  }
                  .sub-title {
                    @media (max-width: $screen-mobile) {
                      font-size: 9px;
                      top: 7px;
                      text-align: center;
                      position: relative;
                    }
                  }
                  .title {
                    @media (max-width: $screen-mobile) {
                      top: 12px;
                      letter-spacing: 2px;
                      font-size: 16px;
                      line-height: 14px;
                      text-align: center;
                      display: block;
                      position: relative;
                      margin: 0 auto;
                    }
                  }
                }
              }
              // 2 sns channels
              .wrap-sns-logo {
                display: inline-block;
                float: right;
                .logo {
                  width: 40px;
                  height: 40px;
                  margin-right: 10px;
                  opacity: 0.5;
                  transition: 0.3s;
                  &:last-child {
                    margin-right: 0;
                  }
                  &:hover {
                    opacity: 1;
                    cursor: pointer;
                  }
                }
              }
              // 3 sub title
              .wrap-sub-title {
                .sub-title-list {
                  line-height: 20px;
                  text-align: right;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
