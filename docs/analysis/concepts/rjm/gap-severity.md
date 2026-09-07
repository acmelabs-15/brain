---
package: rjm
name: Gap Severity
slug: gap-severity
kind: reference
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gap Severity

## Definition — verbatim
> "## Gap Severity" — .claude/skills/quality-grades/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/SKILL.md | 72 | defined here | Section defining the three-level severity classification scheme (critical, significant, minor) for tracked domain quality gaps. |

## Consumes
Identified omissions, missing artifacts, or defects in domain architectural layers.

## Produces
Triaged gap classifications prioritized by operational urgency.

## When applied
During layer grading when registering tracked omissions to guide remediation sequencing.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
defects: doc-drift

## Design notes
A three-tier triage classification (critical: blocks quality / missing required artifact, significant: should address soon, minor: nice-to-have improvement) that prioritizes domain defects so remediation efforts address blocking architectural gaps first.
