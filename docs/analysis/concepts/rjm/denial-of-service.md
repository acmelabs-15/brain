---
package: rjm
name: Denial of Service
slug: denial-of-service
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

# Denial of Service

## Definition — verbatim
> "**Definition**: Denying access to legitimate users by exhausting resources." — .claude/skills/threat-modeling/references/stride-methodology.md:125

## Also called — verbatim
> "### D - Denial of Service" — .claude/skills/threat-modeling/templates/threat-model-template.md:134

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 123 | defined here | Defines the Denial of Service threat category, resource exhaustion questions, and availability mitigations. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 134 | used here | Section header and threat catalog entry for availability degradation threats in sample architecture. |

## Consumes
System compute, memory, disk, network bandwidth, connection pools.

## Produces
Identified availability threats and resilience controls including rate limiting, timeouts, and resource quotas.

## When applied
Evaluated against processes and data stores handling untrusted input or high-volume traffic.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Denial of Service encompasses attacks that impair system availability or degrade performance for legitimate users through resource exhaustion, mitigated by rate limiting, autoscaling, timeouts, and protective buffering.
