---
package: rjm
name: /4-security
slug: 4-security
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /4-security

## Definition — verbatim
> "| `/4-security` | `/test` + `/review` | Security is now integrated into both test and review |" — docs/workflow-commands.md:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 216 | defined here | Documented in comparison table as the legacy security verification command replaced by integration into /test and /review. |

## Consumes
Tested code changes and security configurations.

## Produces
Security validation verdict.

## When applied
Executed as the final legacy gate prior to release.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
`/4-security` was the legacy standalone security phase slash command in rjm before PR #1611 integrated security directly into both the `/test` phase (automated security gate) and the `/review` phase (security review axis).
