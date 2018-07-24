import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyApBLpqfKgZh43_cTX93o8siwfe7qgPLtw",
    authDomain: "expensify-1c5cd.firebaseapp.com",
    databaseURL: "https://expensify-1c5cd.firebaseio.com",
    projectId: "expensify-1c5cd",
    storageBucket: "expensify-1c5cd.appspot.com",
    messagingSenderId: "988059183723"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/* database.ref().set({
  name: 'Sidharth Ravi',
  age: 29,
  isSingle: true,
  stressLevel: 6,
  job: {
    title: 'Software Dev',
    company: 'Google'
  },
  location: {
    city: 'Philadelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
}); */

/* database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('removed isSingle');
  })
  .catch((e) => {
    console.log('Failed to remove isSingle');
  }); */

/*   database.ref()
  .update({
    isSingle: false,
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
  })
  .then(() => {
    console.log('Updated data');
  })
  .catch((e) => {
    console.log('Failed to Update');
  }); */

/* database.ref().once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch( (e) => {
    console.log('fetch error');
  }); */

/* const onDataChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});

database.ref().off('value', onDataChange); */

/* database.ref('expense').push({
  amount: 2500,
  description: 'Lunch',
  createdAt: 349304934093
});
database.ref('expense').push({
  amount: 750000,
  description: 'Rent',
  createdAt: 349304934034
}); */


/* database.ref('expense').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id:childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
}) */