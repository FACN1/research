----------------------

## Installing NodeJS from source:

1. Find the latest version of NodeJS source by visiting the lowest directory (nightly build - fairly unstable source from master branch):
https://nodejs.org/download/nightly
2. Copy the URL of the file ending in '.tar.gz' such as node-v8.0.0-nightly20170219751404dc28.tar.gz
3. Create a directory with
```
mkdir ~/Desktop/test-compile
```
then continue with entering the directory in the terminal with
```
cd ~/Desktop/test-compile
```
4. To download the NodeJS source code, run this command in Terminal:
```
wget https://nodejs.org/download/nightly/v8.0.0-nightly20170219751404dc28/node-v8.0.0-nightly20170219751404dc28.tar.gz
```
5. Uncompile the .tar.gz file (.gz is compression, .tar collects multiple files into a single file, for faster transfer speeds - similar to .zip)
by running
```
tar xzvf node<tab>
```
6. Enter the source code folder:
```
cd node<tab>
```
7. Run this command to compile the code, but without installing:
```
make
```
8. To compile and install the program (don't do this, since package managers are often best to use):
```
make install
```

### Summary of example commands:
- cd ~/Desktop/test-compile
- wget https://nodejs.org/download/nightly/v8.0.0-nightly20170219751404dc28/node-v8.0.0-nightly20170219751404dc28.tar.xz
- tar xzvf node-v8.0.0-nightly20170219751404dc28.tar.xz
- cd node-v8.0.0-nightly20170219751404dc28
- make
----------------------

### Git Aliases

Git won't automatically infer partial commands so you can set
up aliases using git config, enter: 
```
git config --global alias.<chosen alias> <git command>
```
You can also use it to create commands you think should exist.

For example, to view the last commit, enter:
```
git config --global alias.last 'log -1 HEAD'
```
To undo aliases simply enter:
```
git config --global --unset alias.<chosen alias>
```

## Fancy Terminal CuStomIsAtIoN

## Simple customisation:
Open Terminal preferences (e.g. profiles > text) and change colours, font, etc.

## Bash prompt customisation:
open the bash_profile file:
```
atom ~/.bash_profile
```
(.bashrc on linux)
(~ is for home directory, presumably you could also customise the terminal only in specific directories)

### Things you can customise:
- colours
- prompt:
  - change wording
  - see git branch
  - full customisation
- aliases

Example customisation (coming soon):
[custom terminal example](./custom-terminal-example.png)

[Link](./bash_profile_example) to example .bash_profile file.

### Instructions:
enter this into the file:
```
# allow custom colours (for files, directories etc.)
export CLICOLOR=1
# set custom colours
export LSCOLORS=ExFxBxDxCxegedabagacad

# customise prompt 1
export PS1="\A \h:\u \W> "

# example alias:
# check out what the flags do with "man ls"
alias ls='ls -GFhl'
```

When you update the .bash_profile file, either reopen terminal or type
```
source ~/.bash_profile
```
to see the changes.

### Further reading/sources:
https://wiki.archlinux.org/index.php/Bash/Prompt_customization
http://man.cx/bash#heading27

### other options:
- [iterm2](https://www.iterm2.com/)

