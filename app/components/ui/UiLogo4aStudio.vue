<script setup lang="ts">
withDefaults(defineProps<{
  height?: string
}>(), {
  height: '44px',
})
</script>

<template>
  <svg
    :height="height"
    :style="{ height }"
    viewBox="0 0 816 637"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    class="w-auto"
  >
    <g transform="matrix(1,0,0,1,-10.868998,-0.000833)">
      <!-- "Estudio" text -->
      <g transform="matrix(4.166667,0,0,4.166667,0,0)">
        <g transform="matrix(0.24,0,0,0.24,0,98.7206)">
          <g transform="matrix(0.98774,0,0,1,0,0)">
            <text
              x="0px"
              y="222.265px"
              style="font-family: 'Helvetica', 'Arial', sans-serif; font-size: 128.777px"
              fill="currentColor"
            >E<tspan
                x="84.212px 146.92px 181.017px 250.956px 320.894px 347.823px"
                y="222.265px 222.265px 222.265px 222.265px 222.265px 222.265px"
              >studio</tspan></text>
          </g>
        </g>
      </g>
      <!-- "4" numeral -->
      <g transform="matrix(4.166667,0,0,4.166667,0,0)">
        <g transform="matrix(1,0,0,1,115.7112,152.1502)">
          <path
            d="M0,-152.15L-111.931,-40.607L-112.273,-37.874L-14.645,-37.874L-14.645,0L9.22,0L9.22,-152.15L0,-152.15ZM-14.645,-132.26L-14.645,-41.49L-105.403,-41.49L-14.645,-132.26Z"
            fill="currentColor"
            fill-rule="nonzero"
          />
        </g>
      </g>
      <!-- Accent triangle -->
      <g transform="matrix(4.166667,0,0,4.166667,0,0)">
        <g transform="matrix(1,0,0,1,174.4396,130.4299)">
          <path
            d="M0,21.721L21.936,21.721L10.968,0L0,21.721Z"
            fill="currentColor"
            fill-rule="nonzero"
          />
        </g>
      </g>
      <!-- "a" letterform -->
      <g transform="matrix(4.166667,0,0,4.166667,0,0)">
        <g transform="matrix(1,0,0,1,132.3084,52.1039)">
          <path
            d="M0,100.047C-4.847,92.496 -5.424,81.822 -4.008,73.403C0.236,48.169 26.117,38.215 48.303,33.627L48.303,74.119C48.303,78.313 47.43,82.495 45.517,86.228C42.775,91.578 38.892,96.306 33.555,100.047L65.985,100.047L65.982,35.398C62.467,0 19.065,4.842 -5.233,13.699C-7.857,14.655 -10.419,15.772 -12.971,16.902L-9.408,30.412C0.636,19.027 19.211,6.048 35.188,10.265C44.641,12.759 48.392,21.728 48.316,30.844C22.355,37.482 -20.311,48.99 -22.424,81.667C-22.862,88.436 -21.484,94.757 -18.534,100.047L0,100.047Z"
            fill="currentColor"
            fill-rule="nonzero"
          />
        </g>
      </g>
    </g>
  </svg>
</template>
