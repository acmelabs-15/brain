---
package: rjm
name: version verification
slug: version-verification
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# version verification

## Definition — verbatim
> "After install, verify `copilot --no-auto-update --version` matches the pinned version and warn if the binary auto-updated." — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 80 | defined here | Proposed CI validation step asserting that installed tool binaries match pinned versions. |

## Consumes
Installed binary execution output and pinned version specifications.

## Produces
A validation pass/warn verdict confirming binary version integrity.

## When applied
Executed in CI immediately after tool installation steps.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
Version verification is a CI validation technique that checks executing binary versions against pinned dependency manifests to detect silent upstream updates before running test or quality workflows.
