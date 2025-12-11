// Rate limiting simple en memoria para formularios
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 3,
  windowMs: number = 600000 // 10 minutos
): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Limpiar registros antiguos
  if (record && now > record.resetTime) {
    rateLimitMap.delete(identifier);
  }

  const currentRecord = rateLimitMap.get(identifier);

  if (!currentRecord) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  if (currentRecord.count >= maxRequests) {
    return false;
  }

  currentRecord.count++;
  return true;
}

export function getRateLimitInfo(identifier: string): {
  remaining: number;
  resetTime: number;
} | null {
  const record = rateLimitMap.get(identifier);
  if (!record) return null;

  return {
    remaining: Math.max(0, 3 - record.count),
    resetTime: record.resetTime
  };
}

// Limpieza periódica de registros antiguos
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((value, key) => {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    });
  }, 60000); // Cada minuto
}
