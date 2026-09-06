---
package: addy
name: Release branches
slug: release-branches
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

# Release branches

## Definition — verbatim
> "**Release branches are acceptable.** When you need to stabilize a release while main moves forward." — skills/git-workflow-and-versioning/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 31 | defined here | Defined as an acceptable branch type for stabilizing a release while main continues to receive changes. |

## Consumes
Release candidate commit state on main.

## Produces
Dedicated stabilization branch for bug fixes and release verification.

## When applied
When stabilizing a versioned release while active development continues on main.

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Permissible branch exception in trunk-based development used to isolate release hardening and hotfixes without halting forward development momentum on the main branch.
