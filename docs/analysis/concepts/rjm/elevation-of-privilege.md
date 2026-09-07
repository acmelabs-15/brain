---
package: rjm
name: Elevation of Privilege
slug: elevation-of-privilege
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

# Elevation of Privilege

## Definition — verbatim
> "**Definition**: Gaining capabilities without proper authorization." — .claude/skills/threat-modeling/references/stride-methodology.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 153 | defined here | Defines the Elevation of Privilege threat category, authorization questions, and access control mitigations. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 143 | used here | Section header and threat catalog entry for unauthorized capability acquisition in sample architecture. |

## Consumes
Authorization policies, user roles, permission checks, privilege boundaries.

## Produces
Identified privilege escalation threats and authorization controls including role-based access control and object-level permissions.

## When applied
Evaluated against processes that enforce or consume authorization tokens and permissions.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Elevation of Privilege addresses scenarios where an untrusted user or compromised process gains unauthorized permissions or capabilities, mitigated by fine-grained object-level authorization and principle of least privilege.
