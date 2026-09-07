---
package: rjm
name: STRIDE
slug: stride
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRIDE

## Definition — verbatim
> "STRIDE is a threat classification system developed by Microsoft. Each letter represents a category of security threat." — .claude/skills/threat-modeling/references/stride-methodology.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 50 | used here | Section heading introducing the threat classification matrix for ADR-045 framework extraction. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 245 | used here | Advisory evaluation dimension scoring narrative responses for STRIDE classification correctness. |
| .claude/agents/security.md | 597 | used here | Table column defining threat categorization using S/T/R/I/D/E classifications in security reviews. |
| .claude/agents/security/references/threat-model-template.md | 20 | used here | Template section heading providing the standardized STRIDE threat categorization matrix. |
| .claude/skills/review/references/agent-safety.md | 55 | used here | Guidance referencing STRIDE as part of the threat-modeling skill to analyze expanded agent attack surfaces. |
| .claude/skills/security-review/SKILL.md | 4 | used here | Skill description clarifying that full STRIDE attack-surface analysis should use threat-modeling rather than inline review. |
| .claude/skills/security-scan/SKILL.md | 58 | used here | Guidance directing users to threat-modeling when creating STRIDE threat matrices for design-level analysis. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 212 | used here | Spec generation guide noting STRIDE as an accepted threat modeling methodology for PRD security sections. |
| .claude/skills/threat-modeling/references/advanced-analysis.md | 3 | used here | Introduction noting advanced techniques (attack trees) are used when basic STRIDE analysis is insufficient. |
| .claude/skills/threat-modeling/references/stride-methodology.md | 3 | defined here | Core definition and detailed breakdown of the 6 threat categories, impacts, and mitigations. |
| .claude/skills/threat-modeling/SKILL.md | 4 | used here | Skill frontmatter description establishing STRIDE methodology as a primary capability of the skill. |
| scripts/eval/eval-agents.py | 211 | used here | Security evaluation test case expected answer requiring STRIDE Information Disclosure and Tampering analysis. |

## Consumes
System architecture descriptions, data flow interactions, and trust boundary crossings.

## Produces
Categorized threat matrices identifying Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege threats.

## When applied
Applied during threat modeling, PRD specification generation, and architectural security reviews across all lifecycle phases.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
clean

## Design notes
`STRIDE` is the primary threat classification technique employed throughout rjm's security architecture. By systematically evaluating software interactions against six foundational threat categories (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege), it provides a rigorous, repeatable framework for identifying attack vectors at trust boundaries before code is written.
