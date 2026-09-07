---
package: rjm
name: namespace migration
slug: namespace-migration
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# namespace migration

## Definition — verbatim
(used, not defined)

> "Maintenance cost underestimated. 4 manifests + namespace migration impact." — .agents/analysis/adr-045-feasibility-analysis.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 144 | defined here | Identified as a major hidden maintenance cost when transitioning skills to plugin namespaces. |
| .agents/critique/ADR-045-debate-log.md | 63 | defined here | Raised in P1 critique noting that simple grep sweeps miss dynamic and frontmatter skill references. |

## Consumes
Existing un-namespaced skill invocations, commands, and markdown documentation.

## Produces
Namespaced skill references adhering to plugin marketplace conventions (`/plugin-name:skill`).

## When applied
Applied when adopting marketplace plugins to ensure skill calls resolve through plugin namespaces.

## Sub-concepts
none

## Part of
framework-extraction

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
Namespace migration is the systematic update of all skill invocations, slash commands, and cross-references to use marketplace namespace prefixes (such as `/awesome-ai:skill-name`). In rjm, analysis proved that namespace migration cannot rely on naive text replacement because skills are referenced across frontmatter YAML, code strings, and dynamic calls.
