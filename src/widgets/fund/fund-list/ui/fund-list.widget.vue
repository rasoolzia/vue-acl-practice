<template>
  <fundFilter />
  <hr />
  <fundCard v-for="i in 10" :fund="{}" />
</template>

<script setup>
import { fundFilter } from '@/features';
import { fundCard } from '@/widgets';
</script>
