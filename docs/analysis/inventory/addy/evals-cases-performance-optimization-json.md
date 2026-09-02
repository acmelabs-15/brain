---
package: addy
path: evals/cases/performance-optimization.json
type: config
bytes: 1688
unit: inv-addy-2
---

# evals/cases/performance-optimization.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"performance-optimization\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Optimize this N+1 query\",\n        \"top_k\": 1\n      }," — evals/cases/performance-optimization.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `performance-optimization` skill. It evaluates routing across N+1 query optimization, slow dashboard profiling, database indexing, and Core Web Vitals (LCP); ensures negative routing against `deprecation-and-migration` and `api-and-interface-design`; and grades performance optimization on a slow product list rendering 1000 items (`evals/fixtures/performance-optimization/products.js`, `benchmark.js`), enforcing a strict 5-stage lifecycle: measure baseline before optimizing, target identified bottleneck without speculative guessing, verify quantitative improvement against baseline post-fix, and establish concrete regression guards via synthetic performance budgets or field monitoring tied to user-facing metrics.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Optimize this N+1 query"` — evals/cases/performance-optimization.json:6
  - `"The dashboard takes eight seconds to load, profile it and fix the bottleneck"` — evals/cases/performance-optimization.json:10
  - `"Profile these slow database queries and add the right indexes"` — evals/cases/performance-optimization.json:14
  - `"The orders endpoint has a slow N+1 query pattern, profile it and fix the bottleneck"` — evals/cases/performance-optimization.json:18
  - `"Core Web Vitals are failing, improve our LCP"` — evals/cases/performance-optimization.json:22
  - `"Draft the deprecation notice for the v1 API"` — evals/cases/performance-optimization.json:28
  - `"Design the public interface for the billing module"` — evals/cases/performance-optimization.json:32
- Behavioral eval prompt: `"The products page renders slowly with 1000 items. Improve its performance."` — evals/cases/performance-optimization.json:40
- Fixture directory in `evals/fixtures/performance-optimization/` (`products.js`, `benchmark.js`) — evals/cases/performance-optimization.json:43

## Outputs — required
- Behavioral evaluation grading result: `evals/results/performance-optimization.eval-1.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `performance-optimization` — evals/cases/performance-optimization.json:2
- skill `deprecation-and-migration` — evals/cases/performance-optimization.json:29
- skill `api-and-interface-design` — evals/cases/performance-optimization.json:33
- fixture `performance-optimization` — evals/cases/performance-optimization.json:43

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `performance-optimization` — evals/cases/performance-optimization.json:2 — used here
- `N+1 query` — evals/cases/performance-optimization.json:6, 18 — used here
- `bottleneck` — evals/cases/performance-optimization.json:10, 18, 41, 47 — used here
- `indexes` — evals/cases/performance-optimization.json:14 — used here
- `Core Web Vitals` — evals/cases/performance-optimization.json:22 — used here
- `LCP` — evals/cases/performance-optimization.json:22 — used here
- `deprecation-and-migration` — evals/cases/performance-optimization.json:29 — used here
- `api-and-interface-design` — evals/cases/performance-optimization.json:33 — used here
- `baseline` — evals/cases/performance-optimization.json:41, 46, 48 — used here
- `regression guard` — evals/cases/performance-optimization.json:41 — used here
- `performance budget` — evals/cases/performance-optimization.json:49 — used here
- `field monitoring` — evals/cases/performance-optimization.json:49 — used here
- `user-facing metric` — evals/cases/performance-optimization.json:49 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 26
  - `evals` — line 37
  - `id: 1` — line 39

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The evaluation enforces measurement-driven optimization: strict requirement to capture baselines before changing code, forbidding unmeasured speculative changes, requiring verified deltas against baseline, and demanding long-term regression prevention (synthetic performance budgets or field telemetry).

## Context cost
1,688 bytes (~422 tokens) file size. When loaded with fixtures (`products.js` 393 bytes, `benchmark.js` 464 bytes, ~857 bytes total), total context cost is 2,545 bytes (~636 tokens).
