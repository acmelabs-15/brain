---
package: rjm
name: parse_frontmatter
slug: parse-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
  - {path: scripts/validation/validate_copilot_agent_frontmatter.py, sha256: e4b2a8f78737f7a264ad60ab2fe96757f850f658704bec47695d2d5fc4e42e76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_frontmatter

## Definition — verbatim
(used, not defined)

> "def parse_frontmatter(self) -> bool:" — .claude/skills/skillforge/scripts/validate-skill.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/validate-skill.py | 59 | defined here | Method extracting and validating YAML frontmatter from skill content. |
| scripts/skill_registry.py | 51 | defined here | Function extracting top-level YAML frontmatter fields from a SKILL.md file. |
| scripts/validate_skill_installation.py | 42 | defined here | Function extracting YAML frontmatter dictionary from a SKILL.md file via python-frontmatter. |
| scripts/validation/command_size.py | 40 | defined here | Helper function extracting frontmatter key-value pairs from command markdown. |
| scripts/validation/skill_frontmatter.py | 173 | defined here | Function parsing and validating YAML frontmatter structure for skill files. |
| scripts/validation/spec_contradiction.py | 205 | defined here | Function parsing flat YAML frontmatter block into a string-keyed dictionary. |
| scripts/validation/validate_copilot_agent_frontmatter.py | 52 | defined here | Convenience wrapper returning parsed frontmatter dictionary via yaml_utils. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, orphan, script-bug

## Design notes
Python function identifier implemented across multiple validation and utility scripts to extract YAML frontmatter rather than an operational lifecycle concept.
