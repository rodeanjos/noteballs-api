<script setup>
  import { ref } from "vue";
  import { vAutofocus } from "@/directives/vAutofocus";

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Add new note",
    },
    label: {
      type: String,
    },
  });

  const emits = defineEmits(["update:modelValue"]);

  const textAreaRef = ref(null);

  const focusTextArea = () => {
    textAreaRef.value.focus();
  };

  defineExpose({
    focusTextArea,
  });
</script>

<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <label v-if="props.label" class="label has-text-white mb-4">Note #{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="textAreaRef"
          class="textarea"
          :placeholder="props.placeholder"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
