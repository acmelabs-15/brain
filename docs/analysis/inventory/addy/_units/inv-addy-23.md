---
unit: inv-addy-23
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-23

## Files assigned
- [x] sources/addy-external/idea-refine.md (24943 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-idea-refine-md.md (6699 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/idea-refine.md` is an external documentation web snapshot for the `idea-refine` skill (`skills/idea-refine/SKILL.md`, inventoried in inv-addy-4).
- The external documentation exhibits doc-drift relative to `skills/idea-refine/SKILL.md:3`: the summary description is abridged and omits specific trigger phrases, and the standardized 6-part anatomy listed on the webpage (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) does not match the actual headings in `skills/idea-refine/SKILL.md`, which omits Rationalizations and provides "Anti-patterns to Avoid", "Philosophy", and "Tone".
- The external page places `idea-refine` in the `Define` phase and associates it with `Command /spec` on line 12, but `commands/spec.toml:4` only invokes `spec-driven-development` and does not invoke `idea-refine`.
- Cross-references Define-phase sibling skills `interview-me` (`skills/interview-me/SKILL.md`) and `spec-driven-development` (`skills/spec-driven-development/SKILL.md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,235 tokens (24,943 bytes)
Approximate tokens of output written: ~1,675 tokens (6,699 bytes)
