# Loyalty Contracting Group — Keyword Mapping

This document maps the verified research in `Keyword.md` to the current website. Volume and KD values shown in the mapping table belong to the primary keyword in that row and are reproduced exactly from `Keyword.md`. A dash means the row is a supporting cluster rather than a separately targeted page. “Pending” is used only where `Keyword.md` explicitly says verification is still pending.

The recommended architecture keeps the current `.html` URLs for existing pages so that no unnecessary migration is introduced. New location pages use the clean nested URL pattern proposed in the brief. No website page, metadata, content, sitemap, or technical file has been changed as part of this mapping.

## Existing Website Audit

| Existing Page | Current URL | Current Purpose | SEO Action |
|---|---|---|---|
| Homepage | `/` | Broad home-renovation and contracting overview for Toronto and the GTA; introduces all core services, projects, reviews, service areas, and quote form. | **Reposition.** Make this the GTA-wide business-intent page, with `home renovation gta` as its only primary keyword. Keep general-contractor GTA terms as secondary. Reduce its claim on Toronto-specific service terms so that future Toronto pages can rank independently. |
| About | `/about.html` | Company background, trust, workmanship, process, service overview, and areas served. | Keep as a branded trust/support page. Do not give it a non-branded commercial primary keyword. Link contextually to the homepage, service pages, and future location pages. |
| Contact | `/contact.html` | Quote and consultation conversion page for renovation enquiries. | Keep as a conversion/support page. Do not make it compete for `home renovation toronto`, `home renovation gta`, or individual service keywords. |
| Full House Renovation | `/services/full-house-renovation.html` | Whole-home planning and renovation across Toronto and the GTA, including kitchens, bathrooms, basements, flooring, living areas, and project coordination. | **Reposition.** Target `full home renovation gta` and use “full house,” “complete,” and “whole home” wording as supporting language. Separate it from the homepage’s broader company-level intent and future city home-renovation pages. |
| Kitchen Renovation | `/services/kitchen.html` | GTA-wide kitchen remodeling, cabinetry, counters, backsplash, lighting, flooring, planning, and finishes. | Optimize for `kitchen renovation gta`. Keep this as the regional service hub; future city kitchen pages should target only their city-specific primary keywords. |
| Bathroom Renovation | `/services/bathroom.html` | GTA-wide bathroom remodeling, tile, vanity, storage, shower, bathtub, lighting, fixtures, and finishing. | Optimize for `bathroom renovation gta`. Keep this as the regional service hub and avoid making it the primary Toronto bathroom page. |
| Basement Renovation | `/services/basement.html` | GTA-wide basement finishing and remodeling, including recreation rooms, flooring, lighting, offices, gyms, and rental-ready spaces. | Optimize for `basement renovation gta`. Keep this as the regional service hub and reserve exact city intent for location/service pages. |
| Flooring Installation | `/services/flooring.html` | GTA-wide flooring replacement and installation for rooms, stairs, basements, trims, and full homes. | Optimize for `flooring installation gta`. Add relevant hardwood and engineered-hardwood terminology without repositioning the page as a flooring retailer. |

### Audit Findings

- There are **eight relevant existing public pages**: the homepage, About, Contact, and five service pages.
- There are **five existing service pages**: full-house renovation, kitchen renovation, bathroom renovation, basement renovation, and flooring installation.
- There is **no dedicated main-floor/open-concept renovation page**.
- There are **no location-specific pages** for Toronto, Mississauga, Etobicoke, Brampton, Oakville, or Burlington.
- `404.html`, `privacy.html`, `terms.html`, verification files, utility files, and non-public development files were excluded as instructed.
- The homepage and `/services/full-house-renovation.html` currently overlap around broad “home renovation in Toronto & GTA” intent.
- Each current service page targets both Toronto and the GTA in its title, H1, description, and body copy. That is workable today, but it will conflict with future Toronto service pages unless the current service pages are made clearly GTA-wide hubs.
- About and Contact repeat Toronto/GTA renovation wording, but their underlying intents are informational and conversion-oriented. They are not separate SEO landing-page opportunities and should remain supporting pages.

## Mapping Rules

- Every recommended SEO landing page has exactly one primary keyword.
- General-contractor terms are grouped into the matching broad location or homepage cluster; they do not justify parallel contractor pages that would overlap with home-renovation pages.
- A city-wide home-renovation page absorbs that city’s full-home, whole-home, and general-contractor variants unless a clearly different service intent justifies a city/service page.
- Core service pages target GTA-wide intent. City/service pages target exact city intent.
- Cost queries are separated from commercial landing pages because they call for guide-style content.
- “Best,” “trusted,” “professional,” “modern,” “custom,” “small,” “luxury,” “affordable,” “ON,” and “Ontario” variants are supporting language, not reasons for additional pages.
- A city/service page marked **Missing — Create** should be published only when it can contain genuinely local proof: relevant project examples, neighbourhood/property context, permitting or building considerations where applicable, locally specific FAQs, and non-duplicated copy. If those inputs are unavailable, hold the page rather than publish a thin doorway page.

## Final Keyword Mapping

| Location | Service | Recommended URL | Primary Keyword | Secondary Keywords | Volume | KD | Page Status | Priority |
|---|---|---|---|---|---|---|---|---|
| GTA | Home Renovation / General Contracting | `/` | home renovation gta | general contractor gta; residential general contractor gta | <100 | Hard | Existing — Needs Repositioning | Critical |
| GTA | Full Home Renovation | `/services/full-house-renovation.html` | full home renovation gta | whole home renovation gta *(pending verification)* | <100 | N/A | Existing — Needs Repositioning | High |
| GTA | Kitchen Renovation | `/services/kitchen.html` | kitchen renovation gta | affordable kitchen renovation gta; small kitchen renovation gta | <100 | N/A | Existing — Optimize | High |
| GTA | Bathroom Renovation | `/services/bathroom.html` | bathroom renovation gta | luxury bathroom renovation gta; small bathroom renovation gta; bathroom renovation gta toronto | >100 | N/A | Existing — Optimize | Critical |
| GTA | Basement Renovation | `/services/basement.html` | basement renovation gta | legal basement renovation gta *(pending verification)*; walk-out basement renovation gta *(pending verification)* | >100 | N/A | Existing — Optimize | High |
| GTA | Flooring Installation | `/services/flooring.html` | flooring installation gta | hardwood flooring gta; engineered hardwood flooring gta; hardwood flooring gta area | <100 | N/A | Existing — Optimize | High |
| GTA | Main Floor / Open Concept Renovation | `/services/main-floor-renovation/` | main floor renovation gta | open concept renovation gta | Pending | Pending | Future Content | Medium |
| Toronto | Home Renovation / General Contracting | `/toronto/` | home renovation toronto | full home renovation toronto; complete home renovation toronto; modern home renovation toronto; whole home renovation toronto; home renovation toronto contractor; custom home renovation toronto; affordable home renovation toronto; general contractor toronto; residential general contractor toronto; find a general contractor toronto; best general contractor toronto; hire a general contractor toronto; trusted general contractor toronto; licensed general contractor toronto | >1000 | Hard | Missing — Create | Critical |
| Toronto | Kitchen Renovation | `/toronto/kitchen-renovation/` | kitchen renovation toronto | small kitchen renovation toronto; condo kitchen renovation toronto; custom kitchen renovation toronto; modern kitchen renovation toronto; open concept kitchen renovation toronto | >100 | Medium | Missing — Create | High |
| Toronto | Bathroom Renovation | `/toronto/bathroom-renovation/` | bathroom renovation toronto | condo bathroom renovation toronto; master bathroom renovation toronto; best bathroom renovation toronto; modern bathroom renovation toronto; small bathroom renovation toronto; professional bathroom renovation toronto; custom bathroom renovation toronto | >1000 | Easy | Missing — Create | Critical |
| Toronto | Basement Renovation | `/toronto/basement-renovation/` | basement renovation toronto | legal basement renovation toronto; full basement renovation toronto; custom basement renovation toronto; best basement renovation toronto; walk-out basement renovation toronto; basement bathroom renovation toronto | >100 | Medium | Missing — Create | High |
| Toronto | Flooring Installation | `/toronto/flooring-installation/` | flooring installation toronto | hardwood floor installation toronto; hardwood flooring toronto; engineered hardwood flooring toronto; residential flooring installation toronto; hardwood flooring installation toronto; flooring renovation toronto; flooring contractor toronto; laminate flooring installation toronto; vinyl flooring installation toronto; vinyl plank flooring installation toronto; floor installation toronto; wood floor installation toronto; condo flooring renovation toronto; kitchen flooring renovation toronto | >100 | Medium | Missing — Create | High |
| Toronto | Main Floor / Open Concept Renovation | `/toronto/main-floor-renovation/` | main floor renovation toronto | open concept renovation toronto; open concept kitchen renovation toronto | <100 | N/A | Future Content | Medium |
| Toronto | Home Renovation Cost Guide | `/guides/home-renovation-cost-toronto/` | home renovation toronto cost | — | >100 | Easy | Future Content | High |
| Toronto | Kitchen Renovation Cost Guide | `/guides/kitchen-renovation-cost-toronto/` | kitchen renovation toronto cost | cost of kitchen renovation toronto; average cost kitchen renovation toronto | >100 | N/A | Future Content | High |
| Toronto | Bathroom Renovation Cost Guide | `/guides/bathroom-renovation-cost-toronto/` | cost of bathroom renovation toronto | cost of bathroom renovation toronto 2026; bathroom renovation toronto cost | <100 | Easy | Future Content | Medium |
| Toronto | Basement Renovation Cost Guide | `/guides/basement-renovation-cost-toronto/` | cost of basement renovation toronto | — | <100 | Easy | Future Content | Medium |
| Mississauga | Home Renovation / General Contracting | `/mississauga/` | home renovation mississauga | full home renovation mississauga; whole home renovation mississauga; small home renovation mississauga; interior general contractor mississauga; best general contractor mississauga | >100 | Easy | Missing — Create | High |
| Mississauga | Kitchen Renovation | `/mississauga/kitchen-renovation/` | kitchen renovation mississauga | small kitchen renovation mississauga; custom kitchen renovation mississauga; best kitchen renovation mississauga; open concept kitchen renovation mississauga; modern kitchen renovation mississauga | >100 | Easy | Missing — Create | High |
| Mississauga | Bathroom Renovation | `/mississauga/bathroom-renovation/` | bathroom renovation mississauga | ensuite bathroom renovation mississauga | >100 | Easy | Missing — Create | High |
| Mississauga | Basement Renovation | `/mississauga/basement-renovation/` | basement renovation mississauga | legal basement renovation mississauga; walk-out basement renovation mississauga | <100 | Easy | Future Content | Medium |
| Mississauga | Main Floor / Open Concept Renovation | `/mississauga/main-floor-renovation/` | main floor renovation mississauga | open concept renovation mississauga | <100 | N/A | Future Content | Low |
| Mississauga | Flooring / Hardwood Flooring | `/mississauga/hardwood-flooring/` | hardwood flooring mississauga | flooring installation mississauga; hardwood floor installation mississauga; hardwood flooring installation mississauga; engineered hardwood flooring mississauga; engineered hardwood floor installation mississauga; engineered flooring installation mississauga; laminate flooring installation mississauga; laminate floor installation mississauga; vinyl flooring installation mississauga; floor installation mississauga; wood floor installation mississauga; solid hardwood flooring mississauga; oak hardwood flooring mississauga; wide plank hardwood flooring mississauga | >100 | Hard | Missing — Create | Medium |
| Etobicoke | Home Renovation / General Contracting | `/etobicoke/` | home renovation etobicoke | full home renovation etobicoke; whole home renovation etobicoke; best general contractor etobicoke | >100 | Easy | Missing — Create | High |
| Etobicoke | Kitchen Renovation | `/etobicoke/` | — | kitchen renovation etobicoke | — | — | Supporting Keyword Only | Low |
| Etobicoke | Bathroom Renovation | `/etobicoke/bathroom-renovation/` | bathroom renovation etobicoke | — | >100 | Easy | Missing — Create | High |
| Etobicoke | Basement Renovation | `/etobicoke/basement-renovation/` | basement renovation etobicoke | — | >100 | N/A | Missing — Create | High |
| Etobicoke | Flooring / Hardwood Flooring | `/etobicoke/flooring-installation/` | floor installation etobicoke | engineered hardwood flooring etobicoke; hardwood floor installation etobicoke; hardwood flooring etobicoke; flooring installation etobicoke; hardwood flooring installation etobicoke; residential flooring installation etobicoke; heated floor installation etobicoke; professional floor installation etobicoke; vintage hardwood flooring etobicoke | >100 | N/A | Missing — Create | High |
| Brampton | Home Renovation / General Contracting | `/brampton/` | home renovation brampton | full home renovation brampton; best home renovation brampton; general contractor brampton | >100 | Easy | Missing — Create | High |
| Brampton | Kitchen Renovation | `/brampton/kitchen-renovation/` | kitchen renovation brampton | kitchen renovation brampton cost | >100 | Easy | Missing — Create | High |
| Brampton | Bathroom Renovation | `/brampton/bathroom-renovation/` | bathroom renovation brampton | — | >100 | Easy | Missing — Create | High |
| Brampton | Basement Renovation | `/brampton/basement-renovation/` | basement renovation brampton | legal basement renovation brampton; walk-out basement renovation brampton | <100 | Easy | Future Content | Medium |
| Brampton | Flooring / Hardwood Flooring | `/brampton/hardwood-flooring/` | hardwood flooring brampton | flooring installation brampton; hardwood floor installation brampton; hardwood flooring installation brampton; laminate flooring installation brampton; engineered hardwood flooring brampton; solid hardwood flooring brampton; wide plank hardwood flooring brampton; oak hardwood flooring brampton; floor installation brampton; heated floor installation brampton | >100 | Hard | Future Content | Medium |
| Oakville | Home Renovation / General Contracting | `/oakville/` | home renovation oakville | full home renovation oakville; whole home renovation oakville; custom home renovation oakville; general contractor oakville | >100 | Medium | Missing — Create | High |
| Oakville | Kitchen Renovation | `/oakville/kitchen-renovation/` | kitchen renovation oakville | custom kitchen renovation oakville; modern kitchen renovation oakville | >100 | Medium | Missing — Create | High |
| Oakville | Bathroom Renovation | `/oakville/bathroom-renovation/` | bathroom renovation oakville | ensuite bathroom renovation oakville; modern bathroom renovation oakville | >100 | Easy | Missing — Create | High |
| Oakville | Basement Renovation | `/oakville/basement-renovation/` | basement renovation oakville | legal basement renovation oakville; walk-out basement renovation oakville | >100 | Easy | Missing — Create | High |
| Oakville | Main Floor / Open Concept Renovation | `/oakville/main-floor-renovation/` | main floor renovation oakville | open concept renovation oakville | <100 | N/A | Future Content | Low |
| Oakville | Flooring Installation | `/oakville/flooring-installation/` | floor installation oakville | flooring installation oakville; hardwood flooring oakville; hardwood floor installation oakville; hardwood flooring installation oakville; engineered hardwood flooring oakville; solid hardwood flooring oakville; wide plank hardwood flooring oakville; engineered hardwood floor installation oakville | >100 | N/A | Missing — Create | High |
| Burlington | Home Renovation / General Contracting | `/burlington/` | home renovation burlington | home renovation burlington ontario; home renovation burlington on; full home renovation burlington; whole home renovation burlington; luxury home renovation burlington; interior home renovation burlington; custom home renovation burlington; trusted home renovation burlington; empty nester home renovation burlington; general contractor burlington; general contractor burlington ontario; general contractor burlington on; general contractor burlington renovations | >100 | N/A | Missing — Create | High |
| Burlington | Kitchen Renovation | `/burlington/kitchen-renovation/` | kitchen renovation burlington | kitchen renovation burlington ontario; kitchen renovation burlington on; custom kitchen renovation burlington; modern kitchen renovation burlington; affordable kitchen renovation burlington; luxury kitchen renovation burlington | >100 | Medium | Missing — Create | High |
| Burlington | Bathroom Renovation | `/burlington/bathroom-renovation/` | bathroom renovation burlington | bathroom renovation burlington ontario; bathroom renovation burlington on; ensuite bathroom renovation burlington; modern bathroom renovation burlington; luxury bathroom renovation burlington | >100 | Easy | Missing — Create | High |
| Burlington | Basement Renovation | `/burlington/basement-renovation/` | basement renovation burlington | basement renovation burlington on; legal basement renovation burlington; walk-out basement renovation burlington | >100 | N/A | Missing — Create | High |
| Burlington | Main Floor / Open Concept Renovation | `/burlington/main-floor-renovation/` | main floor renovation burlington | split level main floor renovation burlington; open concept renovation burlington | <100 | N/A | Future Content | Low |
| Burlington | Flooring / Hardwood Flooring | `/burlington/hardwood-flooring/` | hardwood flooring burlington | engineered hardwood flooring burlington; hardwood flooring burlington ontario; flooring installation burlington; hardwood flooring installation burlington; hardwood flooring installation burlington ontario; hardwood floor installation burlington; solid hardwood flooring burlington; oak hardwood flooring burlington; wide plank hardwood flooring burlington | >100 | Easy | Missing — Create | High |

### Mapping Notes

- `whole home renovation gta`, `custom kitchen renovation gta`, `ensuite bathroom renovation gta`, `legal basement renovation gta`, `walk-out basement renovation gta`, `main floor renovation gta`, `open concept renovation gta`, `hardwood floor installation gta`, `hardwood flooring installation gta`, and `floor installation gta` remain pending in `Keyword.md`. They must not be assigned numeric volume or KD until verified.
- `cheap hardwood flooring gta` is verified at `<100` / `N/A`, but it is not recommended as a target phrase because its price-shopping intent does not fit the premium renovation positioning. It can be omitted rather than forced into copy.
- The Mississauga and Burlington hardwood pages use the higher-volume mixed-intent hardwood term as primary. Their content must clearly present installation/renovation services, not imply a retail flooring store unless that is genuinely offered.
- Brampton hardwood flooring is deferred despite `>100` volume because KD is Hard and the term has mixed commercial intent. It should be revisited after the higher-intent renovation pages and core flooring hub are established.
- Main-floor pages are deferred because every verified city-level primary is `<100` / `N/A`, and the GTA terms remain pending. The service deserves a core page only after the GTA query is verified or sufficient project evidence supports a distinct page.

## Pages To Optimize

1. **Homepage — `/`**
   - Primary keyword: `home renovation gta`
   - Secondary keywords: `general contractor gta`, `residential general contractor gta`
   - Action: establish the homepage as the GTA-wide company and renovation-services hub. Avoid using `home renovation toronto` as a second primary.

2. **Full House Renovation — `/services/full-house-renovation.html`**
   - Primary keyword: `full home renovation gta`
   - Secondary keyword: `whole home renovation gta` only after verification
   - Action: clarify whole-home project intent and reduce overlap with the homepage. “Full house renovation” can remain natural supporting language even though it is not the mapped primary.

3. **Kitchen Renovation — `/services/kitchen.html`**
   - Primary keyword: `kitchen renovation gta`
   - Secondary keywords: `affordable kitchen renovation gta`, `small kitchen renovation gta`
   - Action: make this the GTA-wide kitchen hub and link down to qualified city kitchen pages.

4. **Bathroom Renovation — `/services/bathroom.html`**
   - Primary keyword: `bathroom renovation gta`
   - Secondary keywords: `luxury bathroom renovation gta`, `small bathroom renovation gta`
   - Action: make this the GTA-wide bathroom hub. It should not retain `bathroom renovation toronto` as a co-primary after the Toronto bathroom page launches.

5. **Basement Renovation — `/services/basement.html`**
   - Primary keyword: `basement renovation gta`
   - Action: make this the GTA-wide basement hub and use future verified GTA variants only as supporting terms.

6. **Flooring Installation — `/services/flooring.html`**
   - Primary keyword: `flooring installation gta`
   - Secondary keywords: `hardwood flooring gta`, `engineered hardwood flooring gta`, `hardwood flooring gta area`
   - Action: expand the page’s material and installation coverage while keeping its service intent clear.

`/about.html` and `/contact.html` should retain their trust and conversion roles. They should support the SEO landing pages through internal links, but they do not need separate non-branded primary keywords.

## Pages To Create

The following are the genuinely justified missing landing pages from the current research. They are grouped into broad location pages and service-specific location pages. This is a publishing backlog, not permission to release template-swapped pages; each page must pass the unique-local-content requirement described above.

### Broad Location Pages

| Proposed URL | Primary Keyword | Secondary Keywords | Why the Page Deserves to Exist |
|---|---|---|---|
| `/toronto/` | home renovation toronto | full/complete/modern/whole/custom home renovation Toronto; Toronto general-contractor variants | The primary has `>1000` volume. It provides a distinct Toronto-wide renovation intent separate from the GTA homepage and absorbs Toronto general-contractor variants without a duplicate contractor page. |
| `/mississauga/` | home renovation mississauga | full/whole/small home renovation Mississauga; Mississauga general-contractor variants | The primary has `>100` volume and Easy KD. A broad city hub can also reflect the company’s Mississauga address and local proof. |
| `/etobicoke/` | home renovation etobicoke | full/whole home renovation Etobicoke; best general contractor Etobicoke | The primary has `>100` volume and Easy KD. It creates a clear local hub for multiple supported service intents. |
| `/brampton/` | home renovation brampton | full/best home renovation Brampton; general contractor Brampton | The primary has `>100` volume and Easy KD; `general contractor brampton` is also `>100` / Easy and can be captured as a secondary without a competing page. |
| `/oakville/` | home renovation oakville | full/whole/custom home renovation Oakville; general contractor Oakville | The primary has `>100` volume and Medium KD, with multiple distinct service clusters to support a substantive city hub. |
| `/burlington/` | home renovation burlington | Burlington Ontario/ON, full/whole/luxury/interior/custom/trusted/empty-nester home renovation variants; Burlington general-contractor variants | The primary and `home renovation burlington ontario` each have `>100` volume. The cluster is broad enough for a distinct city hub rather than scattered thin pages. |

### City + Service Pages

| Proposed URL | Primary Keyword | Secondary Keywords | Why the Page Deserves to Exist |
|---|---|---|---|
| `/toronto/kitchen-renovation/` | kitchen renovation toronto | small, condo, custom, modern, and open-concept kitchen renovation Toronto | The primary and small-kitchen variation each have `>100` volume; condo and open-concept needs provide meaningful Toronto-specific content angles. |
| `/toronto/bathroom-renovation/` | bathroom renovation toronto | condo, master, modern, small, professional, and custom bathroom renovation Toronto | The primary is the strongest opportunity in the research at `>1000` volume and Easy KD; condo-specific intent supports a distinct local page. |
| `/toronto/basement-renovation/` | basement renovation toronto | legal, full, custom, walk-out, best, and basement-bathroom renovation Toronto | The primary has `>100` volume and Medium KD, plus several closely related commercial sub-intents. |
| `/toronto/flooring-installation/` | flooring installation toronto | hardwood, engineered hardwood, laminate, vinyl, condo, residential, and related installation terms | The primary is `>100` / Medium, with several additional `>100` material and installation variants that belong on one comprehensive page. |
| `/mississauga/kitchen-renovation/` | kitchen renovation mississauga | small, custom, best, open-concept, and modern kitchen renovation Mississauga | The primary is `>100` / Easy and the variations share the same commercial page intent. |
| `/mississauga/bathroom-renovation/` | bathroom renovation mississauga | ensuite bathroom renovation mississauga | The primary is `>100` / Easy and represents a clear service-specific local query. |
| `/mississauga/hardwood-flooring/` | hardwood flooring mississauga | flooring installation, hardwood installation, engineered hardwood, laminate, vinyl, and wood-floor terms | The leading term is `>100`; the page can consolidate the large local flooring cluster, provided the content clearly reflects installation services rather than retail-only intent. |
| `/etobicoke/bathroom-renovation/` | bathroom renovation etobicoke | — | The exact commercial query is `>100` / Easy, giving it enough standalone demand. |
| `/etobicoke/basement-renovation/` | basement renovation etobicoke | — | The exact commercial query is `>100`; the page should be built around genuine Etobicoke basement/project conditions rather than generic copy. |
| `/etobicoke/flooring-installation/` | floor installation etobicoke | engineered hardwood flooring, hardwood floor installation, flooring installation, and related Etobicoke terms | Three closely related terms have `>100` volume, creating a strong consolidated local flooring cluster. |
| `/brampton/kitchen-renovation/` | kitchen renovation brampton | kitchen renovation brampton cost | The primary is `>100` / Easy. The cost term can be answered in an FAQ or pricing section rather than a separate Brampton cost page. |
| `/brampton/bathroom-renovation/` | bathroom renovation brampton | — | The exact commercial query is `>100` / Easy and is distinct from broad Brampton renovation intent. |
| `/oakville/kitchen-renovation/` | kitchen renovation oakville | custom and modern kitchen renovation Oakville | The primary is `>100` / Medium, with closely aligned commercial variations. |
| `/oakville/bathroom-renovation/` | bathroom renovation oakville | ensuite and modern bathroom renovation Oakville | The primary is `>100` / Easy and has a focused service intent. |
| `/oakville/basement-renovation/` | basement renovation oakville | legal and walk-out basement renovation Oakville | The primary is `>100` / Easy, supported by meaningful basement-specific sub-intents. |
| `/oakville/flooring-installation/` | floor installation oakville | flooring installation, hardwood flooring, hardwood installation, and engineered-hardwood terms | The primary has `>100` volume and the cluster can be consolidated into one service-led page. |
| `/burlington/kitchen-renovation/` | kitchen renovation burlington | Burlington Ontario/ON, custom, modern, affordable, and luxury kitchen variants | The primary is `>100` / Medium, with multiple same-intent variations that belong together. |
| `/burlington/bathroom-renovation/` | bathroom renovation burlington | Burlington Ontario/ON, ensuite, modern, and luxury bathroom variants | The primary is `>100` / Easy and the variants form one clear commercial cluster. |
| `/burlington/basement-renovation/` | basement renovation burlington | Burlington ON, legal, and walk-out basement renovation variants | The primary has `>100` volume and a distinct service-specific local intent. |
| `/burlington/hardwood-flooring/` | hardwood flooring burlington | engineered hardwood, Burlington Ontario, flooring installation, hardwood installation, solid, oak, and wide-plank variants | `hardwood flooring burlington` is `>100` / Easy and `engineered hardwood flooring burlington` is also `>100`; one substantive page should consolidate the cluster. |

### Publication Order

1. Reposition the six existing commercial pages first so their target roles are unambiguous.
2. Publish `/toronto/` and `/toronto/bathroom-renovation/` first because both primaries are `>1000`.
3. Publish the remaining broad location pages.
4. Publish High-priority city/service pages only as unique local proof becomes available.
5. Publish Medium-priority hardwood/flooring pages after confirming that their mixed product/service intent matches the services actually offered.
6. Reassess Future Content rows after the initial pages have performance data and the pending GTA keywords are verified.

## Keywords That Do NOT Need Dedicated Pages

These phrases should be incorporated naturally into the mapped parent page, relevant FAQ, case study, or future guide. They should not produce separate landing pages.

| Parent Page / Cluster | Supporting Keywords That Do Not Need Their Own Page |
|---|---|
| Homepage | `general contractor gta`; `residential general contractor gta` |
| GTA full-home page | `whole home renovation gta` after verification; natural “full house renovation” and “complete renovation” wording |
| GTA kitchen page | `affordable kitchen renovation gta`; `small kitchen renovation gta`; `custom kitchen renovation gta` only after verification |
| GTA bathroom page | `luxury bathroom renovation gta`; `small bathroom renovation gta`; `bathroom renovation gta toronto`; `ensuite bathroom renovation gta` only after verification |
| GTA basement page | `legal basement renovation gta` and `walk-out basement renovation gta` only after verification |
| GTA flooring page | `hardwood flooring gta`; `engineered hardwood flooring gta`; `hardwood flooring gta area`; pending GTA installation variants after verification |
| Toronto city page | `full home renovation toronto`; `complete home renovation toronto`; `modern home renovation toronto`; `whole home renovation toronto`; `home renovation toronto contractor`; `custom home renovation toronto`; `affordable home renovation toronto`; all Toronto general-contractor variants |
| Toronto kitchen page | `small kitchen renovation toronto`; `condo kitchen renovation toronto`; `custom kitchen renovation toronto`; `modern kitchen renovation toronto`; `open concept kitchen renovation toronto` |
| Toronto bathroom page | `condo bathroom renovation toronto`; `master bathroom renovation toronto`; `best bathroom renovation toronto`; `modern bathroom renovation toronto`; `small bathroom renovation toronto`; `bathroom renovation toronto gta`; `professional bathroom renovation toronto`; `custom bathroom renovation toronto`; `affordable bathroom renovation toronto` |
| Toronto basement page | `legal basement renovation toronto`; `full basement renovation toronto`; `custom basement renovation toronto`; `best basement renovation toronto`; `walk-out basement renovation toronto`; `basement bathroom renovation toronto` |
| Toronto flooring page | All material, installation, contractor, condo, kitchen-flooring, and flooring-renovation variants listed in the Toronto flooring cluster |
| Mississauga city page | Full/whole/small home-renovation and general-contractor Mississauga variants |
| Mississauga kitchen page | Small/custom/best/open-concept/modern kitchen-renovation Mississauga variants |
| Mississauga bathroom page | `ensuite bathroom renovation mississauga` |
| Mississauga basement page if later created | Legal and walk-out basement variants; `home gym basement renovation mississauga` can be a subsection or case-study topic |
| Mississauga hardwood page | All Mississauga installation, engineered, laminate, vinyl, solid, oak, and wide-plank variants in the cluster |
| Etobicoke city page | Full/whole home-renovation and general-contractor Etobicoke variants; `kitchen renovation etobicoke` can be supported here until a separate page is justified |
| Etobicoke flooring page | Engineered hardwood, hardwood installation, residential/professional installation, heated-floor, and vintage-hardwood variants |
| Brampton city page | `full home renovation brampton`; `best home renovation brampton`; `general contractor brampton` |
| Brampton kitchen page | `kitchen renovation brampton cost` |
| Brampton basement page if later created | Legal and walk-out basement variants; home-gym wording belongs in a section or case study |
| Brampton hardwood page if later created | All flooring-installation and material variations from the Brampton cluster |
| Oakville city page | Full/whole/custom home-renovation and general-contractor Oakville variants |
| Oakville kitchen page | Custom and modern kitchen-renovation Oakville variants |
| Oakville bathroom page | Ensuite and modern bathroom-renovation Oakville variants |
| Oakville basement page | Legal and walk-out basement-renovation Oakville variants; home-gym intent can be a subsection or case study |
| Oakville flooring page | Flooring installation plus hardwood, engineered, solid, wide-plank, and hardwood-installation variants |
| Burlington city page | Ontario/ON, full/whole/luxury/interior/custom/trusted/empty-nester home-renovation variants and all Burlington general-contractor variants |
| Burlington kitchen page | Ontario/ON, custom, modern, affordable, and luxury kitchen-renovation variants |
| Burlington bathroom page | Ontario/ON, ensuite, modern, and luxury bathroom-renovation variants |
| Burlington basement page | Burlington ON, legal, walk-out, and home-gym basement variants |
| Burlington hardwood page | Engineered hardwood, Ontario, installation, solid, oak, and wide-plank variants |
| Main-floor cluster | `open concept renovation toronto`; `open concept kitchen renovation toronto`; Mississauga/Oakville/Burlington open-concept variants; Burlington split-level variant. Keep these on one main-floor page per justified market, not separate “open concept” pages. |

The following low-volume informational ideas also do not need commercial landing pages: `average roi kitchen renovation toronto`, `low ceiling basement renovation toronto`, `home gym basement renovation toronto`, `home gym basement renovation mississauga`, `home gym basement renovation brampton`, `home gym basement renovation oakville`, and `home gym basement renovation burlington`. They are better used as future articles, case studies, or substantial FAQ sections when the company has useful firsthand material.

## Cannibalization Risks

| Risk | Pages / Keywords Involved | Recommendation |
|---|---|---|
| Broad home-renovation overlap | Homepage `/` and `/services/full-house-renovation.html` both currently emphasize home renovation in Toronto and the GTA. | Give `/` the single primary `home renovation gta`; give the full-house page `full home renovation gta`. Keep company/category intent on the homepage and whole-project scope on the service page. |
| Toronto versus GTA overlap | Current homepage and every service page use “Toronto & GTA”; proposed `/toronto/` and Toronto service pages would target exact Toronto terms. | Reframe current pages as GTA-wide hubs before launching Toronto pages. Use exact Toronto primaries only on `/toronto/` and `/toronto/{service}/`. |
| Home renovation versus general contractor | City research contains both home-renovation and general-contractor terms. Separate pages would likely describe the same company, services, proof, and conversion action. | Use the home-renovation term as the single primary on each city page and treat general-contractor phrases as secondary. Do not create parallel `/city/general-contractor/` pages now. |
| Homepage versus Toronto city page | `home renovation gta` and `home renovation toronto` are distinct but closely related. | The homepage should discuss GTA-wide coverage; `/toronto/` should contain Toronto-specific project, housing, process, and service-area evidence. Use self-referencing canonicals and deliberate internal-link anchors. |
| Core service versus city/service pages | Example: `/services/kitchen.html` versus `/toronto/kitchen-renovation/`. | Core service page primary: `kitchen renovation gta`. City page primary: `kitchen renovation toronto`. Repeat this separation for bathroom, basement, and flooring. |
| Full-home service versus city page | `/services/full-house-renovation.html` could compete with `/toronto/`, `/mississauga/`, and other city pages if all target “home renovation” language. | Keep `full home renovation gta` on the service page. Each city page owns `home renovation {city}` and absorbs that city’s full/whole-home variants as secondary. Do not add `/city/full-home-renovation/` pages now. |
| Kitchen versus main-floor/open-concept | Open-concept kitchen terms can fit both kitchen and main-floor pages. | Assign each exact phrase once. Until a main-floor page exists, keep open-concept kitchen wording secondary on the kitchen page. If a main-floor page later launches, give it `main floor renovation {location}` and keep kitchen-specific open-concept language on the kitchen page. |
| Bathroom versus basement | `basement bathroom renovation toronto` can fit either page. | Keep it secondary on `/toronto/basement-renovation/` when the project scope is a basement build-out; link to the bathroom hub for fixtures and finishes. Do not create a separate basement-bathroom landing page. |
| Flooring installation versus hardwood flooring | Installation and material terms overlap, and mixed-intent hardwood queries may surface retailers. | Use service-led pages, one per geography at most. Do not create separate pages for hardwood, engineered, laminate, vinyl, oak, wide-plank, and installation variants within the same city. |
| Cost guide versus service page | Toronto cost terms could make a commercial service page drift informational. | Keep the commercial service keyword on the service page. Put detailed pricing methodology and ranges on the mapped guide, then link both ways. Brampton’s single low-volume kitchen-cost term can remain an FAQ on the service page. |
| About / Contact versus commercial pages | About and Contact currently repeat Toronto/GTA renovation language. | Keep titles, headings, and internal links focused on trust and conversion. Do not assign either page a commercial service primary keyword. |
| Burlington spelling variants | “Burlington,” “Burlington Ontario,” and “Burlington ON” are the same local intent. | Map all variants to one Burlington page per service. Never create separate Ontario or ON URLs. |
| Pending GTA keywords | Pending phrases could be assigned too early and later prove weak or duplicative. | Keep them as conditional secondaries or Future Content until Ahrefs verification is added to `Keyword.md`. Do not publish pages solely for a pending keyword. |

## Final Recommended Site Architecture

The tree below separates broad GTA hubs, city hubs, justified city/service pages, and deferred content. Existing URLs are retained. Items marked **Future** should not be built in the first rollout.

```text
/
├── about.html
├── contact.html
├── services/
│   ├── full-house-renovation.html       [full home renovation gta]
│   ├── kitchen.html                     [kitchen renovation gta]
│   ├── bathroom.html                    [bathroom renovation gta]
│   ├── basement.html                    [basement renovation gta]
│   ├── flooring.html                    [flooring installation gta]
│   └── main-floor-renovation/           [Future: main floor renovation gta; verify first]
├── toronto/                             [home renovation toronto]
│   ├── kitchen-renovation/              [kitchen renovation toronto]
│   ├── bathroom-renovation/             [bathroom renovation toronto]
│   ├── basement-renovation/             [basement renovation toronto]
│   ├── flooring-installation/           [flooring installation toronto]
│   └── main-floor-renovation/           [Future]
├── mississauga/                         [home renovation mississauga]
│   ├── kitchen-renovation/              [kitchen renovation mississauga]
│   ├── bathroom-renovation/             [bathroom renovation mississauga]
│   ├── hardwood-flooring/               [hardwood flooring mississauga]
│   ├── basement-renovation/             [Future]
│   └── main-floor-renovation/           [Future]
├── etobicoke/                           [home renovation etobicoke]
│   ├── bathroom-renovation/             [bathroom renovation etobicoke]
│   ├── basement-renovation/             [basement renovation etobicoke]
│   └── flooring-installation/           [floor installation etobicoke]
├── brampton/                            [home renovation brampton]
│   ├── kitchen-renovation/              [kitchen renovation brampton]
│   ├── bathroom-renovation/             [bathroom renovation brampton]
│   ├── basement-renovation/             [Future]
│   └── hardwood-flooring/               [Future]
├── oakville/                            [home renovation oakville]
│   ├── kitchen-renovation/              [kitchen renovation oakville]
│   ├── bathroom-renovation/             [bathroom renovation oakville]
│   ├── basement-renovation/             [basement renovation oakville]
│   ├── flooring-installation/           [floor installation oakville]
│   └── main-floor-renovation/           [Future]
├── burlington/                          [home renovation burlington]
│   ├── kitchen-renovation/              [kitchen renovation burlington]
│   ├── bathroom-renovation/             [bathroom renovation burlington]
│   ├── basement-renovation/             [basement renovation burlington]
│   ├── hardwood-flooring/               [hardwood flooring burlington]
│   └── main-floor-renovation/           [Future]
└── guides/
    ├── home-renovation-cost-toronto/    [Future]
    ├── kitchen-renovation-cost-toronto/ [Future]
    ├── bathroom-renovation-cost-toronto/[Future]
    └── basement-renovation-cost-toronto/[Future]
```

### Architecture Guardrails

- Do not create separate general-contractor pages for the same city while the broad city page already serves that intent.
- Do not create city-specific full-home pages in addition to broad city renovation pages.
- Do not create separate pages for “modern,” “custom,” “small,” “luxury,” “affordable,” “best,” “ON,” or “Ontario” variants.
- Do not create one page per flooring material. Consolidate related hardwood, engineered, laminate, vinyl, and installation terms into the mapped flooring page for that geography.
- Do not publish all recommended pages at once from one template. Build them in priority order and require unique local evidence for each.
- Add a future location/service page only when search demand, real service coverage, and enough unique local content all exist together.
