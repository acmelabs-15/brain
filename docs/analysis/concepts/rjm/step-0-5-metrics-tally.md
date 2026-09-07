---
package: rjm
name: Step 0.5 metrics tally
slug: step-0-5-metrics-tally
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 0.5 metrics tally

## Definition — verbatim
> "#### Step 0.5 metrics tally" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 108 | defined here | Defines the protocol for appending pass/fail evaluation records to .agents/sessions/STEP-0.5-METRICS.md via hardened scripts. |

## Consumes
Step 0.5 evaluation outcome (`pass` or `fail`), timestamp, halt trigger ID, and failed check ID.

## Produces
A standardized pipe-delimited tally line safely appended to `.agents/sessions/STEP-0.5-METRICS.md` with file locking.

## When applied
Executed after every Step 0.5 evaluation whether the gate passes or halts.

## Sub-concepts
archival-policy

## Part of
step-0-5

## Implementation status
defects: missing-path, doc-drift

## Design notes
Operational telemetry technique that appends gate outcomes using `O_NOFOLLOW` and file locking to maintain an accurate audit log for gate calibration and kill-criteria review without risking TOCTOU vulnerabilities.
