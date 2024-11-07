import { watch } from "vue"

export function useWatchCharacters(valueToWatch, maxCharacters) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxCharacters) {
      alert(`Only ${maxCharacters} characters allowed!`);
    }
  });
}
