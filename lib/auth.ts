'use client';

export type Role = 'user' | 'publisher' | null;

export function getRoleFromEmail(email: string): Role {
  if (email === 'user@newshub.com') return 'user';
  if (email === 'publisher@newshub.com') return 'publisher';
  return null;
}

export function setRole(role: Role) {
  if (role) localStorage.setItem('role', role);
}

export function getRole(): Role {
  return localStorage.getItem('role') as Role;
}

export function logout() {
  localStorage.removeItem('role');
}
