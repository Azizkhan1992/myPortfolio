<template>
  <div class="portfolioContainer">
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Портфолио</h2>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app"
          v-for="item in Portfolio" :key="item.id"
          >
            <div class="portfolio-wrap">
              <img :src="require('../assets/Content/images/Portfolio/' + item.img)" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ item.title }}</h4>
                <p v-if="item.isDesc">Desctop</p>
              </div>
              <div class="portfolio-links">
                <!-- <a :href="item.link" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a> -->
                <a :href="item.link" :title="item.title"><i class="bi bi-plus-square"></i></a>
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
  name: "app-portfolio",
  data() {
    return {
      Portfolio: this.$store.state.portfolio,
    };
  },
  methods: {
    getTopOne() {
      this.offTop = document.getElementById("1").offsetTop;
    },
    getTopTwo() {
      this.offTopCen = document.getElementById("5").offsetTop;
    },
    getTopThree() {
      this.offBottom = document.getElementById("12").offsetTop;
    },
    goToSite(link) {
      window.open(link, "_blank");
    },

    pageResize() {
      if (window.innerWidth <= 899) {
        this.isWindow = true;
      } else {
        this.isWindow = false;
      }
    },
    play() {
      setInterval(() => {
        this.animation();
      }, 5000);
    },
    animation() {
      let imgs = [],
        item = {};
      this.Portfolio.forEach((element) => {
        imgs = element.imgs;
        item = imgs.shift();
        imgs.push(item);
      });
      // console.log(imgs)
    },
    selectPortfolio(item) {
      this.itemId = item.id;
      this.isModal = true;
    },
    mDeactive() {
      this.isModal = false;
    },
  },
};
</script>
<style lang="scss">
.portfolio .portfolio-wrap .portfolio-links a:hover{
  color: #0563bb !important;
}

.portfolio .portfolio-wrap:hover .portfolio-links{
  bottom: calc(40% - 50px) !important;
}

@media screen and (min-width: 990px) and (max-width: 1100px) {
  .mPortfolioWr {
    .portfolioItems {
      .pSliderWr {
        .slideItems {
          &.hidden-l {
            margin-left: -290px !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 899px) {
  .mPortfolioWr {
    padding: 4px;
    box-sizing: border-box;

    .portfolioItems {
      // width: calc(100% - 12px);
      width: 100% !important;

      .pSliderWr {
        margin-left: 12px;
        height: calc(75% -12px) !important;

        .slideItems {
          &.hidden-l {
            margin-left: -520px;
          }
        }
      }
    }
  }
}
</style>
