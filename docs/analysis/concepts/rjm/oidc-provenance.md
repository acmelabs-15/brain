---
package: rjm
name: "OIDC provenance"
slug: oidc-provenance
kind: technique
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

# OIDC provenance

## Definition — verbatim
> "publishes with OIDC provenance (`id-token: write`; `NPM_TOKEN` is fallback only)" — .claude/skills/ai-agents-generation-and-release/SKILL.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 174 | used here | Workflow publication step authenticating via OIDC tokens to attach cryptographic provenance to npm packages. |

## Consumes
GitHub Actions `id-token: write` permission and npm registry trusted publishing configuration.

## Produces
Verifiable provenance attestations linking package artifacts to source commits on npmjs.com.

## When applied
Executed during npm package publication in `.github/workflows/publish.yml`.

## Sub-concepts
none

## Part of
phase-5-npm-release-path

## Implementation status
defects: doc-drift, unfailable-gate

## Design notes
Cryptographic supply chain verification technique that uses short-lived OpenID Connect tokens directly from GitHub Actions instead of long-lived static npm registry tokens, guaranteeing build authenticity and tamper resistance for released artifacts.
