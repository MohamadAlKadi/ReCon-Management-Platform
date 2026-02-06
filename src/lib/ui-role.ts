export type AppRole = 'MANAGER' | 'WORKER';

export function getAppRole(role: string | undefined): AppRole {
  return role === 'WORKER' ? 'WORKER' : 'MANAGER';
}

export function withRole(path: string, role: AppRole) {
  return `${path}?role=${role}`;
}
