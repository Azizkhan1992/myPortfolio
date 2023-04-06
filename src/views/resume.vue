<template>
    <div class="resumeContainer">
        <section id="resume" class="resume section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Резюме</h2>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Общая информация</h3>
            <div class="resume-item pb-0 resumeWr">
              <h4>Азиз Насруллаев</h4>
              <p><em>У меня есть опыт работы чуть больше года с FrontEnd веб-программированием с нуля до конца, работая с Figma.</em></p>
              <p>
              <ul>
                <li>
                  Узбекистан, Ташкент</li>
                <li><a class="descP" href="tel: +998 (93) 661-45-77">+998 (93) 661-45-77</a></li>
                <li><a class="descP" href="mailto: azizkhannasrullayev1992@gmail.com">azizkhannasrullayev1992@gmail.com</a></li>
              </ul>
              </p>
            </div>

            <h3 class="resume-title">Образование</h3>
            <div class="resume-item resumeWr">
              <h4>
              ИНСТИТУТ ИНЖЕНЕРОВ ЖЕЛЕЗНОДОРОЖНОГО ТРАНСПОРТА</h4>
              <h5>2011 - 2015</h5>
              <p>Бакалавр электромеханик СЦБ на железных дорогах</p>
            </div>
          </div>

          <div class="col-lg-6">
            <h3 class="resume-title">Профессиональный опыт</h3>
            <div class="resume-item resumeWr">
              <h4>FrontEnd веб разработчик</h4>
              <h5>06/2022 - настоящее время</h5>
              <!-- <p><em>O'zbekiston, Toshkent</em></p> -->
              <p>
              <ul>
                <li>FrontEnd Web-разработчик в ГУП «Автоматизация и цифровизация» при Министерстве туризма и культуры</li>
              </ul>
              </p>
            </div>
            <div class="resume-item resumeWr">
              <h4>FrontEnd веб разработчик</h4>
              <h5>10/2021 - 06/2022</h5>
              <p>
              <ul>
                <li>Фриланс</li>
              </ul>
              </p>
            </div>
            <div class="resume-item resumeWr">
              <h4>ЖЕЛЕЗНОДОРОЖНЫЙ ИНЖЕНЕР</h4>
              <h5>2015 - 2022</h5>
              <p>
              <ul>
                <li>Инженер-электромеханик автоматики и управления / Бухарский областной железнодорожный узел Навоийская дальность связи и сигнализации</li>
              </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
</template>
<script>
import Scroll from '../mixins/scrollPosition'
export default{
    name: 'app-resume',
    mixins: [Scroll('scrollY')],
    watch: {
        'scrollY': function(val){
            // console.log(val)
            let items = document.getElementsByClassName('resumeWr')
            // console.log(items)
            if(val >= 1250 && val <= 3000){
                Array.from(items).forEach(elem => {
                    elem.classList.add('open')
                })
            } else {
                Array.from(items).forEach(elem => {
                    elem.classList.remove('open')
                })
            }
        }
    }
}
</script>
<style lang="scss">
li>a{
    text-decoration: none;
    color: #212529;
    font-size: 1rem;
}
.resume-item{
    border-left: 2px solid #0563bb !important;

    &::before{
        border: 2px solid #0563bb !important;
    }
}

.resumeWr{
            transform: scaleY(0);
            transition: 0.64s ease-in-out;
            transform-origin: top;

            &.open{
                transform: scaleY(1);
            }
        }
</style>