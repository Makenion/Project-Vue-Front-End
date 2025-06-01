import { mockProviders, mockServices, mockReviews } from './mockData'

export interface Provider {
  id: number
  name: string
  specialty: string
  rating: number
  totalReviews: number
  experience: string
  description: string
  education: {
    title: string
    institution: string
    year: string
  }[]
  certifications: {
    name: string
    issuer: string
    year: string
  }[]
  workZones: string[]
  languages: string[]
  availability: {
    [key: string]: string
  }
}

export interface Service {
  id: number
  name: string
  price: string
  duration: string
  description: string
}

export interface Review {
  id: number
  userName: string
  rating: number
  comment: string
  date: string
  service: string
}

export interface BookingResponse {
  id: number
  providerId: number
  serviceId: number
  date: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

export const providerService = {
  async getProvider(id: number): Promise<Provider> {
    // Simulamos un delay para simular la llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 500))
    const provider = mockProviders[id]
    if (!provider) {
      throw new Error('Proveedor no encontrado')
    }
    return provider
  },

  async getProviderServices(id: number): Promise<Service[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const services = mockServices[id]
    if (!services) {
      throw new Error('Servicios no encontrados')
    }
    return services
  },

  async getProviderReviews(id: number): Promise<Review[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const reviews = mockReviews[id]
    if (!reviews) {
      throw new Error('Reseñas no encontradas')
    }
    return reviews
  },

  async createReview(providerId: number, review: Omit<Review, 'id'>): Promise<Review> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      id: Math.floor(Math.random() * 1000),
      ...review,
    }
  },

  async bookService(providerId: number, serviceId: number, date: string): Promise<BookingResponse> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      id: Math.floor(Math.random() * 1000),
      providerId,
      serviceId,
      date,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
  },
}
