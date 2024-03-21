<template>
    <button type="submit">
        {{ msg }}
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