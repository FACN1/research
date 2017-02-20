# Git & Github

## Best practises for committing on Github.

#### How often to commit?

In order to determine how frequently you should commit, it is advised to follow this general guide:

	- Think of something that needs to be fixed.
	- Do the work!
	- Test it works
	- Add and commit

If you are in ever in doubt, commit early and often :)


#### Two ways to make write a commit message.

`git commit -m <commit message>`

  - writes one line of commit message and commits all in one go

` git commit `

  - opens your default command-line text editor, which is good for writing longer commit messages (see below for formatting guideline).

	- if using vim text editor, once you have finished your commit message, you need to hit esc and 			then ‘:wq’ + enter to close text editor.

#### Seven tips to format the perfect commit message

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why (and how does it address the issue), and usually not how

Top tips:
	~/.vimrc	tells vim to wrap your text at 72 chars and spell checks


Useful links
https://chris.beams.io/posts/git-commit/

PULL REQUESTS BEST PRACTISE


Issues, labels and Milestones

useful links
https://guides.github.com/features/issues/
