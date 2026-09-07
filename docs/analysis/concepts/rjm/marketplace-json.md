---
package: rjm
name: marketplace.json
slug: marketplace-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# marketplace.json

## Definition — verbatim
(used, not defined)

> "A marketplace is a catalog file (`.claude-plugin/marketplace.json`) that:" — .agents/analysis/claude-code-plugin-marketplaces.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 37 | defined here | Catalog manifest file listing available plugins, sources, and metadata. |
| .agents/projects/v0.4.0/PLAN.md | 233 | defined here | Planned marketplace manifest location in root `.claude-plugin/` directory. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 52 | used here | Specified in discovery order for marketplace manifests in Copilot CLI. |
| scripts/generate_third_party_notices.py | 4 | used here | Read by license attribution generator to scan shipped plugin source paths. |

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
Filename convention for the JSON catalog manifest defining available plugins and sources, not an independent lifecycle concept.
