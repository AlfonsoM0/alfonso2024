/**
 * Represents the determined device type.
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';

/**
 * Attempts to determine the type of device the user is using based on the browser's user agent string.
 * Note: User agent sniffing is not always 100% reliable as user agents can be spoofed or changed.
 * Consider this a best-effort determination.
 *
 * @returns {DeviceType} The determined device type ('mobile', 'tablet', 'desktop', or 'unknown').
 *
 * @example
 * const device = getUserDevice();
 * console.log('Device type:', device);
 *
 * if (device === 'mobile') {
 *   // Apply mobile-specific logic
 * }
 */
export default function getUserDevice(): DeviceType {
  // Ensure this code only runs on the client-side
  if (typeof window === 'undefined' || !navigator?.userAgent) {
    console.warn('Cannot determine device type: navigator.userAgent is not available.');
    return 'unknown'; // Cannot determine without userAgent
  }

  const ua = navigator.userAgent;

  // Common patterns for tablets
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }

  // Common patterns for mobile devices
  // Includes 'Android', 'webOS', 'iPhone', 'iPod', 'BlackBerry', 'IEMobile', 'Opera Mini'
  // The 'mobi' check helps differentiate Android phones from tablets
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }

  // If none of the above, assume desktop
  return 'desktop';
}
