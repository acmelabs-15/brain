---
package: rjm
name: "Phase 1: Classify the Source Hook"
slug: phase-1-classify-the-source-hook
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Classify the Source Hook

## Definition — verbatim
> "### Phase 1: Classify the Source Hook" — .claude/skills/ai-agents-portability-campaign/SKILL.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 55 | defined here | Portability campaign phase categorizing hooks by trigger event, behavior, and adapter requirements. |

## Consumes
Canonical hook registrations from `.claude/settings.json`.

## Produces
Classified hook inventory detailing event types, execution modes (direct vs observe), and output parsing expectations.

## When applied
Executed following Phase 0 prior to making edits to hook generators or wrapper scripts.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
Phase 1 of the portability campaign systematically categorizes existing hooks into precise behavioral buckets (observe vs direct decision). Classifying hooks before writing adapters prevents broken JSON payloads and timeout errors when deploying hooks across different harnesses.
