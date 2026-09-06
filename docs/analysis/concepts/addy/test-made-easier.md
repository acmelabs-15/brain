---
package: addy
name: test-made-easier
slug: test-made-easier
kind: gate
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

# test-made-easier

## Definition — verbatim
> "if (SKIPS.test(text)) flag('test-made-easier', file, text);" — skills/constraint-driven-development/references/floor-guard.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 66 | defined here | Rule name under which added test skips and disabled test cases are flagged as floor violations. |

## Consumes
Added lines containing test skipping annotations (`.skip`, `.todo`, `xit`, `t.Skip`).

## Produces
Merge-blocking floor violation findings that cause `floor-guard.mjs` to exit with status 1.

## When applied
During diff evaluation whenever a change adds test skipping directives.

## Sub-concepts
skips

## Part of
floor-guard

## Implementation status
clean

## Design notes
A quality gate check in floor-guard blocking changes that weaken verification by skipping or disabling tests rather than fixing the code to satisfy existing assertions.
