<template>
  <div class="skillsContainer" id="skill">
    <section id="skills" class="skills section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Навыки</h2> 
        </div>

        <div class="row skills-content" v-if="progressData.length">
          <template v-for="(progress, idx) in progressData">
            <div class="col-lg-6" :key="idx">
              <skill-progress 
                :skill="progress.skill"
                :skill-name="progress.name"
                :max-skill="progress.maxValue"
              ></skill-progress>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Scroll from "../mixins/scrollPosition";
import SkillProgress from "@/components/SkillProgress.vue";
export default {
  name: "app-skills",
  components: {SkillProgress},
  data() {
    return {
      progressData: [
        {
          name: 'HTML',
          maxValue: 95,
          skill: 0,
          unique: 'html'
        },
        {
          name: 'CSS3, SCSS, Bootstrap',
          maxValue: 85,
          skill: 0,
          unique: 'scss'
        },
        {
          name: 'JavaScript',
          maxValue: 70,
          skill: 0,
          unique: 'js'
        },
        {
          name: 'Vue, Vue Router, Vuex, Nuxt',
          maxValue: 80,
          skill: 0,
          unique: 'vue'
        },
        {
          name: 'PHP',
          maxValue: 40,
          skill: 0,
          unique: 'php'
        },
        {
          name: 'Laravel, MySQL',
          maxValue: 50,
          skill: 0,
          unique: 'laravel'
        },
        {
          name: 'РЕШЕНИЕ ПРОБЛЕМ И РАБОТА НАД СОБОЙ',
          maxValue: 70,
          skill: 0,
          unique: 'soft'
        },
        {
          name: 'SOLID, DRY, KISS',
          maxValue: 55,
          skill: 0,
          unique: 'sdk'
        }
      ]
    };
  },
  mounted() {
    this.initSkills();
  },
  mixins: [Scroll("scrollY")],
  methods: {
    initSkills() {
      Object.values(this.progressData).forEach((el, index) => {
        this.getSkills(index);
      })
    },
    getSkills(index) {
      let playInterval = setInterval(() => {
        if (this.progressData[index]['skill'] < this.progressData[index].maxValue) {
          this.progressData[index]['skill']++;
        } else {
          clearInterval(playInterval);
        }
      }, 35);
    },
  },
  watch: {
    scrollY: function (val) {
      // console.log(val)
      let skill = document.getElementById("skill");
      if (val <= 500 || val >= 1600) {
        skill.classList.add("moveRight");

        setTimeout(() => {
          this.progressData.forEach(el => {
            el.skill = 0
          })
        }, 100);
      } else {
        skill.classList.remove("moveRight");
        this.initSkills()
      }
    },
  },
};
</script>
<style lang="scss">
.progress-bar-wrap{
  background: #e9ecef !important;

}
.skills .progress-bar{
  height: 8px !important;
  background-color: #0563bb !important;
}
.row {
  row-gap: 6px;
}
.section-title h2::after {
  background: #0563bb !important;
}
span.skill {
  margin: 0 !important;
  padding: 0 0 10px 0 !important;
}
.skillBox {
  width: 100%;
  height: 6px;
  background: #e9ecef;

  .skillItem {
    height: 100%;
    transition: width 1s linear;
    background: #0563bb;
    position: relative;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid #0563bb;
      position: absolute;
      left: 100%;
    }
  }
}
</style>
