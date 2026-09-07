---
package: rjm
name: ai-pr-quality-gate.yml
slug: ai-pr-quality-gate-yml
kind: name-only
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
  - {path: scripts/external_signals/__init__.py, sha256: 5a166b38cfca8b73e0d5f6c531345bdf1466bc01eaf5d61acd3b2d85adbf1447}
  - {path: scripts/quality_gate/__init__.py, sha256: 94ab314154bd6bd1a1b1a7e3e3c2f4e7da028e3922e3d6d316e0ec416f222412}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-pr-quality-gate.yml

## Definition — verbatim
(used, not defined)

> "Our CI pipeline runs 6 parallel Copilot CLI agent reviews (security, qa, analyst, architect, devops, roadmap) in `ai-pr-quality-gate.yml`." — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:26

## Also called — verbatim
"AI PR Quality Gate" — scripts/quality_gate/__init__.py:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 26 | used here | Cited as the CI workflow where custom agent loading failed due to frontmatter incompatibility. |
| docs/design/external-signal-gating.md | 13 | used here | Documented as a deleted ten-agent fan-out workflow that was retired due to closed-loop costs. |
| scripts/external_signals/__init__.py | 7 | used here | Referenced as an obsolete consumer of external signals that was deleted. |
| scripts/quality_gate/__init__.py | 1 | used here | Named as the workflow from which testable Python scripts were originally extracted. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
ai-pr-quality-gate.yml is a GitHub Actions workflow file identifier (subsequently deleted from the repository) rather than an active agent lifecycle concept per D-023.
