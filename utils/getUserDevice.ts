/**
 * Represents the determined device type.
 */
export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';

/**
 * Represents the determined device and platform information.
 */
export interface DeviceInfo {
  device: DeviceType;
  platform: string;
  userAgent: string;
}

/**
 * Attempts to determine the type of device, platform, and retrieve the user agent string from the browser's navigator object.
 * Note: User agent sniffing is not always 100% reliable as user agents can be spoofed or changed.
 * Consider this a best-effort determination.
 *
 * @returns {DeviceInfo} An object containing the determined device type, platform string, and the full user agent string.
 *
 * @example
 * const { device, platform, userAgent } = getUserDevice();
 * console.log(`Device type: ${device}, Platform: ${platform}`);
 * console.log(`User Agent: ${userAgent}`);
 *
 * if (device === 'mobile') {
 *   // Apply mobile-specific logic
 * }
 */
export default function getUserDevice(): DeviceInfo {
  // Ensure this code only runs on the client-side
  if (typeof window === 'undefined' || !navigator?.userAgent) {
    console.warn('Cannot determine device info: navigator object is not available.');
    return { device: 'unknown', platform: 'unknown', userAgent: 'unknown' }; // Cannot determine without navigator
  }

  const ua = navigator.userAgent;
  const platform = navigator.platform || 'unknown'; // Get platform, default to 'unknown'
  let device: DeviceType = 'unknown';

  // Common patterns for tablets
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    device = 'tablet';
  } else if (
    // Common patterns for mobile devices
    // Includes 'Android', 'webOS', 'iPhone', 'iPod', 'BlackBerry', 'IEMobile', 'Opera Mini'
    // The 'mobi' check helps differentiate Android phones from tablets
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    device = 'mobile';
  } else {
    // If none of the above, assume desktop
    device = 'desktop';
  }

  return { device, platform, userAgent: ua };
}
