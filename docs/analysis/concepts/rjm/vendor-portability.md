---
package: rjm
name: vendor-portability
slug: vendor-portability
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/push-pr.md, sha256: 9383f9915870dc023605e1632ffa9176982dd1f47a60894138b4ba6c16f67418}
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
  - {path: .claude/skills/metrics/SKILL.md, sha256: 702620038e2f62fbf3a88eca8f6c4efb606f8e48926ec03c4422169918bff9fe}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# vendor-portability

## Definition — verbatim
> "<!-- vendor-portability: <free text> -->" — scripts/validation/check_skill_md_portability.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/push-pr.md | 45 | defined here | Comment marker declaring path dependencies for consumer `.github/` and `.agents/` scratch directories. |
| .claude/skills/execution-plans/SKILL.md | 12 | defined here | Declares consumer-side write targets under `.agents/plans/` that are initialized on demand. |
| .claude/skills/metrics/SKILL.md | 224 | used here | Declares dependencies on consumer `.agents/*` artifacts as metrics inputs. |
| .claude/skills/threat-modeling/SKILL.md | 488 | used here | Declares write targets under `.agents/security/threat-models/` created on demand. |
| docs/SKILL-AUTHORING.md | 248 | used here | Explains the difference between prose guard markers and executable script requirements. |
| scripts/utils/markdown_parser.py | 90 | used here | Parser handling ensuring deeply-nested fenced code does not leak vendor-portability markers into prose. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 64 | used here | Validates plugin frontmatter self-containment, noting vendor-portability marker as the remedy for landed paths. |
| scripts/validation/check_skill_md_portability.py | 31 | defined here | Defines the syntax and semantics of the `<!-- vendor-portability: ... -->` marker in skill documentation. |
| scripts/validation/pre_pr_sequence.py | 301 | defined here | Executes the Vendor Portability validation gate as part of the pre-PR verification sequence. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Baseline tracking undeclared upstream-only path references and marker suppressions. |
| templates/agents/implementer.shared.md | 19 | defined here | Declares session-scaffold path dependencies for consumers vendoring the implementer template. |

## Consumes
Markdown skill documentation, agent templates, and slash command files across the repository.

## Produces
Lint validation results and baseline ratchets preventing undeclared hard-coded upstream path dependencies.

## When applied
Checked in pre-PR validation scripts and CI checks (`check_skill_md_portability.py`, `pre_pr_sequence.py`).

## Sub-concepts
none

## Part of
pre-pr-sequence, skill-authoring

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction

## Design notes
A cross-cutting architectural standard and enforcement gate preventing repo-specific hardcoding in skills and agent definitions. By requiring explicit declaration of path dependencies via `<!-- vendor-portability: ... -->` comments, rjm ensures that skills and templates can be vendored into foreign consumer repositories without broken assumptions.
