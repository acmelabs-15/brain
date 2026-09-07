---
package: rjm
name: SSRF
slug: ssrf
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SSRF

## Definition — verbatim
> "| A10 | SSRF | Server fetches URLs without validation |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 62 | used here | Cited in frontmatter design rules prohibiting automatic fetching of explainer URLs |
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 24 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability class A10 |

## Consumes
Network boundary specifications and URL handling logic.

## Produces
Security findings and defensive constraints against untrusted network requests.

## When applied
Analyzed during threat modeling, security reviews, and input validation design.

## Sub-concepts
cwe-918

## Part of
owasp-top-10

## Implementation status
defects: missing-path

## Design notes
SSRF (Server-Side Request Forgery) is a security vulnerability pattern where an application or agent fetches remote resources based on user-supplied or unvalidated URLs. In rjm, ADR-073 strictly forbids tooling and agents from automatically fetching external explainer links to prevent SSRF and poisoning attacks.
