Yes — two passes, in that order.

**First, the review.** I'll run the `code-review` skill, which reviews changes since a fixed point and explicitly covers reviewing a branch before merge. It works against the merge base and reports on two axes in parallel: whether the code follows this repo's documented coding standards, and whether it matches what the originating issue or spec asked for.

Worth flagging that "review" is ambiguous here — you also have a plugin `code-review:code-review` skill and a `/review` command, plus `security-review` for a security-only pass. I'm picking the personal `code-review` skill because branch-before-merge is its stated trigger and merge-base scoping is what "before I merge" means. Say the word if you wanted one of the others.

**Then the cleanup.** For "the messy bits" I'll use `code-simplifier:code-simplifier` — the one whose deliverable is the edited code itself rather than a report about it: reduced nesting, long functions split, duplication removed, unclear local names fixed, dead code deleted, behaviour identical throughout. Its agent runs your tests between individual changes and reverts anything that breaks them.

Two things about the order, though:

1. **I'll stop and show you the review before touching anything.** "Messy" is your call, not mine — the review will separate real correctness problems from style noise, and you should pick which bucket gets cleaned. The review skill only produces findings; it doesn't apply fixes.

2. **If the review turns up actual bugs, those get fixed before the cleanup pass, not during it.** The simplifier is explicit that it shouldn't run on broken code or failing tests — simplifying wrong behaviour just preserves the wrong behaviour more legibly. So bugs first, tidying second.

Starting the review now.
