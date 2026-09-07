---
package: rjm
name: scan_file
slug: scan-file
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
  - {path: .claude/skills/orphan-ref-validator/scripts/walking.py, sha256: c5ec30edde983edb8e7427dbe17f5d866f34515ebdbb2b82a8867f31db8f074e}
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
  - {path: .claude/skills/skillforge/scripts/check_docs_safety.py, sha256: 1853c181c749bc1f147533aab5a23ab12b03170a1a9526d3bf72c5c6055eaea7}
  - {path: scripts/review_memory_export_security.py, sha256: d8e98211aeb8e9412aa1bc516f5a90b054306e33e2390b486e8c2571a279060f}
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_test_tree_writes.py, sha256: 3be035ef1a8fa8f3129bdba85305786b374ca532615d1c04b49aabf1d6806550}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# scan_file

## Definition — verbatim
> "def scan_file(" — .claude/skills/orphan-ref-validator/scripts/scan.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/scripts/scan.py | 196 | defined here | Primary definition of `scan_file` within scan.py. |
| .claude/skills/orphan-ref-validator/scripts/walking.py | 7 | used here | Referenced and applied in walking.py during verification and operational workflows. |
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 218 | defined here | Primary definition of `scan_file` within scan_vulnerabilities.py. |
| .claude/skills/skillforge/scripts/check_docs_safety.py | 45 | defined here | Primary definition of `scan_file` within check_docs_safety.py. |
| scripts/review_memory_export_security.py | 172 | defined here | Primary definition of `scan_file` within review_memory_export_security.py. |
| scripts/validation/check_adr_links.py | 760 | defined here | Primary definition of `scan_file` within check_adr_links.py. |
| scripts/validation/check_canonical_citations.py | 183 | defined here | Primary definition of `scan_file` within check_canonical_citations.py. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 578 | defined here | Primary definition of `scan_file` within check_plugin_frontmatter_self_containment.py. |
| scripts/validation/check_test_tree_writes.py | 188 | defined here | Primary definition of `scan_file` within check_test_tree_writes.py. |
| scripts/validation/sha_pinning.py | 81 | defined here | Primary definition of `scan_file` within sha_pinning.py. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An operational technique or artifact (scan_file) utilized within the rjm ecosystem to ensure consistency and systematic execution.
