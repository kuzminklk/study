
# Configuration
git config --global user.name 'kuzminklk' (?)
git config --global user.email '...' (?)

# Initialization
git init project-1
cd project-1 (?)
git clone

# Make Commit
git add *
git commit -m "Message"
git push

# Remote connection
git remote -v
git remote set-url origin git@github.com:kuzminklk/ai-page.git

# Change name of commit
git rebase -i HEAD~N