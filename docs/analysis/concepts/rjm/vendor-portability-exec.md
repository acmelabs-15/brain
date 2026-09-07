---
package: rjm
name: vendor-portability-exec
slug: vendor-portability-exec
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vendor-portability-exec

## Definition — verbatim
> "<!-- vendor-portability-exec: bootstrap runs before COPILOT_PLUGIN_ROOT is set -->" — docs/SKILL-AUTHORING.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/SKILL-AUTHORING.md | 245 | defined here | Defined as the machine-readable HTML comment marker exempting necessary bare executable path invocations from portability checks. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Documented in baseline comment as the suppression marker tracked in `marker_files` for ratchet accounting. |

## Consumes
Declared rationale justifying why an executable script must invoke a bare upstream path before plugin root initialization.

## Produces
Exemption from static CI failure in `check_skill_md_exec_portability.py`.

## When applied
> "declare it with a machine-readable marker so the exemption is reviewable" — docs/SKILL-AUTHORING.md:241-242

## Sub-concepts
none

## Part of
skill-authoring-guide

## Implementation status
clean

## Design notes
`vendor-portability-exec` is a machine-readable HTML comment marker used in rjm to explicitly declare exemptions for bare executable script invocations in skill documentation. It allows exceptional cases—such as bootstrap scripts executing before environment roots exist—to pass vendor portability gates without lowering repository-wide standards.
