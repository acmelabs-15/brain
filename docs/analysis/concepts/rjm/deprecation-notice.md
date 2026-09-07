---
package: rjm
name: Deprecation Notice
slug: deprecation-notice
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Deprecation Notice

## Definition — verbatim
> "## Deprecation Notice" — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 172 | defined here | Prescribes frontmatter and markdown banner format for notifying users that an agent is slated for retirement. |
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 130 | defined here | Standardizes runtime warning and JSDoc deprecation notices for retired code symbols. |

## Consumes
Deprecated agent definitions, retired code symbols, successor pointers, and target removal dates.

## Produces
Clear deprecation warnings visible in agent headers or code docstrings.

## When applied
Applied immediately upon approving an agent or code symbol for retirement prior to removal.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A communication pattern and metadata standard ensuring planned retirements of agents or API symbols are announced prominently with successor guidance, allowing callers a grace period to migrate before breaking changes occur.
