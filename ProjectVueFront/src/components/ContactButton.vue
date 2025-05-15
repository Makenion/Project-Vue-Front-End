<script lang="ts" setup>
interface Props {
  type: 'call' | 'message' | 'schedule'
  label: string
  color: 'green' | 'blue' | 'indigo'
}

defineProps<Props>()

const getIcon = (type: Props['type']) => {
  switch (type) {
    case 'call':
      return 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    case 'message':
      return 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
    case 'schedule':
      return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  }
}

const getColorClasses = (color: Props['color']) => {
  switch (color) {
    case 'green':
      return 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
    case 'blue':
      return 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    case 'indigo':
      return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
  }
}
</script>

<template>
  <button
    :class="[
      'w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out',
      getColorClasses(color),
    ]"
  >
    <svg
      class="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(type)" />
    </svg>
    {{ label }}
  </button>
</template>
