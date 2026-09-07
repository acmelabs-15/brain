---
package: rjm
name: Slow Responses Are Failures
slug: slow-responses-are-failures
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Slow Responses Are Failures

## Definition — verbatim
> "## Slow Responses Are Failures" — .claude/skills/software-engineering-library/references/release-it.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 157 | defined here | Core pattern section asserting that high latency ties up critical resources and must be treated as a failure. |

## Consumes
Service latency SLOs, thread pool capacity, agent turn budgets, and connection slots.

## Produces
Enforced deadlines, resource cancellation triggers, and fast typed error responses.

## When applied
Applied across all latency-sensitive operations and multi-agent interaction loops holding scarce resources.

## Sub-concepts
- deadline

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
An architectural principle recognizing that slow responses often inflict greater damage on distributed systems than immediate errors by tying up scarce sockets, threads, and agent contexts. Enforcing explicit timeouts and deadlines allows the system to fail fast and release resources.
