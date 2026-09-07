---
package: rjm
name: atomic save
slug: atomic-save
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/script-template.py, sha256: 50af05ade0055f329c89815a126c5ff43f3dd21ff959c8ce8d674a32b660e9a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# atomic save

## Definition — verbatim
> "    # Write to temp file first for atomic save" — .claude/skills/skillforge/assets/templates/script-template.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/assets/templates/script-template.py | 136 | defined here | Comment explaining two-step persistence pattern writing state to a `.json.tmp` file before renaming over destination. |

## Consumes
Target file path and serialized state data.

## Produces
An atomically replaced destination file without corrupting intermediate state on write failure.

## When applied
Applied during script state serialization (`save_state()`) to prevent partial or corrupted file writes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch

## Design notes
Atomic save writes serialized state data to a temporary file before renaming it over the destination target in a single filesystem operation, ensuring that execution interrupts never leave corrupted or partially written state files on disk.
