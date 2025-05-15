<script lang="ts" setup>
import { type Service } from '@/services/providerService'

defineProps<{
  service: Service
}>()

const emit = defineEmits<{
  (e: 'book', serviceId: number): void
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-lg font-medium text-gray-900">{{ service.name }}</h3>
        <p class="mt-1 text-sm text-gray-500">{{ service.duration }}</p>
      </div>
      <div class="text-right">
        <p class="text-lg font-medium text-gray-900">{{ service.price }}</p>
      </div>
    </div>
    <p class="mt-4 text-gray-600">{{ service.description }}</p>
    <div class="mt-6">
      <button
        @click="emit('book', service.id)"
        class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
      >
        Reservar
      </button>
    </div>
  </div>
</template>
