---
package: rjm
name: auto-proposal
slug: auto-proposal
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# auto-proposal

## Definition — verbatim
> "Prototype auto-proposal: when the Apply hook surfaces the same correction memory more than N times, emit a draft guard (code plus calibration fixture) as a PR for human review, never auto-merged" — .claude/skills/ai-agents-research-frontier/SKILL.md:255-257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 255 | defined here \| used here | Proposed as an automated loop mechanism generating PRs with calibration fixtures from recurring correction memories. |

## Consumes
Recurring correction memories surfaced by memory retrieval hooks beyond a configured threshold N.

## Produces
Draft pull requests containing proposed guard code and historical calibration replay fixtures.

## When applied
When recurring corrections demonstrate that advisory memory injection is failing to prevent repeated mistakes across agent sessions.

## Sub-concepts
none

## Part of
self-improving-loop

## Implementation status
defects: missing-path

## Design notes
Auto-proposal represents a pattern for closing the feedback loop between human corrections and automated enforcement. Instead of repeatedly injecting advisory memories that models may ignore, auto-proposal generates a formal pull request containing a calibrated guard rule for human maintainer review, maintaining governance control under change-control rules without silent automatic code modifications.
