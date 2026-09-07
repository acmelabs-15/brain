---
package: rjm
name: Frontmatter drift
slug: frontmatter-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Frontmatter drift

## Definition — verbatim
> "- **Frontmatter drift**, YAML frontmatter edited outside the generation pipeline" — CONTRIBUTING.md:510

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 510 | defined here | Defined as YAML frontmatter modifications edited directly in platform files outside the generation pipeline. |

## Consumes
Direct manual modifications made to YAML frontmatter blocks within generated agent target files.

## Produces
CI test failures and actionable diff reports highlighting frontmatter divergences between generated files and template render output.

## When applied
Checked during CI drift detection stages whenever pull request commits modify platform agent definitions.

## Sub-concepts
none

## Part of
automated-quality-gates

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Frontmatter drift designates unsanctioned direct edits to YAML metadata headers in generated agent files rather than in platform configuration mappings (`templates/platforms/*.yaml`) or shared templates. In rjm's pipeline, platform configurations inject provider metadata, tools, and model mappings dynamically, so out-of-band edits introduce inconsistencies across VS Code and Copilot CLI targets unless caught by drift gates.
