export default function randomNumber(min, max) {
  // Sprawdzenie poprawności danych wejściowych
  if (min > max) {
    throw new Error("Wartość minimalna nie może być większa od maksymalnej!");
  }

  // Generowanie losowej liczby
  const random = Math.random();
  const range = max - min;
  const adjustedRandom = random * range;
  const result = min + adjustedRandom;

  // Zaokrąglanie do żądanego typu (opcjonalnie)
  if (Number.isInteger(min) && Number.isInteger(max)) {
    return Math.floor(result);
  } else {
    return result;
  }
}
