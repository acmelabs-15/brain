---
package: rjm
name: Attack Trees
slug: attack-trees
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Attack Trees

## Definition — verbatim
> "## Attack Trees" — .claude/skills/threat-modeling/references/advanced-analysis.md:5

## Also called — verbatim
`Attack Trees (Schneier)` — .claude/skills/threat-modeling/SKILL.md:441

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 5 | defined here | Section heading introducing attack trees as a technique to decompose complex threats into hierarchical attack paths. |
| .claude/skills/threat-modeling/SKILL.md | 441 | used here | External reference link citing Bruce Schneier's academic foundation for attack trees. |

## Consumes
System architecture descriptions, threat objectives, component boundaries, and STRIDE findings.

## Produces
Hierarchical tree diagrams mapping high-level attack goals to leaf-node vulnerabilities, exploit methods, and detection opportunities.

## When applied
Applied during complex threat analysis when basic STRIDE is insufficient, specifically for multi-step attack scenarios, finding weakest attack paths, or comparing mitigation effectiveness.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
A threat modeling technique that hierarchically breaks down an attacker's ultimate goal into branched logical sub-goals and leaf attack vectors to evaluate attack feasibility and prioritize defenses.
