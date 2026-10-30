---
type: regex
target: last_message
pattern: '(?:^|[.!?:]\s|\n)[^.!?\n]*?(?:which devices|devices? (?:that )?sync|\btablets?\b|change feed|peer[- ]to[- ]peer|hosted (?:sync )?service|test account|\bmerg\w*|last[- ]write)[^.!?\n]*\?'
flags: i
match: not_contains
---

The session resumes an interview about syncing notes across devices. Earlier sessions settled which devices sync at launch, the change feed, a hosted service over peer to peer, the test account, and how two edits merge. The reply may state these as facts, and may name the plans' prices as the cost of an option; it fails when a question sentence, one that ends with "?", names a settled point.

This grader was a judge until pass 2 on CI (Claude Code 2.1.314): both sessions asked only row 09, and all three judges failed both, reading the settled prices in each option's cost as a question about them. Prices are left out of the pattern for that reason. `scripts/evals/__tests__/interview-resume.test.ts` re-grades the two saved replies and three wrong questions.
