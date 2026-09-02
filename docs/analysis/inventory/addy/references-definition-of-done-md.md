---
package: addy
path: references/definition-of-done.md
type: doc
bytes: 3798
unit: inv-addy-4
---

# references/definition-of-done.md

## Purpose — required, verbatim
> "A standing, project-wide bar that every change must clear before it counts as done. Unlike acceptance criteria, which vary per task and answer \"did we build the right thing?\", the Definition of Done is the same every time and answers \"is this finished to our standard?\". Use it as the final gate in `planning-and-task-breakdown`, `incremental-implementation`, and `shipping-and-launch`." — references/definition-of-done.md:3

## Design intent — required
Establishes a permanent, reusable project quality gate that complements task-specific acceptance criteria by enforcing five standing categories (Correctness, Quality, Integration, Documentation, Ship-readiness) across three application scopes (per task, per feature, per release), explicitly defining red flags that indicate false completion claims.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill planning-and-task-breakdown — references/definition-of-done.md:3
- skill incremental-implementation — references/definition-of-done.md:3
- skill shipping-and-launch — references/definition-of-done.md:3, 50, 57
- skill code-review-and-quality — references/definition-of-done.md:35
- skill code-simplification — references/definition-of-done.md:35
- skill documentation-and-adrs — references/definition-of-done.md:44
- skill security-and-hardening — references/definition-of-done.md:48
- skill observability-and-instrumentation — references/definition-of-done.md:49

## Invoked by — required
- skills/using-agent-skills/SKILL.md:114
- skills/shipping-and-launch/SKILL.md:268
- skills/incremental-implementation/SKILL.md:249
- skills/planning-and-task-breakdown/SKILL.md:257
- docs/getting-started.md:137
- docs/skill-anatomy.md:113
- README.md:307

## Concepts named — required, verbatim
- `Definition of Done` — references/definition-of-done.md:1, 3, 5 — defined here
- `Acceptance Criteria` — references/definition-of-done.md:3, 5, 7 — used here
- `The Standing Checklist` — references/definition-of-done.md:17 — defined here
- `Correctness` — references/definition-of-done.md:21, 55 — defined here
- `Quality` — references/definition-of-done.md:28, 55 — defined here
- `five-axis review` — references/definition-of-done.md:35 — used here
- `Integration` — references/definition-of-done.md:37, 56 — defined here
- `Documentation` — references/definition-of-done.md:42, 56 — defined here
- `Ship-readiness` — references/definition-of-done.md:47 — defined here
- `How to Apply` — references/definition-of-done.md:53 — defined here
- `Red Flags` — references/definition-of-done.md:61 — defined here

## Structure
- `# Definition of Done` — references/definition-of-done.md:1
- `## Definition of Done vs. Acceptance Criteria` — references/definition-of-done.md:5
- `## The Standing Checklist` — references/definition-of-done.md:17
- `### Correctness` — references/definition-of-done.md:21
- `### Quality` — references/definition-of-done.md:28
- `### Integration` — references/definition-of-done.md:37
- `### Documentation` — references/definition-of-done.md:42
- `### Ship-readiness` — references/definition-of-done.md:47
- `## How to Apply` — references/definition-of-done.md:53
- `## Red Flags` — references/definition-of-done.md:61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit multi-tiered application model: per-task (Correctness + Quality), per-feature (Integration + Documentation), per-release (Full checklist floor + shipping gates).
- Explicit comparison table separating acceptance criteria ("did we build the right thing?") from Definition of Done ("is this finished to our standard?").

## Context cost
- File size: 3,798 bytes (~950 tokens).
- Transitive cost when invoked: standalone reference document.
