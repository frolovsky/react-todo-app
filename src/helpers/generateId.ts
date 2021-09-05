export default function generateId (len = 5): string {
  return Math.random().toString(36).substring(2);
}
