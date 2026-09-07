---
package: rjm
name: plugin.json
slug: plugin-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md, sha256: 3b68e11d9db7b25daccc5b46f4c2ec9ee5595e1d9161815396d0217d5050a76f}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: scripts/hook_utilities/bootstrap.py, sha256: f18044a4ab6383dd647b3616bacd01ae96145cf2a0107cb45b212a45a66279cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plugin.json

## Definition — verbatim
(used, not defined)

> "- `.claude-plugin/plugin.json` - Manifest with name, description, version" — .agents/analysis/claude-code-plugin-marketplaces.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 27 | defined here | Manifest file declaring plugin metadata, version, and component paths. |
| .agents/incidents/2026-04-27-pir-plugin-manifest-schema-1773.md | 13 | used here | Documented as the subject of an incident where schema violations broke marketplace plugin installation. |
| .agents/projects/v0.4.0/PLAN.md | 237 | defined here | Planned as the core manifest file within the `.claude-plugin/` directory of extracted plugins. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 51 | used here | Specified in manifest discovery order across supported CLI harnesses. |
| scripts/hook_utilities/bootstrap.py | 40 | used here | Used as a filesystem marker to resolve plugin root directory dynamically. |

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
defects: missing-path

## Design notes
Manifest filename convention defining metadata and component locations for a plugin, not an independent lifecycle concept.
