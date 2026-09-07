---
package: rjm
name: Process
slug: process
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Process

## Definition — verbatim
(used, not defined)

> "## Process" — .claude/skills/codebase-documenter/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/SKILL.md | 47 | defined here | Section heading outlining sequential steps for confirming target directories and copying templates. |
| .claude/skills/github-url-intercept/SKILL.md | 131 | defined here | Section heading structuring phases for URL detection, script location, and entity extraction. |
| .claude/skills/research-and-incorporate/SKILL.md | 87 | defined here | Section heading defining the 5-phase research and memory incorporation pipeline. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 37 | defined here | Section heading in template structuring multi-phase skill execution steps. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 67 | used here | Element classification value for data-flow diagram processes in threat models. |
| templates/agents/dependency-auditor.shared.md | 76 | defined here | Section heading structuring dependency audit detection and vulnerability scanning workflow. |

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
defects: doc-drift, missing-path, orphan

## Design notes
`Process` is a recurring markdown section heading defining operational workflows across skills and agents, as well as a data-flow diagram element classification label in threat modeling, classified as `kind: name-only` per D-023.
