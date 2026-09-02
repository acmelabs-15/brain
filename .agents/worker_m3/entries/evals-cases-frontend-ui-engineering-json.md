---
package: addy
path: evals/cases/frontend-ui-engineering.json
type: config
bytes: 1430
unit: inv-addy-1
---

# evals/cases/frontend-ui-engineering.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"frontend-ui-engineering\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Make this page responsive and WCAG compliant\",\n        \"top_k\": 1\n      }," — evals/cases/frontend-ui-engineering.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `frontend-ui-engineering` skill. It checks positive routing across 5 prompts (including strict `top_k: 1` requirements for WCAG compliance and responsive design), validates negative routing away from `performance-optimization` and release publishing, and grades the creation of an accessible design system dropdown component with keyboard navigation, focus management, ARIA roles/semantics, and deliberate state management against fixture `evals/fixtures/frontend-ui-engineering/`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Make this page responsive and WCAG compliant"` (`top_k: 1`) — evals/cases/frontend-ui-engineering.json:6
  - `"Build an accessible modal component with keyboard support"` (`top_k: 3`) — evals/cases/frontend-ui-engineering.json:10
  - `"Make the pricing page accessible and responsive on mobile"` (`top_k: 1`) — evals/cases/frontend-ui-engineering.json:14
  - `"Refactor the dashboard into reusable components with sane state management"` (`top_k: 3`) — evals/cases/frontend-ui-engineering.json:18
  - `"Rework the profile page into reusable components with proper state management"` (`top_k: 3`) — evals/cases/frontend-ui-engineering.json:22
  - `"Optimize the slow database indexes"` — evals/cases/frontend-ui-engineering.json:28
  - `"Tag and publish the release"` — evals/cases/frontend-ui-engineering.json:32
- Behavioral eval prompt: `"Build a dropdown menu component for the design system."` — evals/cases/frontend-ui-engineering.json:39
- Fixture files in `evals/fixtures/frontend-ui-engineering/` (`Button.tsx`, `design-system.md`) — evals/cases/frontend-ui-engineering.json:42

## Outputs — required
- Behavioral evaluation grading result: `evals/results/frontend-ui-engineering.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `frontend-ui-engineering` — evals/cases/frontend-ui-engineering.json:2
- skill `performance-optimization` — evals/cases/frontend-ui-engineering.json:29
- fixture `frontend-ui-engineering` — evals/cases/frontend-ui-engineering.json:42

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `frontend-ui-engineering` — evals/cases/frontend-ui-engineering.json:2 — used here
- `WCAG compliant` — evals/cases/frontend-ui-engineering.json:6 — used here
- `modal component` — evals/cases/frontend-ui-engineering.json:10 — used here
- `state management` — evals/cases/frontend-ui-engineering.json:18, 23, 47 — used here
- `performance-optimization` — evals/cases/frontend-ui-engineering.json:29 — used here
- `design system` — evals/cases/frontend-ui-engineering.json:39 — used here
- `focus management` — evals/cases/frontend-ui-engineering.json:45 — used here
- `ARIA roles` — evals/cases/frontend-ui-engineering.json:46 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 26
- `evals` — line 36
  - `id: 1` — line 37

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Two trigger prompts explicitly require `top_k: 1` ranking (prompts on lines 6 and 14 for WCAG compliance and responsive mobile UI), verifying that frontend accessibility and responsive layout requests route uniquely to `frontend-ui-engineering`. Fixtures include `Button.tsx` (306 bytes) and `design-system.md` (530 bytes).

## Context cost
1,430 bytes (~360 tokens) file size. When loaded with fixture files in `evals/fixtures/frontend-ui-engineering/` (836 bytes total), total context cost is 2,266 bytes (~570 tokens).
