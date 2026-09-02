# Concordance row

Phase 3 output. One row per aligned-concept candidate, in a table in `docs/analysis/concordance/<family>.md`. Every concept card appears in exactly one row across all families.

## Row format

```markdown
### <row-anchor>   ← a neutral working label; NOT a canonical term. Use the most common source name, package-prefixed if ambiguous.

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `<verbatim>` | `<verbatim>` | `<verbatim>` |
| **card** | [link](../concepts/addy/<slug>.md) | [link](../concepts/matt/<slug>.md) | [link](../concepts/rjm/<slug>.md) |
| **kind** | | | |
| **phase** | `addy:<phase>` | `matt:<phase>` | `rjm:<phase>` |
| **produces** | | | |
| **consumes** | | | |
| **impl status** | | | |

- **class:** ALIGNED | SYNONYM | HOMONYM | PARTIAL | UNIQUE | CONFLICT
- **difference:** <what actually differs, one to three sentences, with path:line for each side. For ALIGNED, write `none material`. For UNIQUE, write which package has it and whether the others have a gap or simply do not need it.>
- **sequencing note:** <if the packages place this at different points in the lifecycle, say where each puts it>
- **needs decision:** yes | no   ← yes for every class except ALIGNED, and for UNIQUE where inclusion is a judgement call
- **decision:** — (filled in Phase 4 with D-NNN)
```

Use `—` in a package's column when that package has no equivalent. Never leave a cell blank — blank means "not checked".

## Class definitions

| Class | Meaning | Always needs decision? |
|---|---|---|
| `ALIGNED` | Same concept, same name (or trivially equivalent), compatible definition | no |
| `SYNONYM` | Same concept, different names | yes — pick the canonical name |
| `HOMONYM` | Same name, different concepts | yes — split into two canonical terms |
| `PARTIAL` | Overlapping but not identical concepts; one may be a superset | yes — merge, split, or pick |
| `UNIQUE` | Present in one package only | when inclusion is a judgement call |
| `CONFLICT` | Packages define it incompatibly, or sequence it in incompatible orders | yes |

## Families

Each family is one file. A concept belongs to the family of its `kind`, except that phases, artifacts, and sequencing always get their own structural files regardless of how many rows they hold.

| File | Holds |
|---|---|
| `phases.md` | Lifecycle stage names and boundaries per package |
| `artifacts.md` | Documents and files produced — spec, PRD, one-pager, plan, ticket, task, ADR, and so on |
| `sequencing.md` | What precedes what; what may be skipped and when; how phases hand off |
| `techniques.md` | Named methods — JTBD, HMW, first principles, pre-mortem, TDD, vertical slices, and so on |
| `gates.md` | Checks, verdicts, definitions of done, exit criteria |
| `roles.md` | Agents, subagents, personas |
| `references.md` | Reference documents and checklists loaded by skills |
| `invocation-patterns.md` | How skills are composed and called — commands vs. skills, `$ARGUMENTS`, chaining, delegation |

## `_summary.md`

After all families are done: a count of rows per class per family, and a list of every row with `needs decision: yes`, as the work list for Phase 4.
