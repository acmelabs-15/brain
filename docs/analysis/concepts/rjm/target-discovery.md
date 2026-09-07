---
package: rjm
name: Target Discovery
slug: target-discovery
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Target Discovery

## Definition — verbatim
> "Read project metadata: README.md, package.json (or equivalent), docs links." — .claude/skills/dx-review/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 60 | defines | Defined as Step 0 of the audit process for identifying essential project URLs and installation commands. |

## Consumes
Project repository files, README files, package manifests, documentation links, and user clarification responses.

## Produces
Target metadata profile including product URL, documentation URL, CLI installation command, and quickstart path.

## When applied
Executed as the initial preparatory step before conducting any onboarding or interface evaluations in dx-review.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Step 0 in rjm's dx-review audit procedure that discovers critical entry points for a developer product. It establishes the baseline target URLs and CLI entry commands needed to begin onboarding evaluation.
