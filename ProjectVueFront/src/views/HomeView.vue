<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white relative">
    <div class="max-w-3xl w-full mx-auto p-8 rounded-xl shadow-2xl bg-white/80 mt-16">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-2">
        Encuentra tu especialista y pide cita
      </h1>
      <p class="text-center text-lg text-gray-700 mb-6">
        Más de 60,000 profesionales de todas las áreas están aquí para ayudarte.
      </p>
      <div class="flex justify-center mb-6 gap-2">
        <button
          class="px-4 py-2 rounded-full font-medium flex items-center gap-2 bg-blue-600 text-white"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4zm2 2h8v2H6V7zm0 4h5v2H6v-2z"
            />
          </svg>
          Visita presencial
        </button>
      </div>
      <div class="flex flex-col md:flex-row gap-2">
        <input
          v-model="especialidad"
          class="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          placeholder="Especialidad, servicio o nombre"
        />
        <input
          v-model="ubicacion"
          class="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          placeholder="Ciudad o comuna"
        />
        <button
          class="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          @click="buscar"
        >
          Buscar
        </button>
      </div>
    </div>
    <!-- Imagen o ilustración -->
    <img
      src="https://cdn.pixabay.com/photo/2017/01/31/13/14/avatar-2026510_1280.png"
      alt="Profesionales"
      class="absolute bottom-0 right-0 w-1/2 max-w-lg pointer-events-none opacity-80"
    />

    <!-- Sección de perfiles destacados -->
    <div class="w-full max-w-6xl mx-auto mt-20 px-4">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Profesionales destacados</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="pro in profesionales"
          :key="pro.id"
          class="bg-white rounded-xl shadow p-6 flex flex-col justify-between"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              :src="pro.avatar"
              alt="avatar"
              class="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ pro.nombre }}</h3>
              <p class="text-sm text-gray-600">{{ pro.especialidad }} · {{ pro.ciudad }}</p>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg p-4 mb-4">
            <div class="flex items-center gap-2 mb-1">
              <span class="font-medium text-gray-800">{{ pro.resena.nombreCliente }}</span>
              <span class="flex items-center">
                <svg
                  v-for="n in 5"
                  :key="n"
                  class="w-4 h-4"
                  :class="n <= pro.resena.estrellas ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"
                  />
                </svg>
              </span>
            </div>
            <p class="text-gray-600 text-sm italic">"{{ pro.resena.comentario }}"</p>
          </div>
          <button
            @click="verPerfil(pro.id)"
            class="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

const especialidad = ref('')
const ubicacion = ref('')
// const router = useRouter()

function buscar() {
  // Aquí puedes redirigir a la página de resultados o filtrar
  // Por ejemplo:
  // router.push({ name: 'search', query: { especialidad: especialidad.value, ubicacion: ubicacion.value, modalidad: 'presencial' } })
  alert(`Buscar: ${especialidad.value}, ${ubicacion.value}, modalidad: presencial`)
}

const profesionales = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    especialidad: 'Carpintero',
    ciudad: 'Santiago',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    resena: {
      nombreCliente: 'María',
      estrellas: 5,
      comentario: 'Excelente trabajo, muy profesional y rápido.',
    },
  },
  {
    id: 2,
    nombre: 'Ana Torres',
    especialidad: 'Diseñadora Gráfica',
    ciudad: 'Valparaíso',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    resena: {
      nombreCliente: 'Carlos',
      estrellas: 4,
      comentario: 'Muy creativa y cumplió con los plazos.',
    },
  },
  {
    id: 3,
    nombre: 'Pedro Gómez',
    especialidad: 'Electricista',
    ciudad: 'Concepción',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    resena: {
      nombreCliente: 'Lucía',
      estrellas: 5,
      comentario: 'Solucionó el problema en minutos, recomendado.',
    },
  },
]

function verPerfil(id: number) {
  // Aquí puedes redirigir al perfil real
  // router.push(`/provider/${id}`)
  alert(`Ir al perfil del profesional con id: ${id}`)
}
</script>

<style scoped>
/* Puedes personalizar los estilos aquí */
</style>
