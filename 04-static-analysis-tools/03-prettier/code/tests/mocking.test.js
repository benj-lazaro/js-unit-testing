import { vi, it, expect, describe, beforeEach } from 'vitest';
import { getDiscount } from '../src/mocking';

describe('getDiscount', () => {
  it('should return 0.2 (20%) discount on Christmas day', () => {
    vi.setSystemTime('2024-12-25 08:00');
    expect(getDiscount()).toBe(0.2);

    vi.setSystemTime('2024-12-25 23:59');
    expect(getDiscount()).toBe(0.2);
  });

  it('should return 0 (no discount) outside Christmas day', () => {
    vi.setSystemTime('2024-12-26 00:00');
    expect(getDiscount()).toBe(0);
  });
});
