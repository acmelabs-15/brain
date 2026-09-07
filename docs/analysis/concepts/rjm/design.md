---
package: rjm
name: Design
slug: design
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/sync/__init__.py, sha256: 67ea47006dcd2b4c68e601bdc4092436a47d5454f6838565320bc77ee02c9f47}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Design

## Definition — verbatim
> "- **Design**: Same patterns re-implemented" — .claude/skills/golden-principles/references/design-dry-principle.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 18 | defined here | Enumerated as a scope of redundancy where architectural and design patterns are redundantly re-implemented rather than unified. |
| .claude/skills/slashcommandcreator/SKILL.md | 43 | defined here | Designated as Phase 2 in slash command creation where command schemas, arguments, and execution modes are specified. |
| .github/scripts/generate_spec_report.py | 120 | used here | Warning text flagging pull requests that lack specification references across the REQ, DESIGN, and TASK hierarchy. |
| scripts/sync/__init__.py | 4 | used here | Package docstring referencing the DESIGN specification tier scanned during spec-to-code drift detection. |
| scripts/sync/detect_spec_drift.py | 7 | used here | Script docstring identifying the DESIGN tier within the specification hierarchy analyzed for stale code references. |

## Consumes
User requirements, system intent, recurring architectural problems, and component specifications.

## Produces
Formal design specifications (DESIGN-* documents), command schema definitions, unified architectural abstractions, and traceability links.

## When applied
Applied during the transition from requirements analysis to technical implementation, during DRY audits of system patterns, and during spec-to-code drift scans.

## Sub-concepts
extract-classes

## Part of
dry-principle

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
In rjm, Design serves as both a level of abstraction under the DRY principle (re-implementing the same pattern rather than reusing a canonical pattern representation) and an explicit tier in the specification hierarchy (DESIGN-* documents). It bridges user intent with code construction, establishing durable technical contracts that are monitored by drift detectors and PR validation workflows.
