#!/usr/bin/env bash

openssl aes-256-cbc -K $encrypted_3f937c7d7272_key -iv $encrypted_3f937c7d7272_iv -in git_gpg_keys.asc.enc -out /tmp/git_gpg_keys.asc -d
chmod 600 /tmp/git_gpg_keys.asc
gpg --batch --yes --import /tmp/git_gpg_keys.asc
echo '/usr/bin/gpg2 --passphrase ${GPG_PASSPHRASE} --batch --no-tty "$@"' > /tmp/gpg-with-passphrase && chmod +x /tmp/gpg-with-passphrase
git config gpg.program "/tmp/gpg-with-passphrase"
git config commit.gpgsign true
git config --global user.signingkey ${GPG_KEY_ID}
