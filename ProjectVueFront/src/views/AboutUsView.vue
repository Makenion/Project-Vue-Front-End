<script setup lang="ts">
const companyValues = [
  {
    title: 'Conectamos Servicios',
    icon: '🤝',
    description:
      'Unificamos todos los servicios en una plataforma accesible, facilitando la conexión entre prestadores y usuarios.',
  },
  {
    title: 'Precios Justos',
    icon: '💰',
    description:
      'Promovemos la transparencia en los precios y fomentamos una competencia justa en el mercado.',
  },
  {
    title: 'Verificación de Calidad',
    icon: '✅',
    description:
      'Garantizamos la autenticidad y calidad de los servicios a través de un riguroso proceso de verificación.',
  },
  {
    title: 'Comunidad Confiable',
    icon: '👥',
    description: 'Construimos una comunidad basada en la confianza y la satisfacción mutua.',
  },
]

const statistics = [
  { number: '10K+', label: 'Servicios Verificados' },
  { number: '50K+', label: 'Usuarios Activos' },
  { number: '95%', label: 'Satisfacción' },
  { number: '24/7', label: 'Soporte' },
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-blue-600 mb-6">Quiénes Somos</h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        Somos una plataforma innovadora que revoluciona la forma en que las personas encuentran y
        ofrecen servicios. Nuestra misión es crear un ecosistema donde la calidad, la confianza y la
        accesibilidad sean los pilares fundamentales.
      </p>
    </div>

    <!-- Nuestra Historia -->
    <div class="bg-white rounded-xl shadow-lg p-8 mb-16">
      <h2 class="text-2xl font-semibold text-blue-600 mb-6">Nuestra Historia</h2>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p class="text-gray-700 mb-4">
            Nacimos de la necesidad de crear un espacio donde los servicios pudieran ser encontrados
            y ofrecidos de manera transparente y confiable. En un mundo donde la economía
            colaborativa crece día a día, vimos la oportunidad de crear una plataforma que unifique
            todos los servicios en un solo lugar.
          </p>
          <p class="text-gray-700">
            Nuestro compromiso es conectar a personas talentosas con quienes necesitan sus
            servicios, asegurando que cada interacción sea segura, verificada y satisfactoria para
            ambas partes.
          </p>
        </div>
        <div class="bg-blue-50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-blue-600 mb-4">Nuestra Visión</h3>
          <p class="text-gray-700">
            Aspiramos a ser la plataforma líder en la conexión de servicios, donde la calidad y la
            confianza sean garantizadas, y donde cada persona pueda encontrar exactamente lo que
            necesita a un precio justo.
          </p>
        </div>
      </div>
    </div>

    <!-- Valores -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-blue-600 mb-8 text-center">Nuestros Valores</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="value in companyValues"
          :key="value.title"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-semibold text-blue-600 mb-3">{{ value.title }}</h3>
          <p class="text-gray-700">{{ value.description }}</p>
        </div>
      </div>
    </div>

    <!-- Estadísticas -->
    <div class="bg-blue-600 text-white rounded-xl p-8 mb-16">
      <div class="grid md:grid-cols-4 gap-8">
        <div v-for="stat in statistics" :key="stat.label" class="text-center">
          <div class="text-3xl font-bold mb-2">{{ stat.number }}</div>
          <div class="text-blue-100">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Proceso de Verificación -->
    <div class="bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-semibold text-blue-600 mb-6">Nuestro Proceso de Verificación</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-blue-50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-blue-600 mb-3">1. Validación de Identidad</h3>
          <p class="text-gray-700">
            Verificamos la identidad de cada prestador de servicios para garantizar la seguridad de
            nuestra comunidad.
          </p>
        </div>
        <div class="bg-blue-50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-blue-600 mb-3">2. Evaluación de Calidad</h3>
          <p class="text-gray-700">
            Analizamos la calidad de los servicios ofrecidos a través de un sistema de
            calificaciones y reseñas.
          </p>
        </div>
        <div class="bg-blue-50 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-blue-600 mb-3">3. Monitoreo Continuo</h3>
          <p class="text-gray-700">
            Realizamos un seguimiento constante para mantener los estándares de calidad y
            satisfacción.
          </p>
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
