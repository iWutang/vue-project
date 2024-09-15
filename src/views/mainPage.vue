<template>
    <home />
    <services />
    <Projects />
    <Contact />
</template>

<script setup>
import home from '@/components/home.vue'
import Projects from '@/components/projects.vue';
import services from '@/components/services.vue';
import Contact from '@/components/contact.vue';


import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const search = computed({
    get() {
        return route.query.search ?? ''
    },
    set(search) {
        router.replace({ query: {search} })
    }
})

</script>

<style>

</style>