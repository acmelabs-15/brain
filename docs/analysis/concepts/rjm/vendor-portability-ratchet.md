---
package: rjm
name: Vendor-portability ratchet
slug: vendor-portability-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Vendor-portability ratchet

## Definition — verbatim
> "Vendor-portability ratchet for skill scripts (issue #2050)." — scripts/validation/check_skill_portability.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 3 | defined here | Implemented as an automated validation ratchet preventing skill scripts from introducing unportable upstream paths. |

## Consumes
`skill_portability_baseline.json` baseline counts and skill scripts (`*.py`, `*.sh`, `*.ps1`) under `.claude/skills/`.

## Produces
Pass/fail verification verdicts and updated baseline definitions via `--update-baseline`.

## When applied
Executed in validation pipelines and CI checks to prevent regressions in skill script portability across vendored installations.

## Sub-concepts
skill-portability-baseline-json, script-suffixes

## Part of
vendor-portability

## Implementation status
defects: doc-drift, orphan

## Design notes
The vendor-portability ratchet prevents skill scripts from hardcoding upstream repository paths (`.agents/`, `.claude/lib/`, `.claude/skills/`) that break when skills are installed into consumer repositories as vendored plugins. By recording grandfathered debt in a baseline file, the ratchet allows incremental migration without blocking development, failing if new references are added or unratcheted improvements are detected.
