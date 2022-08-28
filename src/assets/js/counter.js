export default function counter() {
  return {
    count: 1,
    increment() { this.count++ },
  };
}