export default function randomNumber(min, max) {
  // Sprawdzenie poprawności danych wejściowych
  if (min > max) {
    throw new Error("Wartość minimalna nie może być większa od maksymalnej!");
  }
  if (typeof min !== "number" || typeof max !== "number") {
    throw new TypeError(
      "Wartosci minimalna oraz maksymana musza byc liczbami!"
    );
  }

  // Generowanie losowej liczby
  const random = Math.random();
  const range = max - min;
  const adjustedRandom = random * range;
  const result = min + adjustedRandom;

  return Math.floor(result);
}
