---
package: rjm
name: Phase 5: npm Release Path
slug: phase-5-npm-release-path
kind: phase
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 5: npm Release Path

## Definition — verbatim
> "### Phase 5: npm Release Path" — .claude/skills/ai-agents-generation-and-release/SKILL.md:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 163 | defined here | Release phase detailing npm packaging, publishing workflow, provenance, and verification steps. |

## Consumes
Validated packages/ai-agents-cli artifacts, git release tags, and publishing workflow permissions.

## Produces
Published npm package with verified cryptographic provenance attestations.

## When applied
Triggered during production releases upon pushing a `v*` tag to main.

## Sub-concepts
oidc-provenance, roll-forward

## Part of
ai-agents-generation-and-release

## Implementation status
defects: doc-drift, unfailable-gate

## Design notes
Phase 5 standardizes the automated packaging and publishing pipeline for the CLI package on npm. It enforces security best practices through GitHub Actions OIDC provenance tokens and establishes roll-forward remediation rather than unpublishing.
