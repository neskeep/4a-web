<script setup lang="ts">
const { $gsap } = useNuxtApp()

const formRef = ref<HTMLElement>()
let tween: ReturnType<typeof $gsap.to> | null = null

interface FormData {
  name: string
  email: string
  phone: string
  type: string
  message: string
  website: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  type: '',
  message: '',
  website: '',
})

const errors = reactive<FormErrors>({})
const touched = reactive<Record<string, boolean>>({})
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const consultTypes = [
  { value: '', label: 'Seleccionar...' },
  { value: 'residencial', label: 'Proyecto residencial' },
  { value: 'corporativo', label: 'Proyecto corporativo' },
  { value: 'urbano', label: 'Proyecto urbano' },
  { value: 'general', label: 'Consulta general' },
  { value: 'prensa', label: 'Prensa / Colaboracion' },
]

const validateField = (field: keyof FormErrors) => {
  if (field === 'name') {
    errors.name = form.name.trim() ? undefined : 'Tu nombre es necesario'
  }
  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Necesitamos tu correo'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Ingresa un correo valido'
    } else {
      errors.email = undefined
    }
  }
  if (field === 'message') {
    errors.message = form.message.trim() ? undefined : 'Cuentanos sobre tu proyecto'
  }
}

const onBlur = (field: keyof FormErrors) => {
  touched[field] = true
  validateField(field)
}

const isValid = computed(() => {
  return form.name.trim() && form.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.message.trim()
})

const handleSubmit = async () => {
  touched.name = true
  touched.email = true
  touched.message = true

  validateField('name')
  validateField('email')
  validateField('message')

  if (errors.name || errors.email || errors.message) return

  // Honeypot check
  if (form.website) return

  status.value = 'sending'

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        type: form.type || undefined,
        message: form.message,
      },
    })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

onMounted(() => {
  if (!formRef.value || !$gsap) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  const el = formRef.value.querySelector('[data-form]')
  $gsap.set(el, { opacity: 0 })
  tween = $gsap.to(
    el,
    {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formRef.value,
        start: 'top 70%',
        once: true,
      },
    },
  )
})

onUnmounted(() => {
  tween?.kill()
})
</script>

<template>
  <div ref="formRef">
    <!-- Success state -->
    <div
      v-if="status === 'success'"
      class="flex flex-col items-start justify-center"
      style="min-height: 400px"
    >
      <h3 class="font-display text-3xl leading-snug tracking-tight text-text" style="font-weight: 300">
        Mensaje enviado.
      </h3>
      <p class="mt-element font-body text-base text-text-secondary">
        Te responderemos en las proximas 24 horas.
      </p>
    </div>

    <!-- Form -->
    <form
      v-else
      data-form
      @submit.prevent="handleSubmit"
    >
      <!-- Honeypot -->
      <div class="sr-only" aria-hidden="true">
        <label for="website">Website</label>
        <input
          id="website"
          v-model="form.website"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <!-- Nombre -->
      <div class="mb-element">
        <label
          for="contact-name"
          class="mb-micro block font-body text-sm uppercase tracking-wide text-text-tertiary"
          style="font-weight: 500"
        >
          Nombre
        </label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          name="name"
          required
          autocomplete="name"
          class="w-full border-0 border-b bg-transparent py-3 font-body text-base text-text outline-none"
          :class="touched.name && errors.name ? 'border-accent' : 'border-border focus:border-accent'"
          style="border-radius: 0; transition: border-color var(--duration-normal) var(--ease-out-quart)"
          @blur="onBlur('name')"
        />
        <p
          v-if="touched.name && errors.name"
          class="mt-micro font-body text-xs text-accent"
          role="alert"
        >
          {{ errors.name }}
        </p>
      </div>

      <!-- Email -->
      <div class="mb-element">
        <label
          for="contact-email"
          class="mb-micro block font-body text-sm uppercase tracking-wide text-text-tertiary"
          style="font-weight: 500"
        >
          Correo electronico
        </label>
        <input
          id="contact-email"
          v-model="form.email"
          type="email"
          name="email"
          required
          autocomplete="email"
          class="w-full border-0 border-b bg-transparent py-3 font-body text-base text-text outline-none"
          :class="touched.email && errors.email ? 'border-accent' : 'border-border focus:border-accent'"
          style="border-radius: 0; transition: border-color var(--duration-normal) var(--ease-out-quart)"
          @blur="onBlur('email')"
        />
        <p
          v-if="touched.email && errors.email"
          class="mt-micro font-body text-xs text-accent"
          role="alert"
        >
          {{ errors.email }}
        </p>
      </div>

      <!-- Telefono -->
      <div class="mb-element">
        <label
          for="contact-phone"
          class="mb-micro block font-body text-sm tracking-wide text-text-tertiary"
          style="font-weight: 500"
        >
          <span class="uppercase">Telefono</span>
          <span class="normal-case tracking-normal" style="font-weight: 400"> (opcional)</span>
        </label>
        <input
          id="contact-phone"
          v-model="form.phone"
          type="tel"
          name="phone"
          autocomplete="tel"
          class="w-full border-0 border-b border-border bg-transparent py-3 font-body text-base text-text outline-none focus:border-accent"
          style="border-radius: 0; transition: border-color var(--duration-normal) var(--ease-out-quart)"
        />
      </div>

      <!-- Tipo de consulta -->
      <div class="mb-element">
        <label
          for="contact-type"
          class="mb-micro block font-body text-sm tracking-wide text-text-tertiary"
          style="font-weight: 500"
        >
          <span class="uppercase">Sobre que te gustaria conversar</span>
          <span class="normal-case tracking-normal" style="font-weight: 400"> (opcional)</span>
        </label>
        <div class="relative">
          <select
            id="contact-type"
            v-model="form.type"
            name="type"
            class="w-full appearance-none border-0 border-b border-border bg-transparent py-3 pr-8 font-body text-base text-text outline-none focus:border-accent"
            style="border-radius: 0; transition: border-color var(--duration-normal) var(--ease-out-quart)"
          >
            <option
              v-for="opt in consultTypes"
              :key="opt.value"
              :value="opt.value"
            >
              {{ opt.label }}
            </option>
          </select>
          <svg
            class="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-text-tertiary"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <!-- Mensaje -->
      <div class="mb-block">
        <label
          for="contact-message"
          class="mb-micro block font-body text-sm uppercase tracking-wide text-text-tertiary"
          style="font-weight: 500"
        >
          Cuentanos sobre tu proyecto
        </label>
        <textarea
          id="contact-message"
          v-model="form.message"
          name="message"
          required
          rows="4"
          class="w-full resize-y border-0 border-b bg-transparent py-3 font-body text-base text-text outline-none"
          :class="touched.message && errors.message ? 'border-accent' : 'border-border focus:border-accent'"
          style="border-radius: 0; min-height: 120px; transition: border-color var(--duration-normal) var(--ease-out-quart)"
          @blur="onBlur('message')"
        />
        <p
          v-if="touched.message && errors.message"
          class="mt-micro font-body text-xs text-accent"
          role="alert"
        >
          {{ errors.message }}
        </p>
      </div>

      <!-- Submit -->
      <UiButton
        type="submit"
        variant="primary"
        :class="{ 'pointer-events-none opacity-60': status === 'sending' || !isValid }"
      >
        {{ status === 'sending' ? 'Enviando...' : 'Enviar mensaje' }}
      </UiButton>

      <!-- Error message -->
      <p
        v-if="status === 'error'"
        class="mt-element font-body text-sm text-accent"
        role="alert"
      >
        No pudimos enviar el mensaje.
        Intenta de nuevo o escribenos a
        <a href="mailto:hola@4a.bo" class="underline underline-offset-2">hola@4a.bo</a>
      </p>
    </form>
  </div>
</template>
