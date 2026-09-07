---
package: rjm
name: Size Exception Audit
slug: size-exception-audit
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Size Exception Audit

## Definition — verbatim
> "Size Exception Audit" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:306

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 306 | defined here | Automated compliance check validating that declared skill size exceptions include structured evidence fields. |

## Consumes
Declared size exception HTML comment blocks in skill directories.

## Produces
Compliance check result record logging passing status or violations with remediation recommendations.

## When applied
Executed during passive context compliance scanning whenever a scanned skill declares a size exception.

## Sub-concepts
none

## Part of
skill-passive-context-compliance-validator

## Implementation status
defects: doc-drift

## Design notes
Size Exception Audit acts as a verification gate within the context optimizer suite, ensuring that any skill exceeding standard size thresholds provides structured justification, test coverage links, and review triggers rather than arbitrary unmonitored exemptions.
