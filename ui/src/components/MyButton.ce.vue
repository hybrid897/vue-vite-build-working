<template>
    <button class="bg-green text-white" type="submit">
        {{ msg }}
        HELLO NEW WORLD
        <slot>
            Submit <!-- fallback content -->
        </slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    msg: string
}>()

</script>

<!-- Needed for web component -->
<style>
@import url("../index.css");
</style>