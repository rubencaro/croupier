# Croupier
A very skilled card manager

## Development

1. Install [Meteor](https://www.meteor.com/install)
2. Install [MongoDB](https://www.mongodb.org/)
3. Run `meteor` from project folder
4. Visit http://localhost:3000/
5. Change the code and see the outcome live

## TODOs

* Main theme definition
  * Basic responsive layout https://atmospherejs.com/twbs/bootstrap
  * Finer details
* Use collection-helpers, rearrange code using models
* User options facility (embedded into user?)
* Main user home
  * Configurable (_put this on my home_ button)
* Notification system
  * Basic sink for notifiable events
  * Per user notifications section
  * Email notifications
  * Desktop notifications
  * Deeply per user configurable notifications
* Regular user visibility model
  * Superuser gate
  * Finer permission model
* Search
  * Basic card search
  * Advanced search/filter
  * Per user search saving
* Content features
  * Card mentions
  * User mentions
  * Upload files to S3
  * Preview links to images
  * DnD to upload files
  * Preview links with metas
  * Arbitrary tags
  * Arbitrary colors
  * Card archival
* Log system
  * User activity log
  * User activity calendar
  * Card history
  * Filterable logs view
* Configurable hooks (if _this_ then _that_) Ex. Card auto open/close
  * Grow the list of possible _this_
  * Grow the list of possible _that_
* Task meta grouping
  * Basic _subject_ space definition
  * Card dependency/relation
  * Auto generated _subjects_ menu
