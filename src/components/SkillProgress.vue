<template>
    <div class="progress">
        <span class="skill">{{ skillName }} <i class="val">{{ maxSkill }}%</i></span>
        <div class="progress-bar-wrap">
        <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            :aria-valuemax="maxSkill"
            :style="{ width: `${skill + '%'}` }"
        ></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'skill-progress',
    props: {
        skill: {
            type: Number,
            required: true
        },
        skillName: {
            type: String,
            default: 'Skill Name'
        },
        maxSkill: {
            type: [Number, String],
            default: 100
        }
    },
}
</script>