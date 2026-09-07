---
package: rjm
name: Ubiquitous Requirements
slug: ubiquitous-requirements
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ubiquitous Requirements

## Definition — verbatim
> "Requirements that apply at all times without a specific trigger." — .agents/governance/ears-format.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 49 | defined here | Defined as Pattern 1 of the EARS grammar specifying unconditional, system-wide behavioral requirements. |

## Consumes
Global system invariants, architectural standards, and baseline constraints.

## Produces
Syntactic requirements formatted as `THE SYSTEM SHALL [action] SO THAT [rationale]`.

## When applied
Applied when specifying universal constraints and behaviors that remain active continuously without prerequisites or state conditions.

## Sub-concepts
- the-system-shall

## Part of
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
Ubiquitous requirements express universal, continuous system invariants in rjm. Because they lack triggering conditions, they govern global properties such as architectural constraints, technology standards (e.g., scripting languages), and security baselines. Without ubiquitous requirements, system invariants would need to be repeated across every event-driven specification.
