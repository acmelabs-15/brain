---
package: rjm
name: Reject product coupling
slug: reject-product-coupling
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reject product coupling

## Definition — verbatim
> "3. **Reject product coupling.** Reject any skill that operates one specific" — .claude/skills/skillforge/SKILL.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 144 | defined here | Third gate for external skill adaptation rejecting product-, tool-, or repo-specific skills in favor of generic principles. |

## Consumes
Candidate skill design and external tool/product dependencies.

## Produces
Rejection of vendor-specific wrappers or abstraction into product-agnostic skill patterns.

## When applied
Applied during external skill triage before adopting third-party workflows into the agent ecosystem.

## Sub-concepts
none

## Part of
adapting-an-external-skill-source

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Reject product coupling is a lifecycle design gate in rjm that excludes skills tightly bound to proprietary platforms, specific repositories, or vendor tools, ensuring skills remain portable and timeless.
