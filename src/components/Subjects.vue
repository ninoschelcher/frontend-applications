<template>
 <p v-for="subject in subjects" :key="subject">{{subject.text}}</p>
</template>

<script>
export default {
    data() {
        return {
            subjects: [
                { text: 'Functional Programming' },
                { text: 'Front-end Data' },
                { text: 'Front-end Applications' }
            ]
        }
    }
};
</script>

<style scoped>
 p {
     color:#fff;
 }
</style>