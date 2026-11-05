---
name: code-review-and-quality
description: Reviews the changes since a fixed point (a commit, branch, tag or merge-base, or the current changes) on five axes, correctness, readability, architecture, security and performance, each in a parallel sub-agent, then merges the reports into one ranked list with one verdict. Use before merging any change, when reviewing a branch, a PR or work in progress, or when asked to "review since X".
---

# Code Review and Quality

## Overview

Multi-dimensional code review with quality gates. Every change gets reviewed before merge, no exceptions. The review pins a fixed point, finds the spec and the repo's standards, then runs five axes as parallel sub-agents: correctness, readability, architecture, security and performance. The five reports merge into one list ranked by leverage, with one verdict.

**The approval standard:** Approve a change when it definitely improves overall code health, even if it isn't perfect. Perfect code doesn't exist; the goal is continuous improvement. Don't block a change because it isn't exactly how you would have written it. If it improves the codebase and follows the project's conventions, approve it.

## When to Use

- Before merging any PR or change
- When the user names a fixed point: "review since main", a branch, a tag, a PR, or work in progress
- After completing a feature implementation
- When another agent or model produced code you need to evaluate
- When refactoring existing code
- After any bug fix (review both the fix and the regression test)

## Required review criteria

Before Review Process Step 0, read [REVIEW-CRITERIA.md](REVIEW-CRITERIA.md) in full. It holds the five axis briefs, structural remedies, change sizing and change-description guidance. Paste the matching axis section into each brief in Step 2. Completion requires all five criteria sets to be applied.

## Review Process

### Step 0: Pin the Fixed Point and Gather the Inputs

Do this before any code is read. A bad ref or a missing spec fails here, not inside five parallel sub-agents.

**Pin the fixed point.** The fixed point is whatever the user named: a commit SHA, a branch, a tag, `main`, `HEAD~5`, or a merge-base. When the user names none, review the current changes (the working tree and index against `HEAD`).

```
git rev-parse <fixed-point>                  # the ref must resolve
git diff <fixed-point>...HEAD                # three-dot: against the merge-base
git log <fixed-point>..HEAD --oneline        # the commit list
```

Capture the diff command once and reuse it. Confirm the ref resolves and the diff is non-empty. Stop and report when either check fails.

**Find the spec.** Look in this order and stop at the first hit:

1. Issue references in the commit messages (`#123`, `Closes #45`, `!67`). Fetch the issue with `gh issue view <n>` when the remote is GitHub.
2. A path the user gave.
3. The active spec folder in the workspace, found as `docs/agents/workspace.md` says: a spec whose slug or `spec.md` title matches the branch name or the feature. The spec is its `spec.md`; the block in its `tasks/todo.md` for the task the change delivers holds that task's acceptance criteria. In a repo with no `docs/agents/workspace.md`, look in the default specs folder, `specs/`, and tell the user once to run setup-brain.
4. Nothing found: the spec's location is the user's decision. Call the Skill tool with "ask-user-question" to compose the one question. If the user says there is no spec, the correctness sub-agent reviews without one and the final report says "no spec available".

Small reversible choices stay with you: decide them and state the reason.

**Find the standards files.** Anything in the repo that documents how code should be written: `CODING_STANDARDS.md`, `CONTRIBUTING.md`, and the style sections of `CLAUDE.md` or `AGENTS.md`. List the paths.

**Read the spec and the commit list before any code.** Write one line each: what the change tries to accomplish, which spec it implements, what behaviour should change.

### Step 1: Review the Tests First

Tests reveal intent and coverage. Read them yourself before you dispatch the axes:

```
- Do tests exist for the change?
- Do they test behavior (not implementation details)?
- Are edge cases covered?
- Do tests have descriptive names?
- Would the tests catch a regression if the code changed?
```

Carry what you find into the merged list in Step 3.

### Step 2: Run the Five Axes as Parallel Sub-Agents

Spawn five sub-agents at once, one per axis, so no axis pollutes another's context. Where the host allows, use a model other than the one that wrote the code; different models have different blind spots. Each brief contains:

0. The plain-talk block at the top, the text of `plain-talk/AGENTS-block.md` under the brain plugin root, because the host's every-turn text never reaches a sub-agent.
1. The diff command from Step 0 with its output, and the commit list.
2. The standards files from Step 0 (paths, and contents when short).
3. The matching axis section from REVIEW-CRITERIA.md, pasted in full. The sub-agent has no other access to it.
4. For the correctness sub-agent only: the spec, as a path or as fetched contents, and the task's block from `tasks/todo.md` when Step 0 found one.
5. Two standing rules, in every brief: "A documented repo standard overrides this skill's baseline; where the repo endorses what the baseline would flag, drop the finding. Skip anything tooling already enforces (formatter, linter, type checker)."
6. The report format: "Report per file and hunk where relevant. For each finding give the severity label, the tag, the quoted hunk and the fix. Tag a finding **hard** when it breaks a documented standard, and cite the file and the rule. Tag everything else **judgement**. Under 400 words."

### Step 3: Merge, Label and Decide

Merge the five reports and your test findings into one list:

1. **Dedupe.** When two axes report the same hunk for the same reason, keep one finding at the higher severity and name both axes.
2. **Label every finding** with its severity so the author knows what's required vs optional:

| Prefix | Meaning | Author Action |
|--------|---------|---------------|
| *(no prefix)* | Required change | Must address before merge |
| **Critical:** | Blocks merge | Security vulnerability, data loss, broken functionality |
| **Nit:** | Minor, optional | Author may ignore: formatting, style preferences |
| **Optional:** / **Consider:** | Suggestion | Worth considering but not required |
| **FYI** | Informational only | No action needed: context for future reference |

This prevents authors from treating all feedback as mandatory and wasting time on optional suggestions.

3. **Tag every finding** after its label: `[hard: <file>, <rule>]` for a violation of a documented standard, or `[judgement]` for everything else, smells included. A hard violation is settled by the standard; a judgement call stays open to the author's context.

4. **Rank by leverage.** Correctness and security first, then structural regressions and missed simplifications, then everything else. Don't bury a real issue under cosmetic nits; a few high-conviction comments beat a long list. If you have one structural problem and ten nits, the structural problem *is* the review.

5. **Give one verdict:**

| Verdict | When |
|---|---|
| **Approve** | The change improves code health; any open findings are Nit, Optional or FYI |
| **Request changes** | Required or Critical findings exist and the approach is sound; fix and re-review |
| **Reject** | The approach itself fails: the wrong thing was built, the spec is unmet in substance, or scope creep dominates the diff; re-spec before rework |

Give every finding a `file:line` reference and a fix.

### Step 4: Verify the Verification

Check the author's verification story:

```
- What tests were run?
- Did the build pass?
- Was the change tested manually?
- Are there screenshots for UI changes?
- Is there a before/after comparison?
```

## Dead Code Hygiene

After any refactoring or implementation change, check for orphaned code:

1. Identify code that is now unreachable or unused
2. List it explicitly
3. **Ask before deleting:** "Should I remove these now-unused elements: [list]?" This is the user's decision; ask it through the user-question tool as in Step 0.

Don't leave dead code lying around; it confuses future readers and agents. But don't silently delete things you're not sure about. When in doubt, ask.

```
DEAD CODE IDENTIFIED:
- formatLegacyDate() in src/utils/date.ts: replaced by formatDate()
- OldTaskCard component in src/components/: replaced by TaskCard
- LEGACY_API_URL constant in src/config.ts: no remaining references
→ Safe to remove these?
```

## Review Speed

Slow reviews block entire teams. The cost of context-switching to review is less than the waiting cost imposed on others.

- **Respond within one business day.** This is the maximum, not the target.
- **Ideal cadence:** Respond shortly after a review request arrives, unless deep in focused coding. A typical change should complete multiple review rounds in a single day.
- **Prioritize fast individual responses** over quick final approval. Quick feedback reduces frustration even if multiple rounds are needed.
- **Large changes:** Ask the author to split them rather than reviewing one massive changeset.

## Handling Disagreements

When resolving review disputes, apply this hierarchy:

1. **Technical facts and data** override opinions and preferences
2. **Style guides** are the absolute authority on style matters
3. **Software design** must be evaluated on engineering principles, not personal preference
4. **Codebase consistency** is acceptable if it doesn't degrade overall health

**Don't accept "I'll clean it up later."** Experience shows deferred cleanup rarely happens. Require cleanup before submission unless it's a genuine emergency. If surrounding issues can't be addressed in this change, require filing a bug with self-assignment.

## Honesty in Review

When reviewing code, whether written by you, another agent, or a human:

- **Don't rubber-stamp.** "LGTM" without evidence of review helps no one.
- **Don't soften real issues.** "This might be a minor concern" when it's a bug that will hit production is dishonest.
- **Quantify problems when possible.** "This N+1 query will add ~50ms per item in the list" is better than "this could be slow."
- **Push back on approaches with clear problems.** Sycophancy is a failure mode in reviews. If the implementation has issues, say so directly and propose alternatives.
- **Accept override gracefully.** If the author has full context and disagrees, defer to their judgment. Comment on code, not people. Reframe personal critiques to focus on the code itself.

## Dependency Discipline

Part of code review is dependency review:

**Before adding any dependency:**
1. Does the existing stack solve this? (Often it does.)
2. How large is the dependency? (Check bundle impact.)
3. Is it actively maintained? (Check last commit, open issues.)
4. Does it have known vulnerabilities? (`npm audit`)
5. What's the license? (Must be compatible with the project.)

**Rule:** Prefer standard library and existing utilities over new dependencies. Every dependency is a liability.

**Upgrading an existing dependency** is a code change like any other, and the riskiest upgrades are the ones merged in bulk with a message like "bump deps." Review them with the same discipline:

1. **Read the changelog, not just the version number.** Semver is a promise the maintainer may not have kept; a "patch" can carry a behavioral change. For a major bump, read the migration notes and find what breaks.
2. **One dependency per change.** Upgrade and merge them individually (or in small related groups). When a bulk bump breaks the build, you've lost which package did it; a single-package change makes the cause obvious and the revert clean.
3. **Let the tests decide.** The upgrade is verified by a green suite before *and* after, not by "it installed." If coverage around the dependency's behavior is thin, that gap is the real finding. Add a test first.
4. **Mind the transitive graph.** Most installed packages are ones nobody chose directly. Review the lockfile diff, not just `package.json`; a single direct bump can pull in dozens of indirect changes.
5. **Keep the lockfile honest.** Commit it, review its diff, and never hand-edit it. The lockfile is the thing that actually pins what ships.

For triaging `npm audit` findings and supply-chain risk (typosquatting, compromised maintainers), follow the `security-and-hardening` skill. This section covers the upgrade *workflow*; that one covers the security verdict.

## The Review Checklist

```markdown
## Review: [PR/Change title]

### Context
- [ ] Fixed point pinned: <ref>, diff non-empty, commit list captured
- [ ] Spec found (<path or issue>) or "no spec available" recorded
- [ ] Standards files listed
- [ ] I understand what this change does and why

### Correctness
- [ ] Change matches spec/task requirements
- [ ] Scope creep listed, spec line quoted
- [ ] Edge cases handled
- [ ] Error paths handled
- [ ] Tests cover the change adequately

### Readability
- [ ] Names are clear, consistent and from the glossary
- [ ] Logic is straightforward
- [ ] No unnecessary complexity

### Architecture
- [ ] Follows existing patterns
- [ ] No unnecessary coupling or dependencies
- [ ] Appropriate abstraction level
- [ ] Refactors reduce complexity rather than relocate it
- [ ] No feature logic in shared modules; file stays within a healthy size
- [ ] Smell baseline checked, one fix per smell reported

### Security
- [ ] No secrets in code
- [ ] Input validated at boundaries
- [ ] No injection vulnerabilities
- [ ] Auth checks in place
- [ ] External data sources treated as untrusted

### Performance
- [ ] No N+1 patterns
- [ ] No unbounded operations
- [ ] Pagination on list endpoints

### Verification
- [ ] Tests pass
- [ ] Build succeeds
- [ ] Manual verification done (if applicable)

### Findings
- [ ] Five reports merged, deduped, ranked by leverage
- [ ] Every finding labelled and tagged hard or judgement

### Verdict
- [ ] **Approve**: Ready to merge
- [ ] **Request changes**: Issues must be addressed
- [ ] **Reject**: Wrong approach; re-spec before rework
```

## See Also

- For detailed security review guidance, see `../../references/security-checklist.md`
- For performance review checks, see `../../references/performance-checklist.md`

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "It works, that's good enough" | Working code that's unreadable, insecure, or architecturally wrong creates debt that compounds. |
| "I wrote it, so I know it's correct" | Authors are blind to their own assumptions. Every change benefits from another set of eyes. |
| "We'll clean it up later" | Later never comes. The review is the quality gate; use it. Require cleanup before merge, not after. |
| "AI-generated code is probably fine" | AI code needs more scrutiny, not less. It's confident and plausible, even when wrong. |
| "The tests pass, so it's good" | Tests are necessary but not sufficient. They don't catch architecture problems, security issues, or readability concerns. |
| "The refactor makes it cleaner" | Relocating complexity isn't reducing it. If the reader still holds the same number of concepts, the structure didn't improve. Look for the version where branches disappear. |
| "It's only a small addition to this file" | Small diffs still push files past a healthy size and bolt branches onto unrelated flows. Judge the resulting structure, not the diff size. |
| "It's just a version bump" | A bump is a behavior change you didn't write. Read the changelog; semver doesn't guarantee no breakage. |
| "I'll upgrade everything in one PR to save time" | A bulk bump that breaks the build hides which package did it. One dependency per change keeps the cause and the revert clean. |
| "The diff is small, one pass covers all five axes" | One context reads the diff through one lens and the other four go soft. Five sub-agents cost little and each keeps its angle. |
| "There's no spec, so review the code on its own terms" | Without a spec, scope creep and a missing requirement look the same as good code. Follow the lookup order; ask when it finds nothing. |
| "It does more than the spec asked, that's a bonus" | Unasked behaviour is untested against any intent. Report it as scope creep with the spec line, and let the author split it out. |

## Red Flags

- PRs merged without any review
- A review with no pinned fixed point, or one run on an empty diff
- Review that only checks if tests pass (ignoring other axes)
- "LGTM" without evidence of actual review
- Security-sensitive changes without security-focused review
- Large PRs that are "too big to review properly" (split them)
- No regression tests with bug fix PRs
- Review comments without severity labels; it's unclear what's required vs optional
- A finding with no hard-or-judgement tag, or a "hard" tag that cites no standard
- Behaviour beyond the spec passed through without a scope-creep finding
- Accepting "I'll fix it later"; it never happens
- A refactor that moves code around without reducing the number of concepts a reader must hold
- A change that grows an already-large file instead of decomposing it
- New conditionals scattered into unrelated code paths (a missing abstraction)
- A bespoke helper that duplicates an existing canonical one, or feature logic placed in a shared module
- A bulk "bump dependencies" PR with no changelog review and no per-package isolation
- A lockfile change that's hand-edited, uncommitted, or merged without reviewing its diff

## Verification

After review is complete:

- [ ] The fixed point, the spec source and the standards files are named in the report
- [ ] All five axis reports came back and were merged into one ranked list with one verdict
- [ ] Every finding carries a severity label and a hard-or-judgement tag
- [ ] All Critical issues are resolved
- [ ] All Required (no-prefix) changes are resolved or explicitly deferred with justification
- [ ] Tests pass
- [ ] Build succeeds
- [ ] The verification story is documented (what changed, how it was verified)
- [ ] Dependency upgrades were reviewed against their changelog, isolated per package, and verified by a green suite with the lockfile diff reviewed

**Presumptive blockers:** surface and propose the simpler design for each of these; escalate to Required only when the change actively makes structure worse: a refactor that relocates complexity instead of reducing it; a change that pushes a file past the size boundary with no decomposition; feature logic added to a shared module; a near-duplicate of an existing canonical helper; a silent fallback that hides an unclear invariant.
