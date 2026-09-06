---
package: addy
name: Floor guard
slug: floor-guard
kind: technique
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

# Floor guard

## Definition — verbatim
> "The **floor** does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own" — skills/constraint-driven-development/references/floor-guard.md:1-3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 1 | defined here | Reference document title and architecture specification for diff-scoped floor enforcement. |

## Consumes
The non-negotiable floor rules of `CONSTRAINTS.md`, git diff against merge base, and untracked files.

## Produces
Automated detection of bar-lowering moves (suppressions, skips, stub code, lowered thresholds, new exceptions) with exit codes 0, 1, or 2.

## When applied
Across Build, Verify, and Review stages to prevent agents from taking shortcuts that lower code quality bars.

## Sub-concepts
floor-guard-mjs, silenced-checker, unfinished-work, test-made-easier

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
A diff-scoped quality enforcement mechanism designed to eliminate non-determinism by inspecting added and removed lines across tracked and untracked files, catching the five specific moves agents use to pass tests cheaply without solving the underlying failure.
