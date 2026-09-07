---
package: rjm
name: Routing Triggers
slug: routing-triggers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/overview-and-triggers.md, sha256: 663351048ad745ba6e3141bb5d51ed670959475e88412c9a7c304fd37ce46b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Routing Triggers

## Definition — verbatim
> "### Routing Triggers (NEW in v4.0)" — .claude/skills/skillforge/references/overview-and-triggers.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/overview-and-triggers.md | 38 | defined here | Section heading cataloging intent-detection patterns that activate Phase 0 triage and automatic routing. |

## Consumes
Arbitrary user prompts, error messages, code snippets, URLs, or skill catalog inquiries.

## Produces
Automatic routing of input to triage, recommendation, or enhancement workflows.

## When applied
Applied upon receiving any generic task or inquiry that may match existing skill capabilities.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
Routing Triggers enable SkillForge to act as a universal dispatcher. By matching conversational cues, error patterns, and inquiries, it directs user inputs toward existing skills or improvement workflows without requiring the user to memorize explicit skill names.
