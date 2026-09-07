---
package: rjm
name: .qualityrc.json
slug: qualityrc-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# .qualityrc.json

## Definition — verbatim
(used, not defined)

> ".qualityrc.json             # Configuration template" — .claude/skills/code-qualities-assessment/README.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/README.md | 35 | used here | Directory tree listing identifying the JSON configuration template for code qualities. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 413 | used here | CLI parser default argument establishing .qualityrc.json as the standard configuration file path. |

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
clean

## Design notes
A project root configuration file name specifying quality scoring thresholds, context overrides, and ignore paths for assess.py rather than an operational lifecycle concept.
