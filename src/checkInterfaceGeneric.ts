export function checkInterface<T>(id: unknown, ...props: [keyof T]): id is T {
  if (
    id &&
    typeof id === 'object' &&
    props.filter((values) => values in id).length >= props.length
  ) {
    return true;
  } else {
    return false;
  }
}
