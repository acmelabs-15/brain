---
package: rjm
name: changed_files
slug: changed-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# changed_files

## Definition — verbatim
(used, not defined)

> "def changed_files(repo_root: Path, base_ref: str | None) -> frozenset[str]:" — scripts/ci/count_ratchet.py:311

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 311 | defined here | Resolves repo-relative paths modified in committed or working-tree diffs to prioritize newly touched files in diagnostics. |
| scripts/validation/check_agent_skill_discriminator.py | 591 | defined here | Defines the --changed-files CLI option for scoring specific agent files instead of the full corpus. |
| scripts/validation/test_docs_only_eligibility.py | 105 | defined here | Private function returning paths changed by a branch's own commits using first-parent log traversal. |
| scripts/validation/test_investigation_eligibility.py | 67 | defined here | Private function returning staged or range git file changes excluding upstream merges. |

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
defects: missing-path, other

## Design notes
A utility function and CLI option name used across CI ratchets and validation scripts to identify modified files in Git diffs rather than a lifecycle concept.
