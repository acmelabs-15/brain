---
package: addy
name: gitflow
slug: gitflow
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

# gitflow

## Definition — verbatim
(used, not defined)
> "Teams using gitflow or long-lived branches can adapt the principles (atomic commits, small changes, descriptive messages) to their branching model — the commit discipline matters more than the specific branching strategy." — skills/git-workflow-and-versioning/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 28 | used here | Mentioned as an alternative branching model that can adopt the skill's commit discipline principles. |

## Consumes
Multi-branch git branching topology.

## Produces
Structured release and development branches.

## When applied
In teams whose pre-existing branching strategy mandates formal develop/release branching.

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Alternative legacy branching model acknowledged by the skill, noting that while trunk-based development is preferred, core commit discipline remains applicable under gitflow.
