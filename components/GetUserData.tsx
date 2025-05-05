'use client';

import getUserLocation from '@/utils/getUserLocation';
import getUserDevice from '@/utils/getUserDevice'; // Import getUserDevice
import { sendEmail } from '@/server/actions/sendEmail';
import { useEffect } from 'react';
import useUserStore from '@/store/userStore';
import { useDebouncedCallback } from 'use-debounce';
import { isAdmKeyCorrect } from '@/server/actions/isAdmKeyCorrect';

/**
 * A React component that tracks and sends a notification about a user's visit to the website.
 * This component does not render any visible UI and operates in the background.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.metadata] - Optional metadata to include in the notification email.
 * @param {number} [props.timeOut=3000] - The debounce timeout in milliseconds for sending the notification.
 * @param {boolean} [props.isManualActivation=false] - Whether the notification should be triggered manually.
 * @param {boolean} [props.isActive=false] - Indicates if the manual activation is active.
 *
 * @returns {null} This component does not render any visible elements.
 *
 * @remarks
 * - The component uses the `useUserStore` hook to determine if the user is an admin (`isAdm`).
 * - If the user is not an admin and `isManualActivation` is `false`, the notification is sent automatically on mount.
 * - If `isManualActivation` is `true`, the notification is sent only when `isActive` becomes `true`.
 * - The notification email includes details such as the current page URL, device information, and location (if available).
 *
 * @example
 * ```tsx
 * <GetUserData
 *   metadata="User visited the homepage"
 *   timeOut={5000}
 *   isManualActivation={true}
 *   isActive={isNotificationActive}
 * />
 * ```
 */
export default function GetUserData({
  metadata,
  timeOut = 3000,
  isManualActivation = false,
  isActive = false,
}: {
  metadata?: string;
  timeOut?: number;
  isManualActivation?: boolean;
  isActive?: boolean;
}) {
  const { adminKey } = useUserStore();

  const sendVisitNotification = async () => {
    if (!adminKey) return;
    const isAdmin = await isAdmKeyCorrect(adminKey);
    if (!isAdmin) return;

    const notificationEmail = process.env.NEXT_PUBLIC_EMAIL_WEB;

    if (!notificationEmail) {
      console.error('Notification email address is not configured (NEXT_PUBLIC_EMAIL_WEB).');
      return;
    }

    // --- Get Current Page URL ---
    const currentPageUrl = window.location.href;
    const dateAndTieme = new Date().toISOString();

    // --- Get Device Info ---
    const { device: deviceType, platform, userAgent } = getUserDevice(); // Get device, platform, and userAgent
    const deviceInfo = `Device Type: ${deviceType}, Platform: ${platform}, User Agent: ${userAgent}`;
    console.info('User device, platform & userAgent determined:', deviceInfo);
    // You could potentially gather more info here if needed, e.g., navigator.platform, screen resolution

    // --- Get Location Info ---
    let locationInfo = 'Location could not be determined.';
    let locationLink = '#';

    try {
      const { data: locationData, error: locationError } = await getUserLocation();

      if (locationData) {
        locationInfo = `Location obtained: Lat ${locationData.position.coords.latitude}, Lon ${locationData.position.coords.longitude}`;
        locationLink = locationData.GoogleMapsLocation;
        console.info('User location obtained for notification.');
      } else if (locationError) {
        locationInfo = `Error getting location: ${locationError.message}`;
        console.warn('Could not get user location for notification:', locationError.message);
      }
    } catch (error: any) {
      locationInfo = `An unexpected error occurred while getting location: ${
        error?.message || error
      }`;
      console.error('Unexpected error getting location:', error);
    }

    // --- Prepare and Send Email ---
    const subject = `Website Visit Notification (${deviceType} / ${platform})`; // Add device and platform to subject
    const text = `Someone visited the page.\nPage URL: ${currentPageUrl}\nDevice Type: ${deviceType}\nPlatform: ${platform}\nUser Agent: ${userAgent}\nLocation Info: ${locationInfo}\nMap Link: ${locationLink}`; // Update text version

    // Improved HTML email body
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://alfonso.ar/android-chrome-512x512.png" alt="App Logo" style="width: 80px; height: 80px; border-radius: 50%;">
            <h2 style="color: #0056b3; margin-top: 10px;">Website Visit Notification</h2>
          </div>
          <p>A new visit has been registered on the website.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <h3 style="color: #0056b3;">Visitor Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Page URL:</td>
              <td style="padding: 8px 0;">${currentPageUrl}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Date:</td>
              <td style="padding: 8px 0;">${dateAndTieme}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Context Metadata:</td>
              <td style="padding: 8px 0;">${metadata || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Device Type:</td>
              <td style="padding: 8px 0;">${deviceType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Platform:</td>
              <td style="padding: 8px 0;">${platform}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">User Agent:</td>
              <td style="padding: 8px 0; word-break: break-all;">${userAgent}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px 0; font-weight: bold;">Location Info:</td>
              <td style="padding: 8px 0;">${locationInfo}</td>
            </tr>
            ${
              locationLink !== '#'
                ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold;">Map Link:</td><td style="padding: 8px 0;"><a href="${locationLink}" style="color: #007bff; text-decoration: none;">View on Google Maps</a></td></tr>`
                : ''
            }
          </table>
          <p style="margin-top: 20px; font-size: 0.9em; color: #777;">This is an automated notification from the Website System.</p>
        </div>
      </div>
    `;
    try {
      console.info(`Sending visit notification to ${notificationEmail}...`);
      const isSuccess = await sendEmail({
        bussinessName: 'Website System', // Or a more appropriate name
        fromName: 'Visit Tracker',
        fromEmail: notificationEmail, // Often required to be the same as the auth user or allowed sender
        to: [notificationEmail],
        subject: subject,
        text: text,
        html: html,
      });

      if (isSuccess) {
        console.info('Visit notification email sent successfully.');
      } else {
        console.error('Failed to send visit notification email.');
      }
    } catch (error) {
      console.error('Error sending visit notification email:', error);
    }
  };

  const debounceSendVisitNotification = useDebouncedCallback(sendVisitNotification, timeOut);

  useEffect(() => {
    // Call the async function if user is not admin and is automatic
    if (!isManualActivation) debounceSendVisitNotification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey]); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (isManualActivation && isActive) debounceSendVisitNotification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey, metadata]);

  // This component doesn't render anything visible
  return null;
}
