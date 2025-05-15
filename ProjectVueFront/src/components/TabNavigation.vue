<script lang="ts" setup>
defineOptions({
  name: 'TabNavigation',
})

interface Tab {
  id: string
  label: string
}

interface Props {
  tabs: Tab[]
  modelValue: string
}

defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="border-b border-gray-200">
    <nav class="-mb-px flex space-x-8">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="emit('update:modelValue', tab.id)"
        :class="[
          modelValue === tab.id
            ? 'border-indigo-500 text-indigo-600'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
        ]"
      >
        {{ tab.label }}
      </button>
    </nav>
  </div>
</template>
