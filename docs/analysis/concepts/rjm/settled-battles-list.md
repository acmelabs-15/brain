---
package: rjm
name: Settled Battles List
slug: settled-battles-list
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Settled Battles List

## Definition — verbatim
> "### Phase 2: Check the Settled Battles List" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 56 | defined here | Phase 2 reference table enumerating binding verdicts on controversial architectural decisions. |

## Consumes
Proposed changes to testing methodology, runtime contracts, merge rules, or escape hatches.

## Produces
Decisive verdicts (REJECTED, BANNED, SETTLED EMPIRICALLY) backed by historical citations.

## When applied
Consulted when evaluating proposals that touch historical friction points or controversial patterns.

## Sub-concepts
launcher-level-fail-open-wrapper, self-referential-tests, copilot-cli-plugin-root-env-contract, session-file-merge-conflicts, threshold-based-detectors

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
The `Settled Battles List` records formal repository rulings on contested implementation patterns (e.g. banning self-referential tests, prohibiting frictionless bypasses). It prevents churn by establishing that settled questions cannot be re-opened without empirical evidence and formal change-control review.
