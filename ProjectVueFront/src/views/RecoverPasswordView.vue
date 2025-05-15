<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const isEmailSent = ref(false)
const isLoading = ref(false)

const handleSubmit = async () => {
  try {
    isLoading.value = true
    // Aquí iría la lógica para enviar el correo de recuperación
    console.log('Enviando correo de recuperación a:', email.value)
    // Simulamos un delay para mostrar el estado de carga
    await new Promise((resolve) => setTimeout(resolve, 1500))
    isEmailSent.value = true
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
      <div>
        <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">Recuperar Contraseña</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Ingresa tu correo electrónico y te enviaremos las instrucciones para recuperar tu
          contraseña
        </p>
      </div>

      <!-- Formulario de recuperación -->
      <form v-if="!isEmailSent" class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <div class="mt-1">
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <button
            type="button"
            @click="goToLogin"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
          >
            Volver al inicio de sesión
          </button>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            {{ isLoading ? 'Enviando...' : 'Enviar instrucciones' }}
          </button>
        </div>
      </form>

      <!-- Mensaje de éxito -->
      <div v-else class="mt-8 space-y-6">
        <div class="rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg
                class="h-5 w-5 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-green-800">Correo enviado exitosamente</h3>
              <div class="mt-2 text-sm text-green-700">
                <p>
                  Hemos enviado las instrucciones para recuperar tu contraseña a {{ email }}. Por
                  favor, revisa tu bandeja de entrada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="goToLogin"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
        >
          Volver al inicio de sesión
        </button>
      </div>
    </div>
  </div>
</template>
