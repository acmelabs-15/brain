---
package: rjm
name: APT-style threats
slug: apt-style-threats
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# APT-style threats

## Definition — verbatim
(used, not defined)

> "- APT-style threats" — .claude/skills/threat-modeling/references/advanced-analysis.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 43 | used here | Listed under When to Use as the primary threat category justifying advanced kill chain modeling. |

## Consumes
System architecture, high-value data assets, and threat intelligence reports.

## Produces
Comprehensive defense-in-depth postures designed to withstand persistent, well-funded adversaries.

## When applied
Applied when analyzing systems handling high-value assets subject to persistent, multi-stage state or syndicate adversaries.

## Sub-concepts
none

## Part of
kill-chains

## Implementation status
clean

## Design notes
Advanced Persistent Threat (APT) attack profiles characterized by sophisticated, multi-stage campaigns requiring multi-layer defensive modeling beyond simple single-vulnerability mitigations.
