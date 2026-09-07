---
package: rjm
name: buffer-check
slug: buffer-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# buffer-check

## Definition — verbatim
> "Has this edit already been rejected?" — scripts/eval/README.md:498

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 498 | defined here | Pre-evaluation gate checking whether proposed patches duplicate a previously rejected mutation. |

## Consumes
Candidate patch file, target artifact file, and rejected mutations buffer file.

## Produces
Exit code 0 (novel patch), 1 (already rejected, skip), or 2 (execution error).

## When applied
Applied before applying candidate patches and running expensive model evaluations in the optimization loop.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
A deduplication gate in rjm's optimization loop that compares candidate patch fingerprints against historical rejections, preventing wasted evaluation spend on previously rejected edits.
