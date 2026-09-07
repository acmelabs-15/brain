---
package: rjm
name: templates/
slug: templates
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# templates/

## Definition — verbatim
(used, not defined)
> "Renamed from standard `assets/` for semantic clarity" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 81 | defined here | Directory path specification renaming standard assets/ directory for prompt and artifact templates. |
| .claude/skills/codebase-documenter/SKILL.md | 57 | defined here | Section heading listing documentation templates used for project front door and architecture docs. |
| docs/architecture.md | 9 | defined here | Foundational system layer defining shared agent markdown templates compiled across platforms. |
| scripts/eval/eval-reviewer-asymmetry.py | 57 | defined here | Configuration dictionary mapping reviewer agent roles to shared template file paths. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
ai-agents-project-extensions

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 allowed-tools format; architecture.md ADR-032 labeling drift; eval-reviewer-asymmetry.py fixture count drift)

## Design notes
A directory path, configuration dictionary, and section heading designating template assets, prompt templates, and agent definitions across the repository rather than an independent lifecycle concept.
