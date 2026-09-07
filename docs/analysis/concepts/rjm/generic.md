---
package: rjm
name: Generic
slug: generic
kind: pattern
package_phase: none
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

# Generic

## Definition — verbatim
> "- **Subdomain**: a coherent slice of the domain. **Core** is what differentiates the product, **Supporting** is necessary but not differentiating, **Generic** is commodity that any team would solve the same way." — .claude/skills/software-engineering-library/references/domain-driven-design.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 15 | defined here | Defined in core vocabulary as a commodity subdomain that any team would solve identically. |

## Consumes
Standard operational or infrastructural requirements.

## Produces
Commodity solution boundaries suitable for third-party tools, off-the-shelf software, or standard libraries.

## When applied
Applied when categorizing system capabilities (such as authentication, telemetry, and base logging) that lack unique business value and can be satisfied by standard libraries.

## Sub-concepts
none

## Part of
subdomain

## Implementation status
clean

## Design notes
Generic subdomains capture standard commodity problems within an application's architecture that should be delegated to off-the-shelf components or third-party solutions rather than consuming custom development effort.
