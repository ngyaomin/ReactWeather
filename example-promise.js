// function getTempCallback (location, callback) {
//   callback(undefined, 32);
//   callback('City not found');
// }
//
// getTempCallback('Singapore', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(33);
//       reject('City not avail');
//     }, 1000);
//   });
// }
//
// getTempPromise('Singapore').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('both need to be number');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise('a', 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
