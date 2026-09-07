---
package: rjm
name: discover_skills
slug: discover-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# discover_skills

## Definition — verbatim
(used, not defined)

> "def discover_skills(verbose: bool = False) -> Result:" — .claude/skills/skillforge/scripts/discover_skills.py:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 319 | defined here | Scans all configured skill sources, parses metadata, builds domain indexes, and returns a Result. |
| scripts/validation/check_rule_activation_coverage.py | 114 | defined here | Scans .claude/skills/ to discover all skill identifiers by inspecting directory names with a SKILL.md. |

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
defects: doc-drift, missing-path

## Design notes
Python function identifier used in discovery and rule coverage verification scripts, classified as name-only per D-023.
