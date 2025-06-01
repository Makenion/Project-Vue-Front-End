<script setup lang="ts">
const privacySections = [
  {
    title: 'Recopilación de Datos',
    icon: '📊',
    content:
      'Solo recopilamos la información necesaria para brindar nuestros servicios. Esto incluye:',
    items: [
      'Información de contacto (email, nombre)',
      'Datos de la cuenta',
      'Preferencias de usuario',
    ],
  },
  {
    title: 'Almacenamiento Seguro',
    icon: '🔒',
    content: 'Sus datos están protegidos mediante:',
    items: [
      'Encriptación de extremo a extremo',
      'Servidores seguros con certificación SSL',
      'Copias de seguridad regulares',
    ],
  },
  {
    title: 'Uso de Datos',
    icon: '🎯',
    content: 'Utilizamos sus datos para:',
    items: [
      'Mejorar nuestros servicios',
      'Personalizar su experiencia',
      'Comunicarnos con usted sobre actualizaciones importantes',
    ],
  },
  {
    title: 'Sus Derechos',
    icon: '👤',
    content: 'Como usuario, usted tiene derecho a:',
    items: [
      'Acceder a sus datos personales',
      'Solicitar la eliminación de sus datos',
      'Actualizar su información cuando lo desee',
    ],
  },
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-center mb-8 text-blue-600">
      Política de Privacidad y Protección de Datos
    </h1>

    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <p class="text-lg text-gray-700 mb-6">
        En nuestra plataforma, la privacidad y seguridad de sus datos es nuestra máxima prioridad.
        Nos comprometemos a proteger su información personal y a ser transparentes sobre cómo la
        utilizamos.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="section in privacySections"
        :key="section.title"
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <div class="flex items-center mb-4">
          <span class="text-3xl mr-3">{{ section.icon }}</span>
          <h2 class="text-xl font-semibold text-blue-600">{{ section.title }}</h2>
        </div>
        <p class="text-gray-700 mb-4">{{ section.content }}</p>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-8 bg-blue-50 rounded-lg p-6">
      <h3 class="text-xl font-semibold text-blue-600 mb-4">¿Tiene preguntas?</h3>
      <p class="text-gray-700">
        Si tiene alguna pregunta sobre cómo protegemos sus datos o desea ejercer sus derechos, no
        dude en contactarnos a través de nuestro formulario de contacto o enviando un email a
        <a href="mailto:privacy@miapp.com" class="text-blue-600 hover:underline"
          >privacy@miapp.com</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.list-disc li {
  position: relative;
  padding-left: 1.5rem;
}

.list-disc li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3b82f6;
}
</style>
