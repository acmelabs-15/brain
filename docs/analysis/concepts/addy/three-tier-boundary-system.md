---
package: addy
name: "three-tier boundary system"
slug: three-tier-boundary-system
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# three-tier boundary system

## Definition — verbatim
> "## The Three-Tier Boundary System" — skills/security-and-hardening/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/security-and-hardening.md | 5 | used here | Highlighted as the core architectural defense framework for any feature accepting untrusted data. |
| skills/security-and-hardening/SKILL.md | 42 | defines | Establishes the three security action tiers: Always Do (No Exceptions), Ask First (Requires Human Approval), and Never Do (Block the Action). |

## Consumes
System boundaries, external inputs, authorization checks, and agent operations.

## Produces
Strict security decision boundaries dividing automatic actions from human-gated actions and hard blocks.

## When applied
Applied whenever designing or reviewing features that touch untrusted inputs, authentication, or external systems.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
The three-tier boundary system provides an explicit governance framework for AI agents, categorizing actions into non-negotiable security requirements (Always Do), sensitive operations requiring human approval (Ask First), and dangerous operations that are strictly prohibited (Never Do).
