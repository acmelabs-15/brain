---
package: rjm
name: file-size
slug: file-size
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
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

# file-size

## Definition — verbatim
> "ALL_RULES = (\"file-size\", \"naming\", \"complexity\", \"skill-size\")" — .claude/skills/taste-lints/scripts/taste_lints.py:34

## Also called — verbatim
> "| `check file size` | taste_lints.py with file-size rule only |" — .claude/skills/taste-lints/SKILL.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 34 | defined here | Declared as one of four active taste invariant rules in ALL_RULES tuple. |
| .claude/skills/taste-lints/SKILL.md | 24 | defined here | Trigger definition mapping check file size to running taste_lints.py with the file-size rule only. |
| scripts/validation/check_adr_lifecycle.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |
| scripts/validation/check_doc_interpreter_portability.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |
| scripts/validation/check_skill_md_portability.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |
| scripts/validation/check_subprocess_encoding.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |
| scripts/validation/check_vendor_portability.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |
| scripts/validation/pre_pr_sequence.py | 2 | used here | Inline suppression comment `# taste-lint: ignore file-size` exempting the script from line count limits. |

## Consumes
File line counts from scannable repository files.

## Produces
Exit code 10 and violation diagnostics with module decomposition instructions when lines exceed 500 without suppression.

## When applied
Evaluated during build and pre-PR validation on scannable files unless suppressed with `# taste-lint: ignore file-size`.

## Sub-concepts
check_file_size, FILE_SIZE_EXEMPT_SUFFIX, FILE_SIZE_EXEMPT_SEGMENTS

## Part of
taste-lints

## Implementation status
defects: doc-drift, other

## Design notes
file-size is an architectural quality gate in taste-lints capping file length at 500 lines to enforce modularity and ensure source files fit comfortably within agent context windows.
