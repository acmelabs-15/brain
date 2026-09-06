---
package: addy
name: pre-flight checks
slug: pre-flight-checks
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# pre-flight checks

## Definition — verbatim
(used, not defined)
> "Run the pre-flight checks in [CONTRIBUTING.md](../../CONTRIBUTING.md#before-proposing-a-new-skill): search the catalog, check open PRs (`gh pr list --state open`), and justify the gap." — .claude/rules/skills-contributing.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/skills-contributing.md | 11 | used here | Directs contributors to execute pre-flight checks in CONTRIBUTING.md before proposing new skills. |

## Consumes
Catalog of existing skills, open pull request listings, and candidate skill concept.

## Produces
Documented capability gap justification and verified absence of duplicate PRs.

## When applied
Before proposing or creating a new skill directory.

## Sub-concepts
none

## Part of
anti-duplication-guardrail

## Implementation status
clean

## Design notes
A three-step verification checklist (search catalog, check open PRs, justify gap) designed to catch overlap before implementation begins.
