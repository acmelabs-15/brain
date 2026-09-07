---
package: rjm
name: threat modeling
slug: threat-modeling
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# threat modeling

## Definition — verbatim
> "| Reliability | Observability Pillars | Resilience Patterns | SLO/SLI/SLA, Error Budgets | Chaos Engineering, Threat Modeling | Platform Strategy |" — .claude/skills/analyze/references/engineering-complexity-tiers.md:78

## Also called — verbatim
> "threat modeling is mandatory at Tier 3+ (where an ADR or design doc is also produced)." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:219

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 157 | used here | Structured security review framework applied during design and code reviews |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 78 | defined here | Classified as a Tier 4 (Staff) reliability and resilience practice |
| .claude/skills/chaos-experiment/SKILL.md | 4 | used here | Distinguished as the appropriate tool for security analysis rather than resilience failure injection |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 22 | used here | Identified as a valid non-skill reference target in sibling memory namespaces |
| .claude/skills/pre-mortem/SKILL.md | 44 | used here | Referenced as the targeted technique for security threats rather than general project risks |
| .claude/skills/security-scan/SKILL.md | 55 | used here | Recommended technique for design-level security analysis and STRIDE threat matrices |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 210 | used here | Step 6 security analysis step mandatory for Tier 3+ specifications |
| scripts/eval/eval-knowledge-integration.py | 168 | used here | Evaluation test suite category verifying knowledge of defense-in-depth and STRIDE |

## Consumes
Architecture specifications, data flow diagrams, trust boundaries, and component interfaces.

## Produces
Structured threat matrices (STRIDE/OWASP Four-Question), identified abuse cases, and mitigation criteria.

## When applied
Mandatory for all Tier 3+ feature specifications and design reviews touching shared infrastructure.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Threat modeling is a proactive security analysis technique in rjm that systematically identifies vulnerabilities, trust boundary crossings, and potential abuse vectors before code is written. By mandating threat modeling at design time for complex features, the system catches structural risks early.
