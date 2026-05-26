const movies = [
  { id: 1, genre: "action", title: "Matrix" },
  { id: 2, genre: "drama", title: "Forrest Gump" },
  { id: 3, genre: "action", title: "John Wick" },
];

function FilterByKey<T extends Record<string, unknown>>(
  arr: T[],
  key: string,
  value: unknown,
): T[] {
  return arr.filter((item) => item[key] === value);
}

const actionMovies = FilterByKey(movies, "genre", "action");
console.log(actionMovies);
export default FilterByKey;
