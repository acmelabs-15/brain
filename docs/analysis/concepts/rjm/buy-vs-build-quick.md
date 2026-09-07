---
package: rjm
name: buy-vs-build Quick
slug: buy-vs-build-quick
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# buy-vs-build Quick

## Definition — verbatim
> "|New capability: buy-vs-build Quick BEFORE /spec+baseline; >13wk no baseline = prune. Skip: bug/doc/refactor/approved-cap-extension" — AGENTS.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 40 | defined here | Fast-path triage rule requiring buy-vs-build evaluation before writing specs or baseline implementations for new capabilities. |

## Consumes
Proposed capability scope, market/tooling availability, and maintenance estimates.

## Produces
Triage decision to adopt an existing external solution or proceed with in-tree specification and baseline development.

## When applied
Mandatory pre-spec step for any proposed new capability; bypassed for bugs, documentation, refactoring, and approved capability extensions.

## Sub-concepts
none

## Part of
buy-vs-build

## Implementation status
clean

## Design notes
A rapid evaluation technique in rjm executed prior to entering the `/spec` phase that forces an early determination of whether a capability should be bought/integrated or built internally, with a pruning rule for unvalidated work.
