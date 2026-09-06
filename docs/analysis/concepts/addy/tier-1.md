---
package: addy
name: Tier 1
slug: tier-1
kind: gate
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Tier 1

## Definition — verbatim
(used, not defined)
> "# Tier 1, structural: frontmatter, naming, required sections" — docs/developer-onboarding.md:55

## Also called — verbatim
- `Structural` — evals/README.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 55 | used here | Documented as the structural validation tier checking frontmatter, naming, and required sections. |

## Consumes
Skill markdown files, directory structures, and command definitions.

## Produces
Pass/fail verdicts on schema conformance, section presence, and command parity.

## When applied
Run in CI on every push/PR and locally via `node scripts/validate-skills.js` and `node scripts/validate-commands.js`.

## Sub-concepts
none

## Part of
- `three-tier-eval-framework`
- `verification-loop`

## Implementation status
clean

## Design notes
Tier 1 is the structural foundation of the evaluation framework. It executes deterministic, zero-token validation scripts that verify skill frontmatter schemas, directory naming rules, required sections, and multi-platform command parity, immediately catching malformed contributions before semantic evaluation.
