const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err))

  const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
});

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['pizza', 'sushi']
  });
  
  person.save(function (err, data) {
    if (err) return console.error(err)
    console.log('Person saved: ', data)
  })

  const arrayOfPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['pasta', 'salad'] },
    { name: 'Bob', age: 40, favoriteFoods: ['burger', 'fries'] },
  ];
  
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);
    console.log('Multiple people created: ', data)
  })

  Person.find({ name: 'Alice' }, function (err, data) {
    if (err) return console.error(err)
    console.log('Found people: ', data)
  })
  
  Person.findOne({ favoriteFoods: 'burger' }, function (err, data) {
    if (err) return console.error(err);
    console.log('Found person with burger: ', data)
  })

  const personId = 'your_person_id_here';
Person.findById(personId, function (err, data) {
  if (err) return console.error(err);
  console.log('Found person by ID: ', data)
})

Person.findById(personId, function (err, person) {
    if (err) return console.error(err)
    person.favoriteFoods.push('hamburger')
    person.save(function (err, updatedPerson) {
      if (err) return console.error(err)
      console.log('Updated person: ', updatedPerson)
    })
  })
  
  const personName = 'Alice'
Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, function (err, updatedPerson) {
  if (err) return console.error(err);
  console.log('Updated person: ', updatedPerson)
})

Person.findByIdAndRemove(personId, function (err, deletedPerson) {
    if (err) return console.error(err)
    console.log('Deleted person: ', deletedPerson)
  })

  Person.remove({ name: 'Mary' }, function (err, result) {
    if (err) return console.error(err)
    console.log('Deleted persons: ', result)
  })

  Person.find({ favoriteFoods: 'burritos' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec(function (err, data) {
    if (err) return console.error(err)
    console.log('Found people: ', data)
  })

  
  


  
  

