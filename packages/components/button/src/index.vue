<script lang="ts" setup name="EButton">
import { computed, useAttrs, useSlots } from 'vue'
import { buttonProps } from './props'

const props = defineProps(buttonProps)
const slots = useSlots()
const isDisabled = computed(() => props.loading || props.disabled)
const onlyIcon = computed(() => slots.icon && !slots.default)
const binds = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="binds"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    class="e-button-base"
    :class="[
      light ? 'e-button-light' : '',
      text ? 'e-button-text' : '',
      `e-button-${size}`,
      isDisabled ? 'e-disabled' : 'e-transition e-button-hover e-button-active',
      onlyIcon && 'aspect-square px-0',
      type && `e-${type}`
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <slot v-else name="icon" />
    <slot />
  </component>
</template>
