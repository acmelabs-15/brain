---
package: rjm
name: Retry with backoff
slug: retry-with-backoff
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Retry with backoff

## Definition — verbatim
> "**Retry with backoff**: For transient failures only. Max 3 retries with exponential backoff." — .claude/agents/implementer.md:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 235 | defined here | Error policy specifying maximum 3 retries with exponential backoff for transient failures. |
| templates/agents/implementer.shared.md | 243 | used here | Shared error policy specifying exponential backoff retry behavior for transient errors. |

## Consumes
Transient operational failures (e.g. network timeouts, rate limit throttling).

## Produces
Scheduled retry attempts with exponentially increasing backoff intervals up to a bounded limit.

## When applied
Exclusively on transient failure modes such as network blips and API rate limits, never on fatal or business errors.

## Sub-concepts
none

## Part of
code-quality-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Retry with backoff provides bounded resilience for transient faults in rjm without overwhelming failing upstream dependencies. By restricting retries to transient errors (max 3) and applying exponential delay, it prevents retry storms while recovering from intermittent glitches.
