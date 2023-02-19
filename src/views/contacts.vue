<template>
  <div class="contactsContainer">
    <section id="contact" class="contact section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="d-flex flex-column-reverse contactWr">
          <div class="col-lg-4 col-md-4">
            <div class="contact-about">
              <div class="social-links">
                <a @click="goToLink('https://t.me/UzbNAU')" class="twitter"
                  ><i class="bi bi-telegram"></i
                ></a>
                <a
                  @click="goToLink('https://www.linkedin.com/feed/')"
                  class="linkedin"
                  ><i class="bi bi-linkedin"></i
                ></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 Cont">
            <div class="info">
              <div class="d-flex align-items-center">
                <i class="bi bi-geo-alt"></i>
                <p>Tashkent, O'zbekiston</p>
              </div>

              <div class="d-flex align-items-center contactItem">
                <i class="bi bi-envelope"></i>
                <a href="mailto: azizkhannasrullayev1992@gmail.com"
                  >azizkhannasrullayev1992@gmail.com</a
                >
              </div>

              <div class="d-flex align-items-center contactItem">
                <i class="bi bi-phone"></i>
                <a href="tel: +998 (93) 661-45-77">+998 (93) 661-45-77</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "app-contacts",
  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss">
.Cont {
  width: 100% !important;
}
.info {
  display: flex;
  justify-content: space-between;

  i {
    color: #0563bb !important;
  }
}

.contactWr {
  row-gap: 24px;
}

.contactItem {
  a {
    text-decoration: none;
    color: #5a656e;
  }
}
.social-links {
  a {
    cursor: pointer;
    color: #0563bb !important;
    border: 1px solid #0563bb !important;

    &:hover {
      background: #0563bb !important;
    }

    &:hover i {
      color: #fff;
    }
  }
}

@media screen and (max-width: 768px) {
  .info {
    flex-direction: column;
    row-gap: 12px;
  }
}
</style>
