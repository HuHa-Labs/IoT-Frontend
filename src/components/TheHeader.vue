<script setup lang="ts">
import { inject } from 'vue';
const msg = inject("count");
</script>
<template>
<header>
		<nav>
      {{ msg }}
		</nav>
</header>
</template>
