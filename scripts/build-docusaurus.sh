#!/usr/bin/env bash
# This script creates snippets (partials) from bigger documentation pieces to generate docusaurus pages

# exit on error, unassigned vars, or pipe fails
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

cp README.md README-temp.md

SOURCE_FILE=README-temp.md
DESTINATION=$SCRIPT_DIR/../docs

OS="$(uname)"
SED_EXTENSION=""
if [[ "$OS" == "Darwin" ]]; then
    SED_EXTENSION="''"
fi

# Replacing relative paths from README to match docusaurus
sed -i $SED_EXTENSION 's|\./docs/img|\./img|g' $SOURCE_FILE

# Replacing img src tag with JSX require for all instances that matches
# sed -i -r "s|<img src=\"\(.*\)\" height=\"\(.*\)\" width=\"\(.*\)\" />|<img src={require(\"\1\").default} height=\"\2\" width=\"\3\" />|g" $SOURCE_FILE
# sed -i -r "s|<img src=\"(.*)\" height=\"(.*)\" width=\"(.*)\" />|<img src={require(\"\1\").default} height=\"\2\" width=\"\3\" />|g" $SOURCE_FILE
sed -i $SED_EXTENSION "s|<img src=\"\\(.*\\)\" height=\"\\(.*\\)\" width=\"\\(.*\\)\" />|<img src={require(\"\1\").default} height=\"\2\" width=\"\3\" />|g" $SOURCE_FILE


echo "Generating partials for docs"

$SCRIPT_DIR/extract-markdown.sh "Talks with 2048" <$SOURCE_FILE >Talks.md && mv ./Talks.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Conferences with 2048" <$SOURCE_FILE >Conferences.md && mv ./Conferences.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Hackathons with 2048" <$SOURCE_FILE >Hackathons.md && mv ./Hackathons.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Google Summer of Code with 2048" <$SOURCE_FILE >Google\ Summer\ of\ Code.md && mv ./Google\ Summer\ of\ Code.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Mentoring with 2048" <$SOURCE_FILE >Mentoring.md && mv ./Mentoring.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Projects with 2048" <$SOURCE_FILE >Projects.md && mv ./Projects.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Organizing with 2048" <$SOURCE_FILE >Communities.md && mv ./Communities.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Podcasts with 2048" <$SOURCE_FILE >Podcasts.md && mv ./Podcasts.md $DESTINATION/ &

$SCRIPT_DIR/extract-markdown.sh "Designing sometimes with 2048" <$SOURCE_FILE >Designs.md && mv ./Designs.md $DESTINATION/ &&
    # sed -i -r "s|<img src=\"\(.*\)\" |<img src={require(\"\1\").default} |g" $DESTINATION/Designs.md &
    # sed -i -r "s|<img src=\"(.*)\" |<img src={require(\"\1\").default} |g" $DESTINATION/Designs.md &
    sed -i $SED_EXTENSION "s|<img src=\"\\(.*\\)\" |<img src={require(\"\1\").default} |g" $DESTINATION/Designs.md &

wait

# Cleanup
rm $SOURCE_FILE
rm -fr *.md-r
rm -fr $DESTINATION/*.md-r
