---
package: addy
name: silenced checker
slug: silenced-checker
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

# silenced checker

## Definition — verbatim
> "a silenced checker (a new suppression comment)" — skills/constraint-driven-development/references/floor-guard.md:10

## Also called — verbatim
> "if (SUPPRESSIONS.test(text)) flag('silenced-checker', file, text);" — skills/constraint-driven-development/references/floor-guard.md:64

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 10 | used here | Listed in the contract as one of five Step 6 bar-lowering moves detected by floor guard. |
| skills/constraint-driven-development/references/floor-guard.md | 64 | defined here | Rule identifier used when flagging added lines matching linter or type-checker suppression comments. |

## Consumes
Added lines in the diff matching suppression regex patterns (`@ts-ignore`, `eslint-disable`, `# noqa`).

## Produces
Merge-blocking violation findings that fail floor-guard with exit code 1.

## When applied
Whenever a change diff introduces new suppression directives rather than fixing the underlying diagnostic.

## Sub-concepts
suppressions

## Part of
floor-guard

## Implementation status
clean

## Design notes
A quality gate check in floor-guard that flags and blocks new inline comments silencing linter, typechecker, or test coverage diagnostics, forcing agents to resolve errors genuinely rather than muting warnings.
