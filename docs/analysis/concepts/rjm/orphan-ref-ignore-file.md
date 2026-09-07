---
package: rjm
name: orphan-ref-ignore-file
slug: orphan-ref-ignore-file
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# orphan-ref-ignore-file

## Definition — verbatim
> "| `orphan-ref-ignore-file` HTML comment | file directive | Mutes the whole file, but ONLY if the directive appears within the first 50 lines |" — .claude/skills/ai-agents-config-catalog/SKILL.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 83 | defined here | Cataloged as a file directive HTML comment muting orphan-reference findings across an entire file when placed in the first 50 lines. |
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 51 | used here | Documented as a file-scope HTML comment directive that must appear within the first 50 lines of the target file. |

## Consumes
A document file where all entity reference checks should be suppressed.

## Produces
File-level suppression of orphan reference scanner checks.

## When applied
Applied as an HTML comment in the first 50 lines of a document to mute all orphan reference checks for that file.

## Sub-concepts
none

## Part of
orphan-references

## Implementation status
defects: unfailable-gate, other

## Design notes
A file-level suppression directive in rjm that disables orphan reference validation across an entire document. To prevent developers from obscuring suppression directives in large files, the scanner strictly enforces a 50-line window: the directive must appear in the top 50 lines of the file, ensuring visibility during code review.
