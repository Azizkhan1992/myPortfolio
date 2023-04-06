<template>
  <header class="header">
    <section
      id="hero"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <h1>{{ $t('welcome') }}</h1>
      <h2>{{ $t('myjob') }}</h2>
      <a href="#about" class="btn-get-started "
        ><i class="bi bi-chevron-double-down"></i
      ></a>
    </section>

    <header id="header" class="d-flex align-items-center">
      <div class="nav_container container d-flex align-items-center">
        <div class="logo">
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav
          id="navbar"
          class="navbar"
          :class="isDrop ? 'navbarDeactive' : 'navbarActive'"
        >
          <ul :class="isDrop ? 'dropDeactive' : 'dropActive'">
            <li><a class="nav-link scrollto active" href="#hero">{{ $t('home') }}</a></li>
            <li><a class="nav-link scrollto" href="#about">{{ $t('about') }}</a></li>
            <li><a class="nav-link scrollto" href="#resume">{{ $t('resume') }}</a></li>
            <li>
              <a class="nav-link scrollto" href="#portfolio">{{ $t('portfolio') }}</a>
            </li>

            <li><a class="nav-link scrollto" href="#contact">{{ $t('contact') }}</a></li>
          </ul>
          <i
            class="bi mobile-nav-toggle drop-icon"
            :class="isDrop ? 'bi-justify' : 'bi-x-square-fill'"
            @click="changeDrop"
          ></i>
        </nav>
        <!-- .navbar -->

        <div class="portfolio_language">
          <div class="lang_visible" @click="isLang = !isLang">
            <span>{{ default_lang.name }}</span>
            <i class="bi bi-chevron-down"></i>
          </div>

          <div class="lang_hidden" :class="isLang ? 'open' : 'close'">
            <div class="lang_items" v-for="lang in languages" :key="lang.id" @click="changeLang(lang)">
              <span>{{ lang.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </header>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      isDrop: true,
      languages: [
        {
          id: 1,
          name: 'O\'zbek',
          code: 'uz'
        },
        {
          id: 2,
          name: 'Русский',
          code: 'ru'
        },
        {
          id: 3,
          name: 'English',
          code: 'en'
        },
        {
          id: 4,
          name: 'Türkçe',
          code: 'tr'
        }
      ],
      default_lang: {
        code: 'ru',
        name: 'Русский'
      },
      isLang: false
    };
  },
  methods: {
    changeDrop() {
      this.isDrop = !this.isDrop;
    },
    changeLang(lang){
      this.default_lang = lang
      this.$i18n.locale = lang.code
      this.isLang = false
    }
  },
};
</script>
<style lang="scss">
.nav_container{
  justify-content: flex-end;
  column-gap: 12px;
}

.portfolio_language{
  position: relative;

  .lang_hidden{
    position: absolute;
    top: 28px;
    transform-origin: top;
    transition: 0.24s linear;

    &.close{
      transform: scaleY(0);
    }

    &.open{
      transform: scaleX(1);
    }

    .lang_items{
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      
      &:hover{
        background: #0563bb;
        color: #fff;
      }

      span{
        font-size: 0.85rem;
        line-height: 125%;
        font-weight: 500;
      }
    }
  }
}

.lang_visible{
  display: flex;
  align-items: center;
  column-gap: 6px;
  cursor: pointer;

  span{
    font-size: 0.85rem;
  }
}
#hero .btn-get-started:hover{
  color: #0563bb !important;
}
.navbarActive {
  max-height: 300px;
  position: fixed !important;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 21, 29, 0.6);
  transition: 0.3s;
  z-index: 998;
}
.dropActive {
  display: block !important;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 10px;
  overflow-y: auto;
  transition: 0.3s;
  background: #fff;
}

.bi-x-square-fill {
  position: absolute;
  top: 10px !important;
  right: 10px !important;
  background: #fff;
  border-radius: 4px;
}

.nav-link {
  &:hover {
    color: #0563bb !important;
  }

  &.active {
    color: #0563bb !important;
  }
}
</style>
