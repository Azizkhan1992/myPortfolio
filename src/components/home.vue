<template>
    <div class="home-container">
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio/>
        <Contacts/>
    </div>
</template>
<script>
import About from '@/views/about.vue';
import Skills from '@/views/skills.vue';
import Resume from '@/views/resume.vue';
import Portfolio from '@/views/portfolio.vue';
import Contacts from '@/views/contacts.vue';
export default{
    name: 'app-home',
    components: {About, Skills, Resume, Portfolio, Contacts}
}
</script>
