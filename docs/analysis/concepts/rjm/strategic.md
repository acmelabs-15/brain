---
package: rjm
name: strategic
slug: strategic
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# strategic

## Definition — verbatim
> "| `strategic` | Sets direction, arbitrates priority, owns design authority | high-level-advisor, architect, roadmap, independent-thinker |" — .agents/AGENT-SYSTEM.md:835

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 835 | defined here | Defined in the Agent Roles table as agents setting direction, arbitrating priority, and owning design authority. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 103 | defined here | Designated in ADR-098 as one of four closed role metadata values replacing the former expert tier. |
| .claude/agents/roadmap.md | 6 | defined here | Declared as the frontmatter role metadata value for the roadmap agent. |
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 112 | used here | Weighting dimension in decision scoring script assigning 40% weight to strategic criteria. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 163 | defined here | Defined as a primary evaluation dimension covering alignment, market signaling, optionality, and upside. |
| .github/scripts/invoke_pr_comment_processing.py | 244 | used here | Handled as a classification category in PR comment triage routing. |
| docs/agent-catalog.md | 17 | used here | Listed as the role classification for architect in the generated agent catalog. |
| templates/agents/independent-thinker.shared.md | 2 | defined here | Declared as the role metadata value in the shared independent-thinker agent template. |

## Consumes
High-level architectural challenges, priority conflicts, product vision questions, or strategic trade-offs.

## Produces
Architectural designs, ADRs, roadmaps, and definitive triage verdicts.

## When applied
> "Sets direction, arbitrates priority, owns design authority" — .agents/AGENT-SYSTEM.md:835

## Sub-concepts
none

## Part of
- agent-roles
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch, doc-drift, missing-doc (from ADR-098 migration drift and .agents/AGENT-SYSTEM.md broken relative paths)

## Design notes
In rjm's post-ADR-098 architecture, `strategic` designates a descriptive role category rather than an operational runtime permission or rank. Assigned to agents such as `architect`, `high-level-advisor`, `roadmap`, and `independent-thinker`, the strategic role communicates design authority, priority arbitration, and direction-setting capabilities to consumers like `docs/agent-catalog.md` and external bridges without conferring overriding delegation privileges.
