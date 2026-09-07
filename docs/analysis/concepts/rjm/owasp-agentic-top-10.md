---
package: rjm
name: OWASP Agentic Top 10
slug: owasp-agentic-top-10
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OWASP Agentic Top 10

## Definition — verbatim
(used, not defined)

> "### OWASP Agentic Top 10 (2026)" — .agents/security/ADR-045-framework-extraction-security-review.md:908

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 908 | used here | Compliance section mapping review findings to agentic security risk categories (ASI02, ASI03, ASI04). |

## Consumes
System architectures, agent permission specifications, plugin hook configurations, and threat models.

## Produces
Agentic risk classifications, vulnerability findings, and containment recommendations mapped to ASI01–ASI10 categories.

## When applied
Applied during security architecture audits, threat modeling, and code reviews of autonomous agent workflows and tools.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: missing-path

## Design notes
An emerging reference security framework tailored to autonomous AI agent systems, providing standardized threat classifications (such as tool misuse, identity abuse, and prompt injection) to evaluate multi-agent architectures and plugin ecosystems.
