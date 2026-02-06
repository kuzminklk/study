

# Initialization
git init

# Status
git status


# Staging and commiting
git add -A # Add to stage
git rm # Delete from stage
git mv # Move and add file to stage

git restore # Return to unmodified version

git commit -m "Write tests"

git reset HEAD # Reset staged area


# History
git log
git log --pretty=oneline # In one lines
git log --pretty=oneline --max-count=2 # Last two
git log --pretty=oneline --since='5 minutes ago' # For last 5 minutes
git log --pretty=oneline --until='5 minutes ago' # Until last 5 minutes
git log --pretty=oneline --author=kuzminklk # From exact author
git log --all --pretty=format:'%h %cd %s (%an)' --since='7 days ago' # Well-formatted
git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short # Well-formatted
git history main --all # git history = git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short

# Tags
git tag
git tag -d <name>


# Go to commit, branch
git checkout

# Revert last commit
git revert HEAD

# Reset history to some commit
git reset --hard <hash>


# See files in repo
git cat-file -p <hash>


# Create and change branch
git checkout -b <branch-name>
git branch <branch-name> -> git checkout <branch-name>

# Merge branches
git merge 
hit rebase # For linear history

# Change branch
git checkout <branch-name>


# Clone
git clone <name> <new-name>

# Show info about origin
git remote show origin

# Load commits from remote
git fetch
git pull

# Push changes
git push shared main