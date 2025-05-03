/**
 * Represents the result of the getUserLocation operation.
 * Contains either the location data or an error object.
 */
interface UserLocationResult {
  data: {
    /** The Google Maps URL for the user's location. */
    GoogleMapsLocation: string;
    /** The raw position object from the Geolocation API. */
    position: GeolocationPosition;
  } | null;
  error: GeolocationPositionError | { message: string; code?: number } | null;
}

/**
 * Attempts to retrieve the user's current geographic location using the browser's Geolocation API.
 *
 * @returns {Promise<UserLocationResult>} A Promise that resolves with an object containing the location data
 *                                      (Google Maps URL and the original position object) if successful,
 *                                      or rejects with an object containing the error information if unsuccessful
 *                                      or if the Geolocation API is not available.
 *
 * @example
 * async function showLocation() {
 *   try {
 *     const { data, error } = await getUserLocation();
 *     if (data) {
 *       console.log('Location found:', data.GoogleMapsLocation);
 *       console.log('Latitude:', data.position.coords.latitude);
 *       console.log('Longitude:', data.position.coords.longitude);
 *     } else if (error) {
 *       console.error('Error getting location:', error.message);
 *     }
 *   } catch (error) {
 *      // This catch block handles the rejection when geolocation is not available
 *      // or potentially other unexpected errors within the promise structure.
 *      // The specific error structure might vary slightly depending on how it's caught.
 *      // It's often the same as the 'error' property in the resolved object when rejected by the callbacks.
 *      console.error('Failed to get location:', error.message);
 *   }
 * }
 *
 * showLocation();
 */
export default function getUserLocation(): Promise<UserLocationResult> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Success Callback
        (position) => {
          const {
            coords: { latitude, longitude },
          } = position;

          const GoogleMapsLocation = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

          console.info('Location retrieved:', `Link: ${GoogleMapsLocation}`);

          // Resolve the promise with the data
          resolve({ data: { GoogleMapsLocation, position }, error: null });
        },
        // Error Callback
        (error: GeolocationPositionError) => {
          console.error('Error getting location:', error.message, 'Code:', error.code);
          // Resolve the promise with the error (following the original structure)
          // Alternatively, you could reject(error) if you prefer standard promise rejection
          resolve({ data: null, error });
        }
      );
    } else {
      // Geolocation API not available
      console.error('Geolocation is not supported by this browser.');
      const notAvailableError = {
        code: 0, // Custom code for 'not available'
        message: 'Geolocation is not supported by this browser.',
      };
      // Resolve with the error (following the original structure)
      // Alternatively, you could reject(notAvailableError)
      resolve({ data: null, error: notAvailableError });
    }
  });
}
