<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import RatingStars from '@/components/RatingStars.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import ContactButton from '@/components/ContactButton.vue'
import TabNavigation from '@/components/TabNavigation.vue'
import {
  providerService,
  type Provider,
  type Service,
  type Review,
} from '@/services/providerService'

const route = useRoute()
const provider = ref<Provider | null>(null)
const services = ref<Service[]>([])
const reviews = ref<Review[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const activeTab = ref('servicios')

const tabs = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'resenas', label: 'Reseñas' },
  { id: 'informacion', label: 'Información' },
]

// Función original para cargar datos, sin lógica de edición ni localStorage directo
const fetchProviderData = async () => {
  try {
    loading.value = true
    error.value = null
    const providerId = Number(route.params.id)

    // Obtener datos del proveedor (usando el servicio, que aún tiene mock data)
    // NOTA: Aquí es donde necesitaremos ajustar la lógica más adelante para cargar desde localStorage si es el perfil propio
    provider.value = await providerService.getProvider(providerId)

    // Obtener servicios
    services.value = await providerService.getProviderServices(providerId)

    // Obtener reseñas
    reviews.value = await providerService.getProviderReviews(providerId)
  } catch (err) {
    error.value = 'Error al cargar los datos del proveedor'
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
}

const handleBookService = async (serviceId: number) => {
  try {
    const providerId = Number(route.params.id)
    // Aquí podrías abrir un modal para seleccionar la fecha
    const date = new Date().toISOString()
    await providerService.bookService(providerId, serviceId, date)
    // Mostrar mensaje de éxito
  } catch (err) {
    console.error('Error al reservar el servicio:', err)
    // Mostrar mensaje de error
  }
}

onMounted(fetchProviderData)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Estado de carga -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>

    <!-- Estado de error -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ error }}</h2>
        <button
          @click="fetchProviderData"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>

    <!-- Contenido del perfil -->
    <template v-else-if="provider">
      <!-- Header del perfil -->
      <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <!-- Foto de perfil -->
            <div class="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <svg class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- Información principal -->
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">{{ provider.name }}</h1>
                  <p class="text-lg text-gray-600">{{ provider.specialty }}</p>
                </div>
                <div class="mt-4 md:mt-0 flex items-center space-x-4">
                  <RatingStars :rating="provider.rating" :total-reviews="provider.totalReviews" />
                  <button
                    class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Contactar
                  </button>
                </div>
              </div>

              <!-- Información adicional -->
              <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{{ provider.experience }}</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{{ provider.workZones.join(', ') }}</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Disponible ahora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Columna izquierda -->
          <div class="lg:w-2/3">
            <!-- Tabs de navegación -->
            <TabNavigation :tabs="tabs" v-model="activeTab" />

            <!-- Contenido de los tabs -->
            <div class="mt-8">
              <!-- Tab de Servicios -->
              <div v-if="activeTab === 'servicios'" class="space-y-6">
                <ServiceCard
                  v-for="service in services"
                  :key="service.id"
                  :service="service"
                  @book="handleBookService(service.id)"
                />
              </div>

              <!-- Tab de Reseñas -->
              <div v-if="activeTab === 'resenas'" class="space-y-6">
                <ReviewCard v-for="review in reviews" :key="review.id" :review="review" />
              </div>

              <!-- Tab de Información -->
              <div v-if="activeTab === 'informacion'" class="space-y-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">Sobre mí</h3>
                  <p class="text-gray-600">{{ provider.description }}</p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">Educación</h3>
                  <div class="space-y-4">
                    <div
                      v-for="edu in provider.education"
                      :key="edu.title"
                      class="flex justify-between"
                    >
                      <div>
                        <p class="font-medium text-gray-900">{{ edu.title }}</p>
                        <p class="text-gray-600">{{ edu.institution }}</p>
                      </div>
                      <p class="text-gray-500">{{ edu.year }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">Certificaciones</h3>
                  <div class="space-y-4">
                    <div
                      v-for="cert in provider.certifications"
                      :key="cert.name"
                      class="flex justify-between"
                    >
                      <div>
                        <p class="font-medium text-gray-900">{{ cert.name }}</p>
                        <p class="text-gray-600">{{ cert.issuer }}</p>
                      </div>
                      <p class="text-gray-500">{{ cert.year }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 class="text-lg font-medium text-gray-900 mb-4">Horario de atención</h3>
                  <div class="grid grid-cols-2 gap-4">
                    <div
                      v-for="(hours, day) in provider.availability"
                      :key="day"
                      class="flex justify-between"
                    >
                      <p class="font-medium text-gray-900 capitalize">{{ day }}</p>
                      <p class="text-gray-600">{{ hours }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna derecha -->
          <div class="lg:w-1/3">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-8">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Contacto</h3>
              <div class="space-y-4">
                <ContactButton type="call" label="Llamar ahora" color="green" />
                <ContactButton type="message" label="Enviar mensaje" color="blue" />
                <ContactButton type="schedule" label="Agendar cita" color="indigo" />
              </div>

              <div class="mt-6">
                <h4 class="text-sm font-medium text-gray-900 mb-2">Ubicación</h4>
                <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
                  <!-- Aquí iría el mapa -->
                  <div class="w-full h-full flex items-center justify-center text-gray-500">
                    Mapa de ubicación
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <h4 class="text-sm font-medium text-gray-900 mb-2">Idiomas</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="lang in provider.languages"
                    :key="lang"
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {{ lang }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.transition-shadow {
  transition: all 0.3s ease;
}
</style>
