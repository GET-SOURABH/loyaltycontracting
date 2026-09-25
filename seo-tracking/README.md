# SEO tracking

`keyword-map.csv` is the permanent keyword-to-page ownership map for the current SEO scope.

`ranking-tracker.csv` stores historical measurements. When a new measurement is taken, append a new dated row for each keyword. Never overwrite older ranking rows.

Google Search Console is the primary measurement source. Review measurements every 2–4 weeks under normal circumstances.

Average position is an aggregate Google Search Console metric. It is not a guaranteed fixed Google ranking.

Do not change keyword ownership casually. Changing ownership can cause multiple pages to compete for the same query and create keyword cannibalization.

## Current scope

- GTA
- Toronto
- Mississauga
- Brampton

Do not add other cities without an explicit decision.

## Baseline methodology

- The initial ranking baseline was captured on 2026-09-25.
- Google Search Console was filtered to Canada because Canada and the GTA are the target market.
- The date range was Last 3 months.
- Primary keyword rows use exact-query matching.
- A missing keyword in the GSC query export is left blank and must not be interpreted as zero impressions or zero clicks.
- Site-wide baseline metrics are stored separately in `baseline-summary.csv`.
- Future measurements should use the same Canada filter and a comparable date-window methodology.
