<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-bg-dark">
    <!-- Divider superior -->
    <div class="h-px w-full bg-border-dark" />

    <div class="mx-auto max-w-[var(--max-width)] px-6 pt-block pb-element lg:px-8">
      <!-- Grid principal: mobile 1col, tablet 2col, desktop 4col -->
      <div class="grid grid-cols-1 gap-element sm:grid-cols-2 sm:gap-block lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <!-- Col 1: Marca (en tablet ocupa toda la fila) -->
        <div class="sm:col-span-2 lg:col-span-1">
          <NuxtLink to="/" class="inline-block text-text-inverse" aria-label="Estudio 4a — Inicio">
            <UiLogo4aStudio height="44px" />
          </NuxtLink>

          <p class="mt-element max-w-[320px] font-body text-sm leading-relaxed text-text-inverse-muted">
            Arquitectura con propósito. 40+ años diseñando espacios
            que transforman la manera de habitar.
          </p>
        </div>

        <!-- Col 2: Ubicación -->
        <div>
          <h3 class="mb-tight font-body text-xs uppercase tracking-wider text-text-inverse-muted sm:mb-element">
            Ubicación
          </h3>

          <address class="font-body text-sm not-italic leading-relaxed text-text-inverse-muted">
            <span class="block text-text-inverse">Galpón 4A</span>
            <span class="block">Calacoto</span>
            <span class="block">La Paz, Bolivia</span>
          </address>
        </div>

        <!-- Col 3: Contacto -->
        <div>
          <h3 class="mb-tight font-body text-xs uppercase tracking-wider text-text-inverse-muted sm:mb-element">
            Contacto
          </h3>

          <ul class="flex flex-col gap-micro font-body text-sm text-text-inverse-muted sm:gap-tight">
            <li>
              <a
                href="tel:+59178000000"
                class="transition-colors hover:text-text-inverse"
              >
                +591 78 000 000
              </a>
            </li>
            <li>
              <a
                href="mailto:info@estudio4a.com"
                class="transition-colors hover:text-text-inverse"
              >
                info@estudio4a.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/59178000000"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-text-inverse"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Conectar -->
        <div>
          <h3 class="mb-tight font-body text-xs uppercase tracking-wider text-text-inverse-muted sm:mb-element">
            Conectar
          </h3>

          <ul class="flex flex-col gap-micro font-body text-sm text-text-inverse-muted sm:gap-tight">
            <li>
              <a
                href="https://instagram.com/estudio4a"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-text-inverse"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/estudio4a"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-text-inverse"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider inferior -->
      <div class="mt-block h-px w-full bg-border-dark" />

      <!-- Copyright + crédito -->
      <div class="flex flex-col items-center justify-between gap-micro py-element sm:flex-row">
        <p class="font-body text-xs text-text-inverse-muted">
          &copy; {{ currentYear }} Estudio 4A. Todos los derechos reservados.
        </p>
        <p class="font-body text-xs text-text-inverse-muted">
          Desarrollado por
          <a
            href="https://tacticostudio.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-inverse-muted transition-colors hover:text-text-inverse"
          >
            Táctico Studio
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
