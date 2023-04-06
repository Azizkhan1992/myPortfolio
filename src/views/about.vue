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
              <h3>Фронтенд веб-разработчик</h3>
              <p>
                Меня зовут Азиз. Мне 30 лет. Я веб-разработчик
                Работаю в направлениях frontEnd и backEnd. В интерфейсе использую
                CSS/SCSS, Bootstrap (Vuetify, Ant-design), JavaScript (TypeScript),  Vue (middle).
              </p>
              <div class="personTitle">
                <!-- <h2 class="commonT">{{ $t('developer') }}</h2> -->

                <div class="titleContent mt-12">
                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">День рождения: <i>6 июль 1992</i></p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">Возрасть: <i>30</i></p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <a class="descP" href="tel: +998 (93) 661-45-77">Телефон: <i>+998 (93) 661 - 45 - 77</i></a>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">
                      Степень: <i>FrontEnd: middle</i> 
                    </p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <p class="descP">Адрес: <i>Ташкент</i></p>
                  </div>

                  <div class="titleItem">
                    <Icons icon="rightArr" color="#0563bb" stroke="#0563bb" />
                    <a
                      class="descP"
                      href="mailto:azizkhannasrullayev1992@gmail.com"
                      >Э-почта: <i>azizkhannasrullayev1992@gmail.com</i></a
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
