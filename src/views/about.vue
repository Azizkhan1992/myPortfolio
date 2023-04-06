<template>
  <div class="aboutContainer">
    <section id="about" class="about">
      <div class="container">
        <div class="row no-gutters">
          <div
            class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
          ></div>
          <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <h3>{{ $t('title_about') }}</h3>
              <p>
                {{ $t('desc_about') }}
              </p>
              <div class="personTitle">
                <!-- <h2 class="commonT">{{ $t('developer') }}</h2> -->

                <div class="titleContent mt-12">
                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">{{ $t('birth_day') }}: <i>6 {{ $t('month') }} 1992</i></p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">{{ $t('age') }}: <i>30</i></p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <a class="descP" href="tel: +998 (93) 661-45-77">{{ $t('phone') }}: <i>+998 (93) 661 - 45 - 77</i></a>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">
                      {{ $t('step') }}: <i>{{ $t('degree') }}</i> 
                    </p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">{{ $t('address') }}: <i>{{ $t('city') }}</i></p>
                  </div>

                  <div class="titleItem titleMail">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <a
                      class="descP"
                      href="mailto:azizkhannasrullayev1992@gmail.com"
                      >{{ $t('mail') }}: <i>azizkhannasrullayev1992@gmail.com</i></a
                    >
                  </div>
                </div>

                <!-- <p class="descP">{{ $t('myself.about') }</p> -->
              </div>
            </div>
            <!-- End .content-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Icons from "@/components/commons/Icons.vue";
export default {
  name: "app-about",
  components: { Icons },
};
</script>
<style lang="scss">
.content {
  row-gap: 12px !important;
}
.titleContent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;

  .titleItem {
    width: 50%;
    display: flex;
    align-items: center;
    column-gap: 12px;

    &.titleMail{
      height: fit-content;
      word-break: break-all;
    }

    p {
      font-weight: bolder;

      i {
        font-weight: 400;
        font-style: normal;
      }
    }
    a {
      color: #212529;
      text-decoration: none;
      font-weight: bolder;

      i {
        font-weight: 400;
        font-style: normal;
      }
    }
  }
}
</style>
