---
package: rjm
name: Scope Split Recommendation
slug: scope-split-recommendation
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Scope Split Recommendation

## Definition — verbatim
(used, not defined)

> "## Scope Split Recommendation" — .claude/skills/adr-review/references/agent-prompts.md:521

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/agent-prompts.md | 521 | defined here | Structured recommendation template proposing decomposition of a broad ADR into focused sub-decisions. |

## Consumes
Scope concerns raised by two or more reviewing agents in Phase 1.

## Produces
Decomposition proposal dividing an ADR into distinct sub-records (ADR-NNN-A, ADR-NNN-B).

## When applied
Triggered during Phase 2 or Phase 3 when an ADR is identified as conflating multiple decisions.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
clean

## Design notes
A formal output artifact generated during ADR review when multiple reviewers identify that a single decision record conflates distinct architectural concerns. It outlines the rationale for separation and specifies the individual scopes for split records (ADR-NNN-A, ADR-NNN-B), preventing monolithic decision capture.
