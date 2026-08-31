Yes — two passes, in that order.

**1. Review first — `code-review`.** This is the local skill, the one whose trigger is reviewing a branch against a fixed point before merge. It runs two axes as parallel sub-agents and reports them side by side: Standards (does the code follow this repo's documented standards?) and Spec (does it do what the originating issue asked for?).

It needs a fixed point to diff against. I'll use the merge-base with the default branch unless you tell me otherwise — say the word if you'd rather compare against a tag, a specific commit, or the branch point of something else.

Worth flagging one naming thing so we don't cross wires: there are several review skills installed, and I've picked deliberately. `code-review` is the one that resolves branch scope itself; the plugin `code-review:code-review` wants an explicitly named scope, and `security-review` is a single axis. If the branch touches auth, untrusted input, or data storage, that last one is a worthwhile extra pass — tell me and I'll add it.

**2. Cleanup after — `code-simplifier:code-simplifier`.** I'm naming it in full because the bare name is ambiguous here: there's also a local `code-simplification` skill and `code-simplify` / `simplify` commands. The one I want is the plugin skill, where the deliverable is the edited code itself — less nesting, long functions split, duplication removed, dead code gone, unclear local names fixed — with behaviour identical throughout.

**Why I'm not running them together.** That skill declares it shouldn't be used on broken code, because simplifying code whose behaviour is wrong just preserves the wrong behaviour. So the review has to land first — and if it turns up genuine defects, the next step is fixing those, not tidying around them. There's also a distinction worth keeping sharp: review findings are things that are *wrong*, cleanup targets are things that are *correct but hard to read*. Feeding the raw review output into the simplifier would smear those together.

So I'll stop after the review and show you what came back. Then you tell me whether we're fixing, tidying, or both — and which of the messy bits you actually meant.

Starting the review now against the merge-base, unless you want a different comparison point.
