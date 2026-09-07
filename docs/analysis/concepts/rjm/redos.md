---
package: rjm
name: ReDoS
slug: redos
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReDoS

## Definition — verbatim
(used, not defined)

> "Structured `status` removes the brittle body-regex path, reducing the regex-edge-case and ReDoS surface that prose scraping invites." — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 124 | used here | Cited in ADR-073 as a vulnerability class mitigated by adopting structured YAML frontmatter over prose scraping |

## Consumes
Regular expression definitions and untrusted string inputs.

## Produces
Hardened parsing logic and regex timeout constraints.

## When applied
Evaluated during parser implementation, security audits, and threat modeling.

## Sub-concepts
none

## Part of
security-vulnerabilities

## Implementation status
defects: missing-path

## Design notes
ReDoS (Regular Expression Denial of Service) is an algorithmic vulnerability pattern where poorly constrained regular expressions experience catastrophic backtracking when processing malicious or complex input. rjm replaces regex-based prose scraping with structured YAML parsing to eliminate ReDoS attack vectors.
