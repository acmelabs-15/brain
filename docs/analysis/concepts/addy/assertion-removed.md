---
package: addy
name: assertion-removed
slug: assertion-removed
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# assertion-removed

## Definition — verbatim
(used, not defined)

> "flag('assertion-removed', file, text);" — skills/constraint-driven-development/references/floor-guard.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 73 | defines | Floor guard diff rule flagging removed assertions from existing test files |

## Consumes
Removed lines in diff touching surviving test files matching `.(test|spec).`, `_test.`, or `test_`.

## Produces
A floor violation finding (`[assertion-removed]`) causing the floor guard to exit with status code 1.

## When applied
Evaluated during diff-scoped floor guard checks on working tree and merge base diffs before merging.

## Sub-concepts
none

## Part of
floor, floor-guard, constraint-driven-development

## Implementation status
clean

## Design notes
A diff-level gate rule in floor-guard.mjs that detects when assertions (matching `expect`, `assert`, or `should`) are removed from test files that still exist in the codebase. This prevents agents from making failing test suites pass by gutting verification assertions rather than repairing the implementation.
