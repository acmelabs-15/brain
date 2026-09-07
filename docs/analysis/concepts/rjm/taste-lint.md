---
package: rjm
name: taste-lint
slug: taste-lint
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# taste-lint

## Definition — verbatim
(used, not defined)

> "taste-lint: ignore file-size" — scripts/eval/_run_persistence.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 356 | used here | Notes that test file expansion breached the 500-line taste-lint threshold, prompting a modular split into separate files. |
| scripts/eval/_run_persistence.py | 1 | used here | File header suppression comment bypassing file-size lint rule with documented rationale. |
| scripts/validation/check_adr_lifecycle.py | 2 | used here | File header suppression comment bypassing file-size lint rule. |
| scripts/validation/check_adr_links.py | 2 | used here | File header suppression comment bypassing file-size lint rule with detailed line distribution breakdown. |
| scripts/validation/check_doc_interpreter_portability.py | 2 | used here | File header suppression comment bypassing file-size lint rule for interpreter portability ratchet. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 2 | used here | File header suppression comment bypassing file-size lint rule. |
| scripts/validation/check_skill_md_portability.py | 2 | used here | File header suppression comment bypassing file-size lint rule for skill portability validator. |
| scripts/validation/check_subprocess_encoding.py | 2 | used here | File header suppression comments bypassing file-size and complexity lint rules. |
| scripts/validation/check_vendor_portability.py | 2 | used here | File header suppression comment bypassing file-size lint rule. |
| scripts/validation/pre_pr_sequence.py | 2 | used here | File header suppression comment bypassing file-size lint rule for pre-PR sequence coordinator. |

## Consumes
Python source files, line count metrics, and cyclomatic complexity measurements.

## Produces
Linter warnings and blocking gate failures for files exceeding size (e.g. 500 lines) or complexity thresholds unless explicitly suppressed with rationale.

## When applied
During local development, pre-commit checks, and pre-PR validation runs.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
defects: missing-path, doc-drift

## Design notes
Repository-wide code taste and structural quality linter that enforces file length caps (typically 500 lines) and cognitive complexity limits, requiring developers to either refactor monolithic modules into smaller components or commit an explicit rationale suppression.
