---
package: addy
name: Long-lived development branches
slug: long-lived-development-branches
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Long-lived development branches

## Definition — verbatim
(used, not defined)
> "Long-lived development branches are hidden costs — they diverge, create merge conflicts, and delay integration." — skills/git-workflow-and-versioning/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 20 | used here | Identified as an anti-pattern that creates hidden costs, code divergence, and integration delays. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Characterized as a development anti-pattern whose accumulated divergence imposes severe integration friction, which the package advises replacing with trunk-based development and feature flags.
