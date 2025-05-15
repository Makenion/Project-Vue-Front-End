<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface LoginForm {
  email: string
  password: string
}

interface ClientForm {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  phone: string
}

interface ProviderForm {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  specialty: string
  nationality: string
  identifier: string
  certificate?: File
  workZones?: string[]
  birthDate: string
  phone: string
}

const router = useRouter()
const form = ref<LoginForm>({
  email: '',
  password: '',
})

const showClientForm = ref(false)
const showProviderForm = ref(false)

const clientForm = ref<ClientForm>({
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  phone: '',
})

const providerForm = ref<ProviderForm>({
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  specialty: '',
  nationality: '',
  identifier: '',
  workZones: [],
  birthDate: '',
  phone: '',
})

const handleSubmit = async () => {
  try {
    // Aquí iría la lógica de autenticación
    console.log('Formulario enviado:', form.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('Error en el login:', error)
  }
}

const handleClientSubmit = async () => {
  try {
    if (clientForm.value.password !== clientForm.value.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    // Aquí iría la lógica de registro de cliente
    console.log('Registro de cliente:', clientForm.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('Error en el registro:', error)
  }
}

const handleProviderSubmit = async () => {
  try {
    if (providerForm.value.password !== providerForm.value.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    // Aquí iría la lógica de registro de proveedor
    console.log('Registro de proveedor:', providerForm.value)
    router.push('/dashboard')
  } catch (error) {
    console.error('Error en el registro:', error)
  }
}

const handleGoogleLogin = async () => {
  try {
    // Aquí iría la lógica de autenticación con Google
    console.log('Iniciando sesión con Google')
  } catch (error) {
    console.error('Error en el login con Google:', error)
  }
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
      <div>
        <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
          {{
            showClientForm
              ? 'Registro de Cliente'
              : showProviderForm
                ? 'Registro de Prestador'
                : 'Iniciar Sesión'
          }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          {{
            showClientForm
              ? 'Crea tu cuenta como cliente'
              : showProviderForm
                ? 'Crea tu cuenta como prestador de servicios'
                : 'Bienvenido de nuevo'
          }}
        </p>
      </div>

      <!-- Formulario de Login -->
      <form
        v-if="!showClientForm && !showProviderForm"
        class="mt-8 space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">Correo electrónico</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="appearance-none rounded-t-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Correo electrónico"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="appearance-none rounded-b-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition duration-150 ease-in-out"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Recordarme </label>
          </div>

          <div class="text-sm">
            <router-link
              to="/recover-password"
              class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              ¿Olvidaste tu contraseña?
            </router-link>
          </div>
        </div>

        <div class="space-y-4">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
          >
            Iniciar Sesión
          </button>

          <button
            type="button"
            @click="handleGoogleLogin"
            class="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
          >
            <img class="h-5 w-5 mr-2" src="https://www.google.com/favicon.ico" alt="Google logo" />
            Continuar con Google
          </button>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">O regístrate como</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button
              type="button"
              @click="showClientForm = true"
              class="py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
            >
              Cliente
            </button>
            <button
              type="button"
              @click="showProviderForm = true"
              class="py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
            >
              Prestador
            </button>
          </div>
        </div>
      </form>

      <!-- Formulario de Registro Cliente -->
      <form v-if="showClientForm" class="mt-8 space-y-6" @submit.prevent="handleClientSubmit">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="client-email" class="block text-sm font-medium text-gray-700"
              >Correo electrónico</label
            >
            <input
              id="client-email"
              v-model="clientForm.email"
              type="email"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="client-password" class="block text-sm font-medium text-gray-700"
              >Contraseña</label
            >
            <input
              id="client-password"
              v-model="clientForm.password"
              type="password"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="client-confirm-password" class="block text-sm font-medium text-gray-700"
              >Confirmar Contraseña</label
            >
            <input
              id="client-confirm-password"
              v-model="clientForm.confirmPassword"
              type="password"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="client-firstname" class="block text-sm font-medium text-gray-700"
              >Nombre</label
            >
            <input
              id="client-firstname"
              v-model="clientForm.firstName"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="client-lastname" class="block text-sm font-medium text-gray-700"
              >Apellido</label
            >
            <input
              id="client-lastname"
              v-model="clientForm.lastName"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="client-phone" class="block text-sm font-medium text-gray-700"
              >Número de teléfono</label
            >
            <input
              id="client-phone"
              v-model="clientForm.phone"
              type="tel"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="+56 9 XXXX XXXX"
            />
          </div>
        </div>

        <div class="flex space-x-4">
          <button
            type="button"
            @click="showClientForm = false"
            class="flex-1 py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="flex-1 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
          >
            Registrarse
          </button>
        </div>
      </form>

      <!-- Formulario de Registro Prestador -->
      <form v-if="showProviderForm" class="mt-8 space-y-6" @submit.prevent="handleProviderSubmit">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="provider-email" class="block text-sm font-medium text-gray-700"
              >Correo electrónico</label
            >
            <input
              id="provider-email"
              v-model="providerForm.email"
              type="email"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-password" class="block text-sm font-medium text-gray-700"
              >Contraseña</label
            >
            <input
              id="provider-password"
              v-model="providerForm.password"
              type="password"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-confirm-password" class="block text-sm font-medium text-gray-700"
              >Confirmar Contraseña</label
            >
            <input
              id="provider-confirm-password"
              v-model="providerForm.confirmPassword"
              type="password"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-firstname" class="block text-sm font-medium text-gray-700"
              >Nombre</label
            >
            <input
              id="provider-firstname"
              v-model="providerForm.firstName"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-lastname" class="block text-sm font-medium text-gray-700"
              >Apellido</label
            >
            <input
              id="provider-lastname"
              v-model="providerForm.lastName"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-specialty" class="block text-sm font-medium text-gray-700"
              >Especialidad</label
            >
            <input
              id="provider-specialty"
              v-model="providerForm.specialty"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-nationality" class="block text-sm font-medium text-gray-700"
              >Nacionalidad</label
            >
            <input
              id="provider-nationality"
              v-model="providerForm.nationality"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-identifier" class="block text-sm font-medium text-gray-700"
              >RUT</label
            >
            <input
              id="provider-identifier"
              v-model="providerForm.identifier"
              type="text"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-phone" class="block text-sm font-medium text-gray-700"
              >Teléfono celular</label
            >
            <input
              id="provider-phone"
              v-model="providerForm.phone"
              type="tel"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="+56 9 XXXX XXXX"
            />
          </div>
          <div>
            <label for="provider-certificate" class="block text-sm font-medium text-gray-700"
              >Certificado (opcional)</label
            >
            <input
              id="provider-certificate"
              type="file"
              @change="
                (e: Event) => {
                  const target = e.target as HTMLInputElement
                  if (target.files) {
                    providerForm.certificate = target.files[0]
                  }
                }
              "
              class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label for="provider-workzones" class="block text-sm font-medium text-gray-700"
              >Zonas de trabajo (opcional)</label
            >
            <input
              id="provider-workzones"
              v-model="providerForm.workZones"
              type="text"
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="Separar zonas con comas"
            />
          </div>
          <div>
            <label for="provider-birthdate" class="block text-sm font-medium text-gray-700"
              >Fecha de nacimiento</label
            >
            <input
              id="provider-birthdate"
              v-model="providerForm.birthDate"
              type="date"
              required
              class="mt-1 appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            />
          </div>
        </div>

        <div class="flex space-x-4">
          <button
            type="button"
            @click="showProviderForm = false"
            class="flex-1 py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="flex-1 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
