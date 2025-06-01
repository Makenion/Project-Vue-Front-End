<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'

const router = useRouter()
const user = ref<null | { id?: number; type?: string }>(null)

onMounted(() => {
  const stored = localStorage.getItem('user')
  user.value = stored ? JSON.parse(stored) : null
})

function logout() {
  localStorage.removeItem('user')
  location.reload()
}

const isLoggedIn = computed(() => !!user.value)
const isProvider = computed(() => user.value && user.value.type === 'provider')
const providerId = computed(() => user.value && user.value.id)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-blue-600 text-white shadow-md">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <RouterLink to="/" class="flex items-center">
              <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
            </RouterLink>
            <h1 class="ml-4 text-xl font-bold">Mi Aplicación</h1>
          </div>
          <nav class="space-x-4 flex items-center">
            <RouterLink to="/" class="hover:text-blue-200 transition-colors">Inicio</RouterLink>
            <template v-if="isLoggedIn">
              <button @click="logout" class="hover:text-blue-200 transition-colors">
                Cerrar sesión
              </button>
              <button
                v-if="isProvider"
                @click="router.push(`/provider/${providerId}`)"
                class="hover:text-blue-200 transition-colors"
              >
                Perfil
              </button>
            </template>
            <template v-else>
              <RouterLink to="/login" class="hover:text-blue-200 transition-colors"
                >Iniciar Sesión</RouterLink
              >
            </template>
          </nav>
        </div>
      </div>
    </header>

    <!-- Contenido Principal -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
        <div>
          <h3 class="font-bold text-lg mb-4">CONTÁCTANOS</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fas fa-envelope mr-2"></i>
              <span>contacto@miapp.com</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-2"></i>
              <span>+1234567890</span>
            </li>
            <li class="flex items-center">
              <i class="fab fa-whatsapp mr-2"></i>
              <span>+56987654321</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2 mt-1"></i>
              <span>San Alfonso 550 Parcela C24, Limache, Chile</span>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4 md:items-end">
          <nav class="mb-4">
            <ul class="flex flex-col md:flex-row gap-2 md:gap-6">
              <li>
                <RouterLink to="/privacy" class="hover:underline"
                  >Política de Privacidad</RouterLink
                >
              </li>
              <li><RouterLink to="/about" class="hover:underline">Quiénes Somos</RouterLink></li>
              <li><RouterLink to="/contact" class="hover:underline">Contacto</RouterLink></li>
            </ul>
          </nav>
          <div class="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              class="hover:text-pink-400 transition text-xl"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              class="hover:text-blue-400 transition text-xl"
              ><i class="fab fa-x-twitter"></i
            ></a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              class="hover:text-blue-300 transition text-xl"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
