---
package: rjm
name: severity threshold
slug: severity-threshold
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# severity threshold

## Definition — verbatim
> "0: No findings at or above severity threshold" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 12 | used here | Exit code contract rule specifying that 0 is returned only if no findings reach or exceed the severity threshold. |

## Consumes
Configured severity level (`critical`, `high`, `medium`, `low`) and compilability findings.

## Produces
Process exit verdict and gate result determining whether detected issues block execution.

## When applied
Evaluated during gate verification (`check_gate`) to determine script exit code.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
The severity threshold is the configurable gating boundary in doc_accuracy.py that determines whether detected findings block execution. By defaulting to `high`, it ensures that critical errors like missing symbols and phantom parameters fail the build while lower-severity stylistic discrepancies can be reviewed asynchronously.
