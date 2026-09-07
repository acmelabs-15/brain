---
package: rjm
name: Break-glass
slug: break-glass
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Break-glass

## Definition — verbatim
> "**Break-glass.** Fail-closed-and-loud must never leave an operator with only the banned escape (`git commit --no-verify`, which this repo forbids)." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 157 | defined here | Establishes explicit, auditable environment variable bypass valves (such as SKIP_<GATE>_GATE) to handle false positives. |

## Consumes
Named environment variable overrides set by an operator.

## Produces
Auditable gate bypass without resorting to unmonitored command switches like `--no-verify`.

## When applied
Invoked by human operators or automation when encountering false-positive gate blocks or unexpected environment wedges.

## Sub-concepts
none

## Part of
governance-architecture

## Implementation status
defects: doc-drift, missing-path

## Design notes
An emergency bypass mechanism in ADR-066 that ensures fail-closed gates do not permanently wedge developers. Instead of permitting dangerous unlogged escapes (`git commit --no-verify`), every gate must support a named, logged environment variable valve (such as `SKIP_<GATE>_GATE`).
