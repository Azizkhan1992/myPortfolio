<template>
  <div class="header">
    <section
      id="hero"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <h1>Привет, меня зовут Азиз!</h1>
      <h2>Я веб-разработчик</h2>
      <a href="#about" class="btn-get-started "
        ><i class="bi bi-chevron-double-down"></i
      ></a>
    </section>

    <header id="header" class="d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
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
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#resume">Resume</a></li>
            <li>
              <a class="nav-link scrollto" href="#portfolio">Portfolio</a>
            </li>

            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i
            class="bi mobile-nav-toggle drop-icon"
            :class="isDrop ? 'bi-justify' : 'bi-x-square-fill'"
            @click="changeDrop"
          ></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      isDrop: true,
    };
  },
  methods: {
    changeDrop() {
      this.isDrop = !this.isDrop;
    },
  },
};
</script>
<style lang="scss">
#hero .btn-get-started:hover{
  color: #0563bb !important;
}
.navbarActive {
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
