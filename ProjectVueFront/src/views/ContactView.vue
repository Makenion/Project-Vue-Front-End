<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
})

const contactInfo = [
  {
    icon: '📍',
    title: 'Ubicación',
    content: 'San Alfonso 550 Parcela C24, Limache, Chile',
    link: 'https://maps.google.com/?q=San+Alfonso+550+Parcela+C24+Limache+Chile',
  },
  {
    icon: '📞',
    title: 'Teléfono',
    content: '+56987654321',
    link: 'tel:+1234567890',
  },
  {
    icon: '✉️',
    title: 'Email',
    content: 'contacto@miapp.com',
    link: 'mailto:contacto@miapp.com',
  },
  {
    icon: '⏰',
    title: 'Horario',
    content: 'Lunes a Viernes: 9:00 - 18:00',
    link: null,
  },
]

const handleSubmit = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value)
  // Limpiar el formulario
  formData.value = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-blue-600 mb-6">Contáctanos</h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        Estamos aquí para ayudarte. Envíanos tus preguntas, sugerencias o comentarios y nos
        pondremos en contacto contigo lo antes posible.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Formulario de Contacto -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-blue-600 mb-6">Envíanos un mensaje</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              v-model="formData.nombre"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label for="asunto" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
            <input
              type="text"
              id="asunto"
              v-model="formData.asunto"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-1"
              >Mensaje</label
            >
            <textarea
              id="mensaje"
              v-model="formData.mensaje"
              required
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      <!-- Información de Contacto -->
      <div class="space-y-8">
        <!-- Tarjetas de Información -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="info in contactInfo"
            :key="info.title"
            class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-start space-x-4">
              <span class="text-3xl">{{ info.icon }}</span>
              <div>
                <h3 class="text-lg font-semibold text-blue-600">{{ info.title }}</h3>
                <a
                  v-if="info.link"
                  :href="info.link"
                  class="text-gray-700 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ info.content }}
                </a>
                <p v-else class="text-gray-700">{{ info.content }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mapa -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-semibold text-blue-600 mb-4">Nuestra Ubicación</h3>
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.0000000000005!2d-71.26666666666667!3d-33.016666666666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d8c0c0c0c0c0%3A0x0!2sSan+Alfonso+550%2C+Limache%2C+Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1645564750986!5m2!1ses!2scl"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              class="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transition-shadow {
  transition: all 0.3s ease;
}
</style>
