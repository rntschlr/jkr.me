# How to finish the setup

Two things on your site are built but switched off, waiting on you. Neither
needs you to understand the code — each is a one-line change.

Everything here follows the same pattern: **edit one file, save, push.** Pushing
publishes automatically; the site is live about two minutes later.

---

## 1. Put your CV on the site

Right now there is no "Download CV" button. The code for it exists and is
hidden. Once you do this, the button appears in two places: the top of the page
next to "See Work", and in the contact details.

**Step 1.** Name your CV file exactly:

```
jack-rentschler-cv.pdf
```

**Step 2.** Put it in this folder inside the project:

```
public/cv/
```

That folder does not exist yet — create it. The finished path should read
`public/cv/jack-rentschler-cv.pdf`.

**Step 3.** Open this file:

```
src/constants/profile.ts
```

Find this line:

```ts
export const CV_URL: string | null = null;
```

Change it to:

```ts
export const CV_URL: string | null = "/cv/jack-rentschler-cv.pdf";
```

The only change is replacing the word `null` with that path in quotes. Leave
everything else on the line exactly as it is.

**Step 4.** Save, commit, and push. Done.

> **If something looks wrong:** if the button appears but clicking it gives a
> "404" or "not found" page, the PDF is not in the right folder or the filename
> does not match exactly — check capitals and hyphens. If no button appears at
> all, the `null` was not replaced, or the quotes are missing.

---

## 2. Switch on your LinkedIn link

Same idea. Once switched on, LinkedIn appears in your contact details and in the
footer.

**Step 1.** Get your profile URL. Open your LinkedIn profile in a browser and
copy the address bar. It looks like:

```
https://www.linkedin.com/in/your-name-here/
```

**Step 2.** Open the same file as before:

```
src/constants/profile.ts
```

Find:

```ts
export const LINKEDIN_URL: string | null = null;
```

Change it to your URL in quotes:

```ts
export const LINKEDIN_URL: string | null = "https://www.linkedin.com/in/your-name-here/";
```

**Step 3.** One optional extra, which helps Google connect your site and your
LinkedIn as the same person. Open `index.html`, find this line:

```
"sameAs": ["https://github.com/rntschlr"],
```

Add your LinkedIn URL to it:

```
"sameAs": ["https://github.com/rntschlr", "https://www.linkedin.com/in/your-name-here/"],
```

**Step 4.** Save, commit, and push.

---

## 3. Before you switch LinkedIn on — make the profile match

Your site now says something specific: **infrastructure and fintech, in
Budapest, permit in progress.** If LinkedIn says something different, that
mismatch is the first thing a recruiter notices. Worth twenty minutes:

- [ ] **Location: Budapest, Hungary.** Not the US. This is the single biggest
      filter recruiters apply, and it is the whole reason your site now says it.
- [ ] **Headline.** Not just "Student" or a job title you have left. Something
      like _"IT Infrastructure & Fintech · Proxmox, Linux, Networking · Budapest"_.
      This is the line that shows up in search results.
- [ ] **About section.** Three or four sentences: finance background, the move
      into infrastructure, the homelab, what you are looking for. Say the permit
      is in progress — hiding it wastes your time and theirs.
- [ ] **Open to work.** Turn it on, set the job titles you actually want, and
      set the location to Budapest with on-site and hybrid ticked, not just
      remote.
- [ ] **Featured / links.** Add johnkrentschler.me and your GitHub.
- [ ] **Skills.** Add the ones your site now leads with: Linux, Proxmox, Docker,
      Networking, DNS, VPN. Recruiters filter by these.
- [ ] **Photo.** Any clear, well-lit photo of your face. Profiles without one
      get substantially less attention.

---

## Where things live

| What                                    | Where                                                 |
| --------------------------------------- | ----------------------------------------------------- |
| Switches for CV and LinkedIn            | `src/constants/profile.ts`                            |
| Your CV file                            | `public/cv/`                                          |
| All site wording, English and Hungarian | `src/i18n/translations.ts`                            |
| Homelab section content                 | `src/i18n/translations.ts` and `src/data/homelab.tsx` |
| Project cards                           | `src/data/projects.ts`                                |
| Project screenshots                     | `public/images/projects/`                             |

> **One thing to be careful about:** the project cards, skills, and homelab
> entries are stored as matching lists — one list holds the pictures and tags,
> another holds the English words, another the Hungarian. They line up by
> position. If you add an entry to one, you must add one to all three in the
> same spot, or the wrong description ends up under the wrong title.
