# GLOSSARY — Canonical terms

The single source of vocabulary for the lifecycle. Empty until Phase 4. Every term here has a decision behind it; every decision that names a term adds it here in the same step.

## Rules

1. **Before a term is decided**, refer to the source concept with its package prefix: `addy:spec`, `matt:spec`, `rjm:spec`. Never invent an interim neutral word.
2. **After a term is decided**, use only the canonical term everywhere in `docs/` and in every built artifact. `scripts/synthesis/glossary-lint.ts` flags package-prefixed terms that have a decision, and canonical-looking terms that do not.
3. **One term, one meaning.** If a word needs two meanings, it needs two terms. Homonyms from the sources are resolved here, not preserved.
4. **Definitions are complete sentences** that say what the thing is, not what it is for. Purpose goes in the lifecycle spec.
5. **Sources are cited.** Each entry names the concordance row it resolves and the decision that set it.

## Entry format

```
### <canonical-term>

- **definition:** <one to three sentences>
- **kind:** phase | artifact | technique | gate | role | reference | pattern
- **source names:** addy: `<verbatim>` · matt: `<verbatim>` · rjm: `<verbatim>` (or — if absent)
- **decision:** D-NNN
- **concordance:** `docs/analysis/concordance/<family>.md#<row-anchor>`
- **not to be confused with:** <other canonical term(s)>, if any
```

---

## Terms

<!-- Phase 4 appends entries here, alphabetically within kind. -->

### Phases

*(none yet)*

### Artifacts

*(none yet)*

### Techniques

*(none yet)*

### Gates

*(none yet)*

### Roles

*(none yet)*

### References

*(none yet)*

### Patterns

*(none yet)*
