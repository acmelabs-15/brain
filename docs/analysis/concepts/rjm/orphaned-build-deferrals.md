---
package: rjm
name: Orphaned Build Deferrals
slug: orphaned-build-deferrals
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Orphaned Build Deferrals

## Definition — verbatim
> "Orphaned Build Deferrals" — scripts/validation/pre_pr_sequence.py:289

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 289 | defined here | Pre-PR gate checking that staleness deferral exemptions in build_all.py do not reference closed tracking issues. |

## Consumes
Deferral exemption comments in build_all.py and remote GitHub issue closure states.

## Produces
Pass/fail gate verdict flagging orphaned deferral exemptions referencing closed issues.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Orphaned Build Deferrals is a governance gate (Issue #2770) that prevents temporary build deferral exemptions in build_all.py from outliving their tracking issues. When an issue cited in an exemption is closed, this gate fails, ensuring build bypasses are cleaned up and generated mirrors remain fresh.
