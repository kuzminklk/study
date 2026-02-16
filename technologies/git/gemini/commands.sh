
# Clean
git clean -fdx

# Rename branch
# Currently on the branch
git branch -m <new-name>
#On a different branch
git branch -m <old-name> <new-name>
#Push new name to remote
git push origin -u <new-name>
#Remove old name from remote
git push origin --delete <old-name>

# Rewrite history
git rebase -i HEAD~2

# Push new branch to remote
git push -u origin naked