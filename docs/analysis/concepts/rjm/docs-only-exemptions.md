---
package: rjm
name: DOCS-only exemptions
slug: docs-only-exemptions
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DOCS-only exemptions

## Definition — verbatim
> "4. **DOCS-only exemptions** - All gates document DOCS exemption from CRITICAL_FAIL" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 78 | defined here | Structural rule requiring all gates to document exemption from CRITICAL_FAIL for docs-only PRs. |

## Consumes
Pull request type classification detecting documentation-only changes.

## Produces
Exemption from code-specific failure triggers in automated quality gates.

## When applied
Applied by AI review gates when evaluating pull requests that touch only documentation files.

## Sub-concepts
none

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path

## Design notes
A prompt engineering pattern and gate rule ensuring documentation-only pull requests are exempt from code-centric critical failures such as missing unit tests. It eliminates spurious build failures and developer frustration on non-code changes.
