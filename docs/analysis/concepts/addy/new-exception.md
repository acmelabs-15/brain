---
package: addy
name: new-exception
slug: new-exception
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

# new-exception

## Definition — verbatim
(used, not defined)

> "if (/CONSTRAINTS\.md$/.test(file) && /^\| *(W|E)\d+ *\|/.test(text)) flag('new-exception', file, text);" — skills/constraint-driven-development/references/floor-guard.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 67 | defines | Floor guard diff rule flagging unauthorized exception rows added to CONSTRAINTS.md |

## Consumes
Added lines in the diff targeting `CONSTRAINTS.md`.

## Produces
A floor violation finding (`[new-exception]`) causing the floor guard to exit with status code 1.

## When applied
Evaluated during diff-scoped floor guard checks on working tree and merge base diffs before merging.

## Sub-concepts
none

## Part of
floor, floor-guard, constraint-driven-development

## Implementation status
clean

## Design notes
A diff-level gate rule in floor-guard.mjs that detects when an agent attempts to insert an unreviewed exception row into CONSTRAINTS.md. Autonomous agents facing broken checks frequently attempt to whitelist failing rules by adding exemptions rather than fixing code; this gate blocks that evasion vector.
