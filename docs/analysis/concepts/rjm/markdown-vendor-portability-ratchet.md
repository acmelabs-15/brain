---
package: rjm
name: Markdown vendor-portability ratchet
slug: markdown-vendor-portability-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Markdown vendor-portability ratchet

## Definition — verbatim
> "Markdown vendor-portability ratchet for skill instruction files (issue #2050)." — scripts/validation/check_skill_md_portability.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 3 | defined here | Module docstring defining the vendor-portability ratchet for Markdown instruction files. |

## Consumes
`skill_md_portability_baseline.json` baseline counts, markdown files across plugin roots, commands, templates, and instructions.

## Produces
Pass/fail validation verdicts, drift reports, and updated baseline definitions via `--update-baseline`.

## When applied
Executed in validation pipelines and CI checks to prevent regressions in Markdown instruction portability across vendored installations.

## Sub-concepts
skill-md-portability-baseline-json, extra-scan-roots, upstream-patterns

## Part of
vendor-portability

## Implementation status
defects: doc-drift

## Design notes
The Markdown vendor-portability ratchet prevents skill instruction files (`SKILL.md`, references, commands, templates, and generated instructions) from hardcoding upstream-only repository paths (`.agents/`, `.claude/lib/`, `.claude/review-axes/`) that break when skills are installed into consumer repositories as vendored plugins. Grandfathering existing occurrences in a baseline JSON file allows ongoing development without regressions.
