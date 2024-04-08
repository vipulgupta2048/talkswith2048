#!/usr/bin/env bash

# One time use 
# sed -i -r 's|\../img|./docs/img|g' README.md


# sed -i "s|<img src=\"\(.*\)\" height=\"\(.*\)\" width=\"\(.*\)\" align=\"\(.*\)\" />|<img src={require('\1').default} height=\"\2\" width=\"\3\" align=\"\4\" />|g" example.html


folder_doesnot_exists() {
  if [ ! -d "$1" ]; then
    mkdir "$1"
  fi
}

TALKS="$DESTINATION/Sharing what I know"
folder_doesnot_exists $TALKS

PRODUCT="$DESTINATION/Building Products"
folder_doesnot_exists "$PRODUCT"

WORK="$DESTINATION/Past Work"
folder_doesnot_exists "$WORK"

COMMUNITY="$DESTINATION/Paying it Forward"
folder_doesnot_exists "$COMMUNITY"

$SCRIPT_DIR/extract-markdown.sh "Talks with 2048" <$SOURCE_FILE >Talks.md && mv ./Talks.md $TALKS/ &

$SCRIPT_DIR/extract-markdown.sh "Conferences with 2048" <$SOURCE_FILE >Conferences.md && mv ./Conferences.md $TALKS/ &

$SCRIPT_DIR/extract-markdown.sh "Podcasts with 2048" <$SOURCE_FILE >Podcasts.md && mv ./Podcasts.md $TALKS/ &


$SCRIPT_DIR/extract-markdown.sh "Hackathons with 2048" <$SOURCE_FILE >Hackathons.md && mv ./Hackathons.md $PRODUCT/ &

$SCRIPT_DIR/extract-markdown.sh "Projects with 2048" <$SOURCE_FILE >Projects.md && mv ./Projects.md $PRODUCT/ &

$SCRIPT_DIR/extract-markdown.sh "Designing sometimes with 2048" <$SOURCE_FILE >Designs.md && mv ./Designs.md $PRODUCT/ &&
    # sed -i -r "s|<img src=\"\(.*\)\" |<img src={require(\"\1\").default} |g" $DESTINATION/Designs.md &
    # sed -i -r "s|<img src=\"(.*)\" |<img src={require(\"\1\").default} |g" $DESTINATION/Designs.md &
    sed -i '' "s|<img src=\"\\(.*\\)\" |<img src={require(\"\1\").default} |g" $PRODUCT/Designs.md &


$SCRIPT_DIR/extract-markdown.sh "Google Summer of Code with 2048" <$SOURCE_FILE >Google\ Summer\ of\ Code.md && mv ./Google\ Summer\ of\ Code.md $WORK/ &


$SCRIPT_DIR/extract-markdown.sh "Organizing with 2048" <$SOURCE_FILE >Communities.md && mv ./Communities.md $COMMUNITY/ &

$SCRIPT_DIR/extract-markdown.sh "Mentoring with 2048" <$SOURCE_FILE >Mentoring.md && mv ./Mentoring.md $COMMUNITY/ &


wait

# Cleanup
rm $SOURCE_FILE
rm -fr *.md-r
rm -fr $DESTINATION/*.md-r
