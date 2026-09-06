---
package: addy
name: Anti-duplication guardrail
slug: anti-duplication-guardrail
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/rules/skills-contributing.md, sha256: 6f8ff659388c3b957322ac46f788ff16d996e5c751f71a6c1e59e4761c437bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Anti-duplication guardrail

## Definition — verbatim
> "Anti-duplication guardrail for adding or changing skills" — .claude/rules/skills-contributing.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/skills-contributing.md | 2 | defined here | Frontmatter description declaring the rule's purpose when adding or modifying skills. |

## Consumes
Catalog search results across skills/ and open pull requests via gh pr list --state open.

## Produces
Gap justification or a decision to extend an existing skill rather than adding a near-duplicate.

## When applied
Before creating a new skills/<name>/ directory or significantly reworking an existing one.

## Sub-concepts
pre-flight-checks

## Part of
none

## Implementation status
clean

## Design notes
Enforces repository hygiene and prevents skill sprawl by obliging contributors and agents to search the catalog and justify genuine capability gaps before creating new skill directories.
