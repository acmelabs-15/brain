---
package: rjm
name: Output Schema
slug: output-schema
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
  - {path: scripts/validation/validate_seed_parity.py, sha256: c25853828b45f5da25b2e26fd0e51b4ec2b4c68b8fcceb4ed6f8c7061ae67f59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Output Schema

## Definition — verbatim
(used, not defined)

> "## Output Schema" — .claude/skills/review/references/agent-safety.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 159 | defined here | Section heading detailing field definitions and constraints for review findings output. |
| .claude/skills/review/references/analyst.md | 173 | defined here | Section heading detailing field definitions and constraints for analyst findings output. |
| .claude/skills/review/references/architect.md | 209 | defined here | Section heading detailing field definitions and constraints for architect findings output. |
| .claude/skills/review/references/code-quality.md | 161 | defined here | Section heading detailing field definitions and constraints for code quality findings output. |
| .claude/skills/review/references/decision-rigor.md | 165 | defined here | Section heading detailing field definitions and constraints for decision rigor findings output. |
| .claude/skills/review/references/devops.md | 335 | defined here | Section heading detailing field definitions and constraints for devops findings output. |
| .claude/skills/review/references/observability.md | 155 | defined here | Section heading detailing field definitions and constraints for observability findings output. |
| .claude/skills/review/references/qa.md | 306 | defined here | Section heading detailing field definitions and constraints for qa findings output. |
| .claude/skills/review/references/reliability.md | 167 | defined here | Section heading detailing field definitions and constraints for reliability findings output. |
| .claude/skills/review/references/roadmap.md | 198 | defined here | Section heading detailing field definitions and constraints for roadmap findings output. |
| .claude/skills/review/references/security.md | 226 | defined here | Section heading detailing field definitions and constraints for security findings output. |
| .claude/skills/review/references/spec-compliance.md | 169 | defined here | Section heading detailing field definitions and constraints for spec compliance findings output. |
| .claude/skills/review/SKILL.md | 83 | used here | Reference to output schema parsing rules for Stage 2 review axes. |
| scripts/validation/validate_seed_parity.py | 10 | used here | Reference to output schema verification across prompt seed versions. |

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
clean

## Design notes
A documentation section heading and format specification in review references and validation scripts defining the fields and validation rules of review output payloads, classified as name-only per D-023.
