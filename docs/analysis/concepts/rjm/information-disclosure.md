---
package: rjm
name: Information Disclosure
slug: information-disclosure
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Information Disclosure

## Definition — verbatim
> "**Definition**: Exposing information to someone not authorized to see it." — .claude/skills/threat-modeling/references/stride-methodology.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 93 | defined here | Defines the Information Disclosure threat category, data sensitivity questions, and confidentiality mitigations. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 125 | used here | Section header and threat catalog entry for information exposure vulnerabilities in sample architecture. |

## Consumes
Sensitive data assets, network egress channels, persistent storage, error handlers.

## Produces
Identified data leakage threats and confidentiality controls including encryption at rest and in transit.

## When applied
Evaluated against data stores and data flows carrying sensitive or regulated payloads.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Information Disclosure covers unauthorized data exposure across storage or transit boundaries, resolved architecturally through end-to-end encryption, strict access control, and sanitization of diagnostic output.
