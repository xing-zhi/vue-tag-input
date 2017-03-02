# vue-tag-input

A tag input component for Vue2.x.

## Features
+ [x] Use up and down key to move up and down in the result list
+ [x] Select the tag with Enter key or click
+ [x] Add and delete tag around any tag && move around with left arrow key and right arrow key

## Props
| Name | Type | Required | Default | Description |
| ----:| --- | ---| --- |--- |
| v-model | Array | true | undefined | Tags |
| get-items | Function | true | undefined | Function to get the items to choose from when the keyword changes, it gets the keyword as parameter and return a Promise |
| label-key | String | false | label | The property to show in the result list |
| height | Number | false | 280(10 rows) | The height of the result list

