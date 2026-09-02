# Decision

Appended to `docs/decisions/DECISIONS.md`. Never edited after the session that writes it (METHOD.md R8). `D-001`–`D-099` are project decisions; `D-100` onward are alignment decisions made in Phase 4 and later.

```markdown
## D-NNN — <short title: the canonical term or the thing decided>

- **date:** YYYY-MM-DD
- **made-by:** agent | Peter
- **session:** NNN
- **status:** active
- **supersedes:** — | D-MMM
- **resolves:** <concordance row anchor(s)>, e.g. `artifacts.md#one-pager`   ← alignment decisions only
- **preferences consulted:** <PREFERENCES.md items this touches; say followed or overridden and why>

### Decision
<One paragraph. The canonical term and its definition, or the sequencing/composition choice. State it so that a reader with no other context knows what was decided.>

### Adopted from
<Which package's version is taken, or which parts of which. `path:line` for each. If the result is a new synthesis not present in any source, say so and say why the sources' versions were each insufficient.>

### Dropped
<What from the sources is not carried forward, and why. Defects (D-006) are named here as defects, with the concept's design intent evaluated separately.>

### Rejected alternatives
<Each alternative canonical term or approach considered, one line each, with the reason it lost.>

### Evidence
<The `path:line` citations the rationale rests on. A decision with no evidence is not a decision.>

### Glossary
<The exact GLOSSARY.md entry this decision adds or changes, so the two files cannot drift.>
```

## Superseding

When a later decision replaces this one, the *later* decision carries `supersedes: D-NNN` and this entry gets exactly one line appended — nothing else changes:

```markdown
- **superseded-by:** D-MMM
```

The 4V adversarial pass checks that no two `active` decisions conflict and that every `supersedes` has a matching `superseded-by`.
