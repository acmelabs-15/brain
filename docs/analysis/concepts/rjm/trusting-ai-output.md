---
package: rjm
name: Trusting AI Output
slug: trusting-ai-output
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trusting AI Output

## Definition — verbatim
(used, not defined)

> "### Trusting AI Output" — .agents/steering/security-practices.md:242

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 242 | defined here | Anti-pattern heading and example contrasting dangerous direct execution of AI recommendations with allowlist validation. |

## Consumes
none

## Produces
none

## When applied
> "# WRONG - Direct execution of AI output" — .agents/steering/security-practices.md:245

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
An anti-pattern highlighting the security vulnerabilities that arise from executing raw, unvalidated model output directly within shell environments or script execution blocks without strict allowlisting or sanitization against metacharacters.
