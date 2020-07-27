<template>
  <header class="header">
    <div id="navigation">
      <div class="wrap-logo-and-title">
        <img
          class="logo"
          alt="해피홈리페어,샤시/방충망/창문/문틀/ABS도어"
          src="@/assets/images/logos/big-main-title-icon.png"
        />
        <div class="wrap-titles">
          <h2 class="sub-title font-light">
            해피 홈 리페어
          </h2>
          <h1 class="title font-bold">
            HAPPY&nbsp;HOME<br />REPAIR
          </h1>
        </div>
      </div>
      <div class="right-menus__wrapper font-light">
        <router-link
          id="introduce-products"
          class="menus font-regular"
          to="/introduceProducts"
        >
          제품소개
        </router-link>
        <router-link
          id="introduce-company"
          class="menus font-regular"
          to="/introduceCompany"
        >
          회사소개
        </router-link>
        <router-link
          id="notice"
          class="menus font-regular"
          to="/notice"
        >
          공지사항
        </router-link>
        <router-link
          id="price-inquiry"
          class="menus font-regular"
          to="/priceInquiry"
        >
          견적문의
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
    .header {
        width: 100%;
        max-width: $screen-desktop;
        margin: 0 auto;
        padding: 10px 0;
        @media (max-width: $screen-mobile) {
            padding: 10px;
        }
        #navigation {
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
                width: 220px;
                margin: 0 auto;
                padding: 0 20px;
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
                    }
                    &:hover {
                        opacity: 0.8;
                    }
                }
                .wrap-titles {
                    position: relative;
                    width: 120px;
                    height: 45px;
                    margin-left: 33px;
                    @media (max-width: $screen-mobile) {
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
                            position: relative;
                            top: 0;
                            text-align: center;
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
</style>
