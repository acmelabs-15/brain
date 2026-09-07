---
package: rjm
name: Tampering
slug: tampering
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tampering

## Definition — verbatim
> "### T - Tampering" — .claude/skills/threat-modeling/templates/threat-model-template.md:108

> "**Definition**: Modifying data or code without authorization" — .claude/skills/threat-modeling/templates/threat-model-template.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 108 | used here | Section header and threat category table for tampering vulnerabilities in the threat model template. |

## Consumes
In-transit network payloads, database records, code repositories, and configuration files.

## Produces
Threat matrix entries (e.g. SQL injection, man-in-the-middle modification) and integrity mitigations.

## When applied
Applied during STRIDE threat identification across data flows, processes, and data stores.

## Sub-concepts
none

## Part of
stride, threat-model-template

## Implementation status
clean

## Design notes
`Tampering` is the STRIDE threat category addressing unauthorized alteration of application code or data, mitigated through parameterized queries, input validation, and TLS 1.3 encryption.
