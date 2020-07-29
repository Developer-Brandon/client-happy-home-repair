<template>
  <div class="sections">
    <div class="sections__inner">
      <div class="wrap-window-section">
        <div class="wrap-window-section__inner">
          <div class="wrap-window-section__inner__snippet">
            <p>아직도, <br />고장난 샤시를<br />그.대.로<br />사용하고 계신가요?</p>
          </div>
        </div>
      </div>
      <div class="wrap-window-section-announcement">
        <div class="wrap-window-section-announcement__inner">
          <p class="font-light">
            : 샤시수리/나무창문/롤러교체/레일수리/모헤어교체
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <div class="wrap-door-section">
        <div class="wrap-door-section__inner">
          <div class="wrap-door-section__inner__snippet">
            <p>문을<br />통째로<br />교체하기 전에<br />교체하셔야 합니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-door-section-announcement">
        <div class="wrap-door-section-announcement__inner">
          <p class="font-light">
            ABS도어/포켓도어수리/3연동중문수리/미닫이문수리 :
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
    <div class="sections__inner">
      <div class="wrap-paint-section">
        <div class="wrap-paint-section__inner">
          <div class="wrap-paint-section__inner__snippet">
            <p>페인트<br />칠은<br />다시 칠하려면<br />돈이 더 깨집니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-paint-section-announcement">
        <div class="wrap-paint-section-announcement__inner">
          <p class="font-light">
            : 아파트, 주택, 상가, 빌라 실내페인트 베란다 칠 옥상방수
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <div class="wrap-etc-section">
        <div class="wrap-etc-section__inner">
          <div class="wrap-etc-section__inner__snippet">
            <p>환풍기<br />건조대<br />포함 모든 집안일<br />해결해 드립니다</p>
          </div>
        </div>
      </div>
      <div class="wrap-etc-section-announcement">
        <div class="wrap-etc-section-announcement__inner">
          <p class="font-light">
            아파트, 주택, 상가, 빌라 실내페인트 베란다 칠 옥상방수 :
          </p>
        </div>
      </div>
      <div class="clear-both"></div>
      <!--<p style="text-align: center;margin-top: 150px;margin-bottom: 100px;">-->
      <!--각종 내장수리 전문 해피 홈 리페어 / 내장수리는 해피 홈 리페어 / 010-8430-2253-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
};
</script>

<style lang="scss" scoped>
    $section-width-and-height: $contents-width / 2;
    .sections {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: 10px;
        /*margin-bottom: 50px;*/
        &__inner {
            width: $contents-width;
            margin: 0 auto;
            .wrap-window-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_window.png') center;
                float: left;
                &__inner {
                    font-family: TmonMonsori;
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: $hhr-deep-gray;
                        font-size: 45px;
                        line-height: 60px;
                    }
                }
            }
            .wrap-window-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        padding-left: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-door-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_door.png') center;
                &__inner {
                    font-family: TmonMonsori;
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: steelblue;
                        font-size: 45px;
                        line-height: 60px;
                    }
                }
            }
            .wrap-door-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: right;
                        padding-right: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-paint-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: left;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_painting.png') center;
                &__inner {
                    font-family: TmonMonsori;
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: #FFDD2E;
                        font-size: 45px;
                        line-height: 60px;
                    }
                }
            }
            .wrap-paint-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: left;
                        padding-left: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
            .wrap-etc-section {
                width: $section-width-and-height;
                height: $section-width-and-height;
                background-size: 100% 100%;
                background: url('~@/assets/images/products/fixed_tools.png') center;
                float: right;
                &__inner {
                    font-family: TmonMonsori;
                    width: 100%;
                    height: 100%;
                    padding: 20px;
                    background-color: rgba(211, 211, 211, 0.8);
                    transition: 0.3s;
                    &:hover {
                        cursor: pointer;
                        background: none;
                        &__snippet {
                            display: none;
                        }
                    }
                    &__snippet {
                        color: black;
                        font-size: 45px;
                        line-height: 60px;
                    }
                }
            }
            .wrap-etc-section-announcement {
                width: $section-width-and-height;
                height: $section-width-and-height;
                float: right;
                &__inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    p {
                        width: 100%;
                        text-align: right;
                        padding-right: 15px;
                        padding-bottom: 10px;
                        letter-spacing: 2px;
                    }
                }
            }
        }
    }
</style>
