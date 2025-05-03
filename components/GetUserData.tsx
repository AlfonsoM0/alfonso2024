'use client';

import getUserLocation from '@/utils/getUserLocation';
import getUserDevice from '@/utils/getUserDevice'; // Import getUserDevice
import { sendEmail } from '@/server/actions/sendEmail';
import { useEffect } from 'react';

export default function GetUserData() {
  useEffect(() => {
    const sendVisitNotification = async () => {
      const notificationEmail = process.env.NEXT_PUBLIC_EMAIL_WEB;

      if (!notificationEmail) {
        console.error('Notification email address is not configured (NEXT_PUBLIC_EMAIL_WEB).');
        return;
      }

      // --- Get Device Info ---
      const deviceType = getUserDevice();
      const deviceInfo = `Device Type: ${deviceType}`;
      console.info('User device determined:', deviceInfo);
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
      const subject = `Website Visit Notification (${deviceType})`; // Add device type to subject for quick view
      const text = `Someone visited the page.\nDevice Info: ${deviceInfo}\nLocation Info: ${locationInfo}\nMap Link: ${locationLink}`;
      // Add device info to the HTML email body
      const html = `
        <p>Someone visited the page.</p>
        <p><strong>Device Information:</strong> ${deviceInfo}</p>
        <p><strong>Location Information:</strong> ${locationInfo}</p>
        ${
          locationLink !== '#'
            ? `<p><a href="${locationLink}">View Location on Google Maps</a></p>`
            : ''
        }
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

    // Call the async function
    sendVisitNotification();
  }, []); // Empty dependency array ensures this runs only once on mount

  // This component doesn't render anything visible
  return null;
}
