<template>
    <div class="navbar bg-neutral">
        <select data-choose-theme>
            <option v-for="theme in themes" :key="theme" :value="theme">
                {{ theme }}
            </option>
        </select>
        <!-- <select></select> -->
    </div>
</template>
<script setup lang="ts">
    import { themes } from '~/utils/themes';
</script>
