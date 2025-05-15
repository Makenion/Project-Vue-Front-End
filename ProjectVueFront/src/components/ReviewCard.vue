<script lang="ts" setup>
import { type Review } from '@/services/providerService'
import RatingStars from './RatingStars.vue'

defineProps<{
  review: Review
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div class="flex items-start justify-between">
      <div>
        <h4 class="text-lg font-medium text-gray-900">{{ review.userName }}</h4>
        <p class="text-sm text-gray-500">{{ review.date }}</p>
      </div>
      <RatingStars :rating="review.rating" :size="'sm'" />
    </div>
    <p class="mt-2 text-gray-600">{{ review.comment }}</p>
    <div class="mt-4">
      <span
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
      >
        {{ review.service }}
      </span>
    </div>
  </div>
</template>
