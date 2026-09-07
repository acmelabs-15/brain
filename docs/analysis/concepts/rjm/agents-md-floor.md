---
package: rjm
name: AGENTS.md floor
slug: agents-md-floor
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AGENTS.md floor

## Definition — verbatim
(used, not defined)

> "- The file has low test coverage. There are no characterization tests, or coverage is below the AGENTS.md floor for the area you are touching (100% security, 80% business logic, 60% docs/glue)." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 12 | used here | Sets minimum test coverage thresholds (100% security, 80% business logic, 60% docs/glue) below which files must be treated as legacy code. |

## Consumes
File test coverage statistics and target codebase domain classification (security, business logic, docs/glue).

## Produces
Gate pass/fail determinations dictating whether legacy code techniques must be activated.

## When applied
Checked when assessing code coverage prior to modifying any file.

## Sub-concepts
none

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
The AGENTS.md floor establishes mandatory baseline test coverage targets across the repository (100% for security, 80% for business logic, and 60% for docs/glue). Files with test coverage beneath this threshold are gated into the legacy code protocol to ensure safe modification.
