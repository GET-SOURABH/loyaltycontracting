# Brampton kitchen page ownership audit — 19 November 2026

Status: implemented locally; **not deployed, committed or pushed**. Intended ownership remains as recorded in `keyword-map.csv`.

## Evidence and limits

User-supplied GSC evidence: Canada / Web Search / Last 3 months / exact query `kitchen renovation brampton`: 38 impressions, 0 clicks, 0% CTR, average position 79.2. Only `https://loyaltycontracting.ca/brampton/` appears; the kitchen child does not appear for this query. This is supplied evidence, not a newly retrieved GSC export. No GSC indexing report, Google-selected canonical, last-crawl data or backlink data was available.

Read-only HTTPS requests to both public URLs returned HTTP 200, `text/html; charset=utf-8`, their correct self-canonicals and `index,follow`; neither response contained an `X-Robots-Tag`. Their visible main content matched the initial checkout. Both responses reported `Last-Modified: Tue, 17 Nov 2026 21:39:41 GMT`. That timestamp is an HTTP response observation, not proof of when Google crawled either page. A web-reader result showed an older hub H1; direct HTTPS source was used to verify the current baseline.

The recent hub audit is `brampton-hub-audit-2026-11-18.md`. A rolling three-month GSC window largely predates that recent optimization, so the supplied query data cannot establish how Google has responded to it.

## Before-edit comparison

| Element | Brampton hub | Brampton kitchen child | Finding |
| --- | --- | --- | --- |
| Title | `Home Renovation Brampton \| Loyalty Contracting` | `Kitchen Renovation Brampton \| Loyalty Contracting` | Already distinct and correctly targeted; retain both. |
| Description | Broad home renovation, kitchens/bathrooms/basements/flooring/full-home scope and quote invitation | “Plan a kitchen renovation…” / “Explore…” / “verified Peel Village experience” | Child is relevant, but can give a clearer commercial invitation without the editorial “verified” label. |
| H1 | `Home Renovation in Brampton` | `Kitchen Renovation Services in Brampton` | Both relevant. Child can use the shorter, direct service/location formulation. |
| Opening | Names Loyalty Contracting, Brampton homeowners and the range of home improvements | Generic list of kitchen components and a coordinated plan; provider/city absent from hero paragraph | Make the child immediately identify the local commercial service, provider and estimate next step. |
| H2/H3s | Home renovation scope, preparation, local experience, permit coordination, home process and FAQs; service-card H3s for individual services | Kitchen planning, eight scope cards, cost factors, Peel Village project, structural detail, homeowner feedback, kitchen process and FAQs | Child already has much greater kitchen depth. Hub is not predominantly a kitchen landing page. No wholesale rewrite or extra keyword headings needed. |
| Kitchen overlap | Service card lists layout, cabinetry, surfaces, storage, lighting, flooring and finishes; local project paragraph; dedicated kitchen/main-floor FAQ repeats that project | Detailed kitchen components, project specifications, wall/beam detail and quote | Trim the hub component list and redundant kitchen FAQ; retain the local project paragraph intact. |
| Inbound links in local HTML | 8 referring pages / 13 links; includes homepage, About, Contact, full-house page and all four child pages | 4 referring pages / 6 links; hub (3), full-house (1), GTA kitchen (1), Brampton hardwood (1) | Relative discovery/context gap. Counts describe source links, not measured PageRank or backlink authority. |
| Link wording | Hub receives `Brampton Home Renovation`, `home renovation in Brampton`, city labels and child breadcrumbs | Hub labels `Kitchen Renovation`, project name and `kitchens`; GTA kitchen links only with `Brampton` in an FAQ; full-house project label omits city | Child needs a few prominent, descriptive contextual links. Preserve existing hub support. |
| Schema | Service: Home Renovation, Brampton, homepage business reference; two-item BreadcrumbList | Service: Kitchen Renovation, Brampton, same provider; three-item BreadcrumbList | Correctly differentiated; no schema reason to merge ownership. |
| Canonical/indexing | Correct self-canonical, `index,follow`, robots allows crawl, sitemap entry | Correct self-canonical, `index,follow`, robots allows crawl, sitemap entry | No source-level technical obstacle or cross-canonical found. Actual inclusion in Google's index remains unverified. |
| FAQs | Broad services and project planning, plus kitchen/main-floor question | Kitchen scope, cost factors, wall opening, connected work, selection coordination, conditional structural/permit planning and estimate request | Replace hub kitchen repetition with connected-room planning; child can answer timeline and quote preparation more usefully. |
| Project evidence | Short Peel Village detached-home kitchen/main-floor summary; linked hardwood, bathroom and basement examples | Peel Village wall removal/concealed beam, 8-foot island, shaker cabinets, quartz, LED lights and main-level hardwood, plus existing homeowner feedback | Retain original evidence on both pages; surface the child's detailed example earlier through a section link. |
| CTA | `Request a Quote`, call, contact, existing free consultation popup | Generic `Get My Free Quote`, estimate button, call/contact, existing free consultation popup | Make the two main child buttons kitchen-specific; preserve all hooks and forms. |
| Duplicate content | No exact normalized main-content paragraph shared with the child | Similar coordination vocabulary, common service template and shared navigation/footer/assets | Semantic overlap exists, but this is not a pair of duplicate pages. Shared kitchen imagery alone does not establish local project provenance. |

### Why Google was likely choosing the hub

The most plausible combination is stronger internal discovery/context for the hub plus enough kitchen relevance to satisfy the query: a detailed component list, a completed local kitchen/main-floor example and a second description of that example in its FAQ. The child had weaker prominent inbound support and a generic commercial opening even though its deeper scope and project evidence were already better aligned with kitchen intent.

These are source-supported hypotheses, not a confirmed account of Google's ranking system. The child already had the correct keyword title and H1; metadata/canonical errors were not found. Its absence from this exact-query report does not prove it is unindexed. GSC URL Inspection is needed to rule out indexing, selected-canonical or crawl-history issues. The low impression count and recent hub update also limit causal conclusions.

Google documents that links help discovery and relevance, and recommends meaningful contextual anchor text: [Google Search Central link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Its [title guidance](https://developers.google.com/search/docs/appearance/title-link) supports clear, descriptive titles; the existing service-specific titles already meet that objective.

## Files changed

1. `brampton/index.html`
2. `brampton/kitchen-renovation/index.html`
3. `index.html`
4. `services/kitchen.html`
5. `services/full-house-renovation.html`
6. `seo-tracking/brampton-kitchen-ownership-audit-2026-11-19.md` — this report.

## Before → after

### Brampton hub

- Title, description (including OG/X), H1, opening, full-home scope, local consultation advice, permit wording, process, broad CTA and schema: unchanged.
- Service-card anchor: `Kitchen Renovation` → `Kitchen Renovation in Brampton`.
- Service-card copy: detailed list of seven kitchen components → `Plan a kitchen update around daily use. See the dedicated service page for scope and project details.` It remains a kitchen service summary and links to the dedicated page.
- FAQ: `Do you provide kitchen and main-floor renovation work?`, which repeated the Peel Village kitchen specifications → `How are changes between connected rooms planned?`, answering how layout/material/finish choices affect adjoining rooms and the agreed scope/sequence.
- The existing Peel Village project paragraph, its kitchen and hardwood project links, and the Sandringham-Wellington bathroom and Credit Valley basement references are unchanged. No local evidence was removed.
- All three hub-to-kitchen links remain; project and FAQ anchors keep their existing natural wording rather than repeating an exact-match phrase everywhere.

### Brampton kitchen page

- Title: `Kitchen Renovation Brampton | Loyalty Contracting` → unchanged; already directly targets the intended service/location.
- H1: `Kitchen Renovation Services in Brampton` → `Kitchen Renovation in Brampton`.
- Description: `Plan a kitchen renovation in Brampton with Loyalty Contracting. Explore layouts, cabinetry, countertops, islands, lighting and verified Peel Village experience.` → `Kitchen renovation in Brampton: layout planning, cabinetry, countertops and finishes. See our Peel Village project and request a kitchen renovation quote.` (154 characters.) OG/X descriptions synchronized.
- Hero: generic component list → names Loyalty Contracting's kitchen service in Brampton, explains layout/storage/cabinetry/countertop/finishing scope and invites discussion of an estimate.
- First planning paragraphs: generic planning/coordination language → concrete decisions about keeping or changing the layout, cabinetry/storage and cooking surfaces; introduces the existing Peel Village example with a jump link to `#peel-village-kitchen`.
- Local relevance: existing Peel Village facts appear earlier. No extra neighbourhood list or new local work claim.
- Scope: all eight kitchen scope cards and project-specific cost factors retained. No new service promises or prices.
- Process: steps 3–4 now name cabinetry/countertop decisions, adjacent areas, demolition/preparation and cabinet/surface/finishing stages. Existing five-stage process and headings retained.
- Project proof, structural work and homeowner feedback: original text unchanged. Adds only the project section ID for navigation. Images remain generic site assets; none are newly labelled as proof of the Peel Village location.
- FAQs: repeated selection-coordination question → timeline question with scope/material/structural dependencies and no promised duration. Estimate FAQ now asks for Brampton location, available photos/measurements, layout plans and cabinetry/surface/budget priorities. Other FAQs, including conditional structural/permit wording, remain.
- CTA: both main `Get My Free Quote` buttons → `Request a Kitchen Quote`; closing paragraph invites a free consultation about kitchen scope and an estimate. Existing estimate button, telephone/contact links and popup/form behavior are preserved.
- All H2/H3s remain. The heading hierarchy was already service-specific and did not need expansion.

### Internal links

- Homepage: adds one contextual link near Project Showcase, `kitchen renovation services in Brampton`, identifying the destination's service and existing local example. Does not assign the surrounding before/after photos to that project.
- GTA kitchen page: adds one early contextual link, `Brampton kitchen renovation services`, pointing readers to local scope, project and estimate details. Existing Toronto/cost-guide links and the city FAQ remain.
- Full-house page: improves its existing project anchor from `Peel Village kitchen and main-floor project` to `Peel Village kitchen and main-floor project in Brampton`. No extra link needed.
- Hub: improves the existing service-card anchor; keeps project/FAQ links. No site-wide menu/footer additions.
- Child: adds one in-page project jump link; keeps broader Brampton, GTA kitchen and full-house links.
- Relevant Brampton hardwood page already links to the kitchen page. Other Brampton service pages and Toronto-specific articles were left alone to preserve their respective service/city intent.
- Child inbound support: 4 → 5 referring pages and 6 → 8 links. Only two new external-to-page contextual links; the rest are refinements to existing links.

## Ownership confirmation

- `/brampton/` remains the broad commercial owner for `home renovation brampton`. Its protected title, H1, metadata, opening, scope, local evidence and conversion content remain unchanged.
- `/brampton/kitchen-renovation/` is the strongest kitchen-specific landing page of this pair in the edited source: targeted title/H1/description/hero, full kitchen scope, detailed local kitchen evidence, process, cost factors, kitchen FAQs and kitchen quote CTA, with stronger contextual inbound links.
- `/brampton/bathroom-renovation/`, `/brampton/basement-renovation/` and `/brampton/hardwood-flooring/` remain byte-for-byte unchanged. Existing hub links to those services are retained. No new competing landing pages, URLs or keyword ownership assignments.
- These are implementation/intent confirmations. Google's actual ranking-URL switch requires deployment, recrawling and measurement; it has not been observed or guaranteed.

## Safety and technical verification

Passed:

- `git diff --check`.
- Five edited HTML pages: unique titles, descriptions and H1s across all local HTML; one H1 per edited page; balanced explicit tags, no duplicate attributes, duplicate IDs or nested anchors. These are source integrity checks, not full HTML conformance certification.
- 430 local references resolved across edited pages and sitemap checks, including links, images, responsive `srcset`, scripts, stylesheets, preload references and fragments. No broken local references found. External destinations were not exhaustively availability-tested.
- All 29 sitemap URLs resolve to local pages. `sitemap.xml` and `robots.txt` unchanged; both target pages remain listed/crawlable.
- Both self-canonicals remain exactly correct; source `index,follow` retained. OG URL, title and description and X title/description remain synchronized with page metadata.
- JSON-LD parses on all five edited pages, and all schema graphs are unchanged from baseline. Brampton Service URLs, service types, Brampton area and provider reference remain correct; homepage business entity retained. Breadcrumb positions, URLs and visible labels checked. No FAQ/review/rating schema added. No external Rich Results Test was run.
- All five external JavaScript files and five inline executable script blocks pass `node --check`.
- Forms, popup markup, overlays, close buttons, script includes, inline executable scripts and CTA hook attributes match baseline. Existing Formspree action/method/fields/subjects/required attributes remain unchanged; CTA labels are the only popup-trigger text edits.
- Local preview: all five edited page URLs return HTTP 200 / `text/html`.
- Existing production target URLs: HTTP 200, matching baseline main content, correct self-canonicals, `index,follow`, no `X-Robots-Tag`. System curl verified HTTPS normally; Python's certificate-store attempt failed, so it was not used as evidence of a production fault.
- All initial workspace files outside the five edited HTML files are unchanged, including CSS/JS, contact page, three other Brampton service pages, Toronto/Mississauga pages, keyword map and sitemap. This report is the only new repository file.
- Hub head/hero/full-home feature/closing CTA/local evidence and child project/structural/feedback text compared directly with baseline and preserved.

No new reviews, names, projects, neighbourhood experience, prices, permit approvals, credentials, awards or project counts were invented. Facts reused come from existing project text in this codebase, not independent customer-record verification. The existing testimonial remains unchanged; no new verification claim is made about it.

Verification limits:

- Browser access host is unavailable; native browser access also reports computer-use permissions not granted. Desktop/mobile visual layout, menu interaction, popup opening/closing and form interaction could not be exercised. Source preservation and syntax checks passed; runtime browser checks are still pending.
- No test lead submitted; Formspree delivery was not tested.
- Google-selected canonicals, actual indexing, Google rendering, Rich Results eligibility and future ranking ownership are unverified. Passing local checks does not establish them.

## After review and authorized deployment

1. Review this diff and complete desktop/mobile browser checks, including the new heading/button lengths, contextual links, project jump link, menus and popup open/close. No deployment was performed by this task.
2. After authorized deployment, verify both live pages and use GSC URL Inspection / Test Live URL to check crawlability, indexing and Google-selected canonical, especially for the child. Request indexing after successful checks.
3. Record the deployment date. Compare Canada / Web / exact `kitchen renovation brampton` by page at the normal 2–4 week checkpoint; retain the supplied 38 / 0 / 0% / 79.2 baseline and compare equivalent windows. Low volume may require more time. Monitor the hub's `home renovation brampton` and the three sibling-service queries alongside it.
4. Append dated measurements to the tracker when actually collected; do not overwrite historical measurements or treat an absent query row as zero. No ranking data was fabricated or added by this task.
