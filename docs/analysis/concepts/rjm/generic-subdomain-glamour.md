---
package: rjm
name: Generic Subdomain Glamour
slug: generic-subdomain-glamour
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generic Subdomain Glamour

## Definition — verbatim
> "- **Generic Subdomain Glamour**: investing core-level effort in JSON parsing, retry, or HTTP plumbing. Use a library; spend the time on the core." — .claude/skills/software-engineering-library/references/domain-driven-design.md:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 235 | defined here | Anti-pattern catalog entry warning against over-engineering commodity utilities rather than differentiating core capabilities. |

## Consumes
Engineering time wasted on custom implementations of generic infrastructure problems.

## Produces
PR review rejections directing teams to adopt standard libraries for commodity needs.

## When applied
Identified when developers roll their own JSON parsers, retry logic, date utilities, or HTTP wrappers instead of using standard packages.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Generic Subdomain Glamour describes the trap of spending high-value engineering resources building bespoke solutions for solved commodity problems. Enforcing this anti-pattern protects team bandwidth for core product differentiators.
