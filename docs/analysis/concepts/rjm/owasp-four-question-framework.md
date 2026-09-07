---
package: rjm
name: OWASP four-question framework
slug: owasp-four-question-framework
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OWASP four-question framework

## Definition — verbatim
(used, not defined)

> "Structured security analysis using the OWASP Four-Question Framework. Produces threat models with attack trees, risk ratings, and mitigations." — docs/skill-reference.md:90

## Also called — verbatim
> "Structured security analysis using OWASP Four-Question Framework and STRIDE methodology." — .claude/skills/threat-modeling/SKILL.md:4

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 55 | used here | Invocation guidance for threat modeling when changes add attack surface. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 212 | used here | Default threat modeling methodology for Step 6 security analysis in specifications. |
| .claude/skills/threat-modeling/SKILL.md | 4 | used here | Core methodology underlying the threat-modeling skill. |
| docs/skill-reference.md | 90 | used here | Reference documentation describing threat-modeling skill capabilities. |

## Consumes
System architecture, trust boundaries, data flows, and external integration points.

## Produces
Identified threats, trust boundaries, abuse cases, attack trees, and mapped mitigations.

## When applied
Applied during specification generation (Tier 3+) and when PR changes add attack surface or new integrations.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: missing-path, doc-drift

## Design notes
A foundational threat modeling technique adopted across rjm specification and review workflows to systematically determine what is being built, what can go wrong, what will be done about it, and whether adequate mitigation has been achieved.
