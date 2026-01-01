'use client';

import { useEffect, useState } from 'react';
import { getRole, Role } from './auth';

export function useAuth() {
  const [role, setRole] = useState<Role>(null);

  useEffect(() => {
    setRole(getRole());
  }, []);

  return { role };
}
