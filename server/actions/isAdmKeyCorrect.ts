'use server';

export async function isAdmKeyCorrect(key: string) {
  const serverKey = process.env.ADMIN_KEY;

  if (!serverKey) return false;

  return key === serverKey;
}
