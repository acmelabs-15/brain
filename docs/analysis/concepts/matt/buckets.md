---
package: matt
name: buckets
slug: buckets
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# buckets

## Definition — verbatim
(used, not defined)
> "Skills are organized into buckets and consumed by per-repo configuration emitted by `/setup-matt-pocock-skills`." — CONTEXT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 3 | used here | Describes skills as organized into buckets for consumption by repository configurations. |

## Consumes
Skill folders placed under `skills/`.

## Produces
Organized tiers of skills (`engineering/`, `productivity/`, `misc/`, `in-progress/`, `deprecated/`).

## When applied
During repository organization, documentation synchronization, and plugin manifest generation.

## Sub-concepts
misc, in-progress, deprecated

## Part of
skills

## Implementation status
defects: missing-path, other (CONTEXT.md defects)

## Design notes
An organizational architecture pattern grouping skills into categorized directories based on maturity, usage frequency, and distribution status, ensuring only promoted tiers are bundled into the published plugin.
