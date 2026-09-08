---
package: rjm
name: Stale Script References
slug: stale-script-references
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

# Stale Script References

## Definition — verbatim
> "Stale Script References" — scripts/validation/pre_pr_sequence.py:274

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 274 | defined here | Pre-PR gate verifying that live documentation does not instruct contributors or agents to invoke deleted scripts. |

## Consumes
Markdown documentation, rules, and live repository script paths.

## Produces
Pass/fail gate verdict detecting invocations of removed or obsolete scripts.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Stale Script References is a quality gate (Issue #2916) arising from regressions during the PowerShell-to-Python migration (Issues #2914 and #2915). It scans documentation and command files to ensure instructions do not reference scripts that have been deprecated, renamed, or deleted.
