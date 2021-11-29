export function generateUuid() {
  return 'xxxxxxxxxxxxxxx'.replace(/[x]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(16);
  });
}
