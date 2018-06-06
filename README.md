##React Views
###View
Use it for the content that will not exceed the size of the screen.
###ScrollView
Use it for longer content that will require scroll in order to be displayed fully.
###FlatList
Use it for the list of the items / cards (same content that repeats). Flat list will only load certain number of the items at once, and will load rest as you scroll down. Which is not the case with ScrollView.
###SectionList
Behaves the same as ScrollView but allows you to seperate content into sections. 
##AsyncStorage
TextInput field is there to demonstrate how the state of app behaves.
Change initialRouteName (App.js line 15) to have value Home2, and you will see how the state is persisted through AsyncStorage even when app is killed.
##React Navigation
React navigation keeps components in the same stack tree always mounted. If you, instead of using `this.props.navigation.puhs()` to change route use `this.props.navigation.replace()` it will replace stack tree therefore unmount components. Keep this in mind if you need to use `componentWillUnmount()`
##Faker
This is great library for generating test data. If you check `utils/data.js` you will see how easily we have created an array of 50 Objects using faker.
For more info check faker [npm package](https://www.npmjs.com/package/faker) or [github repository](https://github.com/Marak/Faker.js)