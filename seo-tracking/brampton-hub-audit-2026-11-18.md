# Brampton home-renovation hub audit — 18 November 2026

Scope: local source audit and focused edits to `/brampton/`. The supplied GSC evidence is Canada / Web / last 3 months / exact query `home renovation brampton`: 244 impressions, 0 clicks, 0% CTR, average position 42.8, with only `/brampton/` receiving impressions. This is the user's supplied evidence, not a fresh GSC export. It supports improving this hub, with no evidence of cannibalization for that query.

## Before-edit audit

1. **Title:** `Home Renovation Brampton | Loyalty Contracting`. Already front-loads the target and is commercially appropriate; retain it rather than rewrite a sound element.
2. **Description:** `Plan a home renovation in Brampton with Loyalty Contracting. Explore full-home, kitchen, bathroom, basement and flooring services. Request a free quote.` Relevant and unique, but “Explore” is passive; make the scope and invitation to discuss a project more direct.
3. **Canonical:** `https://loyaltycontracting.ca/brampton/`, correct and self-referencing.
4. **Indexing:** `index,follow`; `robots.txt` allows `/`; sitemap includes the hub and all four Brampton service URLs. No source-level indexing obstacle found. Production HTTP headers are outside this local audit.
5. **H1:** One: `Home Renovation Services in Brampton` (line break before “in Brampton”). Clear, but can be simplified to `Home Renovation in Brampton`.
6. **Heading structure:** H2s in order: Planning a Renovation Around Your Home; Residential Renovation and General Contracting in Brampton; Home Renovation Services in Brampton; From Focused Updates to Full-Home Renovation; Serving Homeowners in Brampton; Peel Village Renovation Project; Permit Coordination When Required; Our Home Renovation Process; Brampton Home Renovation Questions; Planning a Home Renovation in Brampton? H3s under the service overview: Full Home Renovation, Kitchen Renovation, Bathroom Renovation, Basement Renovation, Flooring Installation, Project Coordination. Process H3s: Consultation, Site Assessment and Estimate, Scope and Selections, Renovation and Coordination, Final Walkthrough. Footer also has the company name as H3. Hierarchy is sensible; “Flooring Installation” understates the linked hardwood page's focus.
7. **Opening copy:** Hero: “Loyalty Contracting helps Brampton homeowners plan residential renovations with careful workmanship, clear communication, and coordinated work from the initial discussion through the final walkthrough.” First intro paragraph: “Loyalty Contracting provides residential renovation and general contracting services for Brampton homeowners. A project can centre on one defined area or coordinate updates across several connected spaces.” Second: “Each plan starts with the existing home, the work under consideration, and the homeowner's priorities. The team then organizes the proposed scope, material selections, renovation stages, communication, and finishing work.” These communicate coordination, but postpone concrete examples of what homeowners can renovate.
8. **Keyword usage in normalized visible main text (case-insensitive):** `home renovation brampton`: 0; `home renovations in Brampton`: 0; `renovation contractor Brampton`: 0; `home renovation`: 11; `residential renovation`: 7; `full-home`: 5. The exact primary phrase already appears in the title, OG title and X/Twitter title. Broad renovation intent is well established. Do not force ungrammatical exact matches; introduce a natural plural variant and a contractor-selection heading.
9. **Brampton context:** City service area, Peel Village detached-home kitchen/main-floor project, and conditional permit coordination. A separate “Serving Homeowners” section repeats generic scope/consultation information. Existing child pages also document Sandringham-Wellington bathroom work, Credit Valley basement work and Peel Village hardwood work; these can be linked briefly without inventing local experience.
10. **Links into the hub:** Eight referring HTML pages, 12 links: homepage, about, contact and general full-house page each link once with `Brampton`; each of the four child service pages links twice (breadcrumb `Brampton` and a descriptive `Brampton home renovation` related-services link). Improve the homepage anchor and add one useful contextual link near the opening of the full-house page. Existing child links are adequate.
11. **Links from the hub:** All four local child pages are prominent service-card H3 links and FAQ links; kitchen also has the project CTA. Main-content links also reach the general full-house page, About and Contact. Shared navigation/footer provide general services, homepage, blog, reviews, phone, email and legal pages. Keep shared navigation; improve the hardwood link label and add concise project-detail links to the relevant child pages.
12. **Local proof:** Existing Peel Village project statement and a project-specific FAQ answer. Existing phone/email, company information, process, Google Reviews link and homepage reviews are present. Project facts used in this change must trace to existing child-page content; these source statements are not independently reverified customer records. Do not add review quotations, ratings, project counts, addresses or credentials.
13. **CTAs:** Hero and closing `Get My Free Quote` buttons open the existing popup; call CTA, Contact links, WhatsApp and footer contact details provide alternatives. Popup posts to `https://formspree.io/f/xqeopjjj` with name/email/phone and the Brampton-specific subject. Use a more specific button label; preserve classes, IDs, form fields, action, method and JavaScript.
14. **Schema:** JSON-LD graph with `Service` (Home Renovation, area served Brampton, provider reference to homepage `#business`) and a two-item `BreadcrumbList`. Matches the hub; no need to add review, local-address or FAQ schema. Homepage defines the referenced business entity.
15. **Generic/duplicated copy:** Intro, full-home feature and service-area paragraphs repeatedly describe one area versus connected spaces and proposed scope. One contact FAQ paragraph is identical to Mississauga's. Much of the process wording follows the same useful site template. Replace the redundant service-area section with practical consultation preparation; leave shared navigation, process and working contact instructions intact.
16. **Child-page overlap:** Hub has brief summaries only. Child pages retain service-focused titles/H1s, detailed scopes, distinct local project write-ups and FAQs. Keep these pages unchanged and route users to their details. Add only short project references on the hub, without reproducing specifications, testimonials or long service sections.

## Implementation

Files changed:

- `brampton/index.html`: focused hub content and metadata edits.
- `index.html`: existing service-area link anchor improved.
- `services/full-house-renovation.html`: contextual link to the hub added after the general service overview.
- `seo-tracking/brampton-hub-audit-2026-11-18.md`: this audit, change rationale, checks and next steps.

### Before → after

- **Title:** `Home Renovation Brampton | Loyalty Contracting` → unchanged. The current title already aligns with the primary query and brand; changing it adds no clear benefit.
- **Description:** `Plan a home renovation in Brampton with Loyalty Contracting. Explore full-home, kitchen, bathroom, basement and flooring services. Request a free quote.` → `Home renovation in Brampton for kitchens, bathrooms, basements, flooring or a full-home update. Discuss your plans with Loyalty Contracting and request a quote.` The new 160-character description puts the service/location first and turns a passive browsing invitation into a project discussion. This is a snippet candidate, not a promise that Google will display it verbatim.
- **H1:** `Home Renovation Services in Brampton` → `Home Renovation in Brampton`. One primary H1 remains, with the existing line-break pattern.
- **Opening:** Explicitly names kitchens, bathrooms, basements, flooring and full-home improvements in the hero; explains coordination of planning, selections, trades and finishing. The next two paragraphs address household needs, priorities, budget, existing conditions and connected-room decisions. This makes the broad commercial offer understandable immediately without duplicating child-page detail.
- **Hierarchy and relevance:** Intro H2 becomes `One Plan for Your Home Renovation`; the contractor-selection FAQ becomes `How do I choose a renovation contractor in Brampton?`. A natural `Home renovations in Brampton` phrase is used once in the opening. No mechanical insertion of all exact-match variants.
- **Useful planning copy:** Replaces the repeated service-area description with consultation preparation: rooms involved, budget priorities, available photos/measurements, needs versus preferences, and rooms needed while living through the work. This addresses usefulness rather than adding a neighbourhood keyword list.
- **Local proof:** Keeps the existing Peel Village main-floor project and briefly summarizes its connected scope. Links to existing kitchen and hardwood project pages, plus the existing Sandringham-Wellington family bathroom and Credit Valley basement write-ups. The source facts are already in the respective child pages. Detailed specifications and testimonials stay there.
- **Trust:** Adds a main-content `homeowner reviews` link to the existing homepage review section. No review quotations, star ratings, client identities or new credentials were added.
- **Outbound service links:** All four service-card links retained; `Flooring Installation` → `Hardwood Flooring` accurately describes that dedicated page. Additional project-detail links improve discovery of the existing evidence.
- **Inbound authority:** Homepage's existing `Brampton` anchor → `Brampton Home Renovation`; adds `home renovation in Brampton` in a short contextual paragraph on the general full-house page. Existing city-list and child-to-hub links remain intact. This improves context and discoverability; no ranking outcome is guaranteed.
- **CTA:** Hero and closing `Get My Free Quote` → `Request a Quote`. The short label is more direct and shorter than the original, fitting the existing button constraints without CSS changes. The closing section still explains the free consultation.
- **Technical:** OG/X descriptions synchronized with the new description. No URL, canonical, robots, sitemap, schema, stylesheet, script or form-integration changes.

## Local verification

Passed:

- `git diff --check`.
- JavaScript syntax checks: `node --check js/services.js` and `node --check js/script.js`.
- Local static preview returned HTTP 200 with `text/html` for `/brampton/`.
- All 249 local link, asset and fragment references across the three edited HTML files resolve; no broken references found. Includes responsive image `srcset` candidates and the homepage `#reviews` fragment.
- All 29 unique sitemap URLs resolve to local pages; the hub and all four dedicated Brampton pages remain included. `robots.txt` and sitemap are byte-for-byte unchanged.
- Each edited HTML page has one H1, no duplicate IDs or attributes, balanced explicit tags and no nested anchors. These are source integrity checks, not a full HTML conformance certification.
- Hub title and description are unique across the site's HTML pages. OG/X titles and descriptions match the page metadata; OG URL matches the self-canonical.
- Indexing remains `index,follow`; source robots rules allow crawling.
- JSON-LD parses on all three edited HTML pages. Hub Service/BreadcrumbList schema is byte-equivalent after parsing to its original graph, with the same provider, area served and URLs. The homepage retains the referenced business entity.
- Form action, method, fields, subject, required attributes, popup overlay and close button, CTA hook attributes and script include match the original. Formspree endpoint remains `https://formspree.io/f/xqeopjjj`.
- Shared CSS, JavaScript, contact page, all four Brampton service pages, and Toronto/Mississauga hub pages are byte-for-byte unchanged. Their keyword ownership is preserved.

Verification limits:

- The browser access host was unavailable, so desktop/mobile screenshots, interactive navigation and opening/closing the popup could not be checked in a browser. Existing responsive CSS and layout classes were retained, the H1 was shortened, and the CTA label is shorter than the original. Visual confirmation remains a deployment smoke check.
- No test lead was submitted to Formspree. Integration preservation was checked in source; live delivery was not independently tested.
- Production HTTP headers, Google rendering and indexing are not verified by a local server. Confirm these after deployment with Search Console.

## Safety

No unsupported business claims were added. Local experience references come from the existing site; no projects, testimonials, credentials, addresses, project counts or permit assertions were invented. Permit wording remains conditional and unchanged. The hub owns broad home-renovation intent; the unchanged Brampton kitchen, bathroom, basement and hardwood pages retain their individual keyword ownership. No new cities, pages, redirects or URLs were introduced. Canonical, source indexing and schema checks pass. Form and contact functionality were preserved in source, with the runtime limitations above.

## Next steps

1. Deploy the three edited HTML files through the existing website deployment workflow. Keep this report with the project records; no changes have been deployed by this task.
2. Smoke-check the live hub on desktop and mobile: hero/CTA layout, all four local service links, homepage reviews link, mobile menu and quote-popup opening/closing. Verify live lead delivery through the normal business testing process if needed.
3. Inspect `https://loyaltycontracting.ca/brampton/` in Google Search Console. Run **Test Live URL** and confirm Google can access the updated page and sees the intended canonical/indexability.
4. Request indexing for the hub after a successful live test.
5. Record the deployment/indexing-request date. Leave the page stable while Google recrawls and reassesses it, except to fix an actual defect.
6. At the next meaningful checkpoint, normally 2–4 weeks after deployment under the existing tracking README, measure Canada / Web / exact query `home renovation brampton`, filtered to this page. Record impressions, clicks, CTR, average position and ranking URL using the same comparable date-window method. Compare against the supplied 244 / 0 / 0% / 42.8 baseline, accounting for the fact that a rolling three-month window initially contains mostly pre-change data. Append a newly dated tracker row; do not overwrite older measurements. Continued low impressions may require a longer observation period before drawing conclusions.
