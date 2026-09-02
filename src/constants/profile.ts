/**
 * Outbound profile links that are built but not yet switched on.
 *
 * Both start as `null`, which removes the corresponding UI entirely — no dead
 * buttons, no links to a 404. Flip either one to a string to publish it.
 */

/**
 * Public CV.
 *
 * To switch on: drop the PDF at `public/cv/jack-rentschler-cv.pdf`, then set
 * this to "/cv/jack-rentschler-cv.pdf". A "Download CV" button then appears in
 * the hero and in the contact details.
 */
export const CV_URL: string | null = null;

/**
 * LinkedIn profile.
 *
 * To switch on: set this to the full profile URL. The link then appears in the
 * contact details and the footer. Also add the same URL to the `sameAs` array
 * in the JSON-LD block in `index.html`, so search engines connect the two
 * identities.
 */
export const LINKEDIN_URL: string | null = null;
