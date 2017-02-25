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

#Git flow

##Standard Procedure:

1. Initialise your repo on Github (skip if cloning an existing repo), ensuring you initialise with a Readme.MD file.
2. Copy the URL of your repo from Gitub, and clone onto your local machine from the terminal, like so:
  - In your command line, go to the directory you want the repo to be in.
    $ cd anydir
  - Use the git clone command to clone the repo.
    $ git clone https://your.URL.here

3. The git repo is now on your machine, but you will need to cd into it still to start work.

4. First thing will normally be to start a new branch, or switch to the branch you were working on before:

    $ git checkout -b newbranchname

  This makes a new branch called *newbranchname*. and  "checks it out" i.e. move to it.
    $ git checkout branchIamWorkingOn
  This checks out to an already existing branch called *branchIamWorkingOn*.

5. After making changes to files whilst working, you should add and commit.

    $ git add filename.filetype
    $ git commit -m "commit message here"

This saves the current states of your files into the git repo, meaning you can access them exactly as they are now, at any point in the future.

6. These are now saved to your branch, but only on your local computer, they now need to be pushed to the remote repo on Github.

However, before you do these, you want to make sure your branch is up to date with any changes to the master branch.

7. So, first checkout to master branch
    $ git checkout master

8. Then you need to *pull* from the remote on Github onto your machine.
    $ git pull origin master

9. Then go back to your branch
    $ git checkout mybranch

10. Then you need to *merge* the new master on your local machine with your branch.
    $ git merge master

This merges the branch you are one with your local master branch.

11. You can then push your branch to the remote, save in the knowledge that is up to date with the current remote master, which means when you make a pull request it should merge a lot easier.
    $ git push origin mybranch

12. Now you must go to your Repo on Github, and then on the branch drop down menu direct to your branch.

13. You can then submit a pull request, which should describe exactly what your branch does.

14. You should **NEVER** merge your own pull request, always have someone else (ideally 2+) check and merge it.

15. Once a branch is merged it can be deleted.

**N.B**

When a branch is deleted on the remote, it won't delete on your local, even after you next pull from the remote.  


PULL REQUESTS BEST PRACTISE


Issues, labels and Milestones

useful links
https://guides.github.com/features/issues/
