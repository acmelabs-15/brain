---
package: addy
name: floor-guard.mjs
slug: floor-guard-mjs
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# floor-guard.mjs

## Definition — verbatim
> "// floor-guard.mjs — diff-scoped enforcement of the CONSTRAINTS.md floor." — skills/constraint-driven-development/references/floor-guard.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 19 | defined here | Reference implementation script header for diff-scoped enforcement of CONSTRAINTS.md. |

## Consumes
Git repository diffs against merge base, untracked files via `git ls-files`, and `CONSTRAINTS.md`.

## Produces
Standardized process exit codes (0 for clean, 1 for violations, 2 for failure to execute) and formatted error findings.

## When applied
Executed as a local git hook, CI validation check, or agent verification step before merging.

## Sub-concepts
suppressions, stubs, skips, silenced-checker, unfinished-work, test-made-easier

## Part of
floor-guard

## Implementation status
clean

## Design notes
The canonical reference Node.js script implementing diff-scoped floor checking across tracked and untracked files to detect the five specific moves that lower project quality constraints.
