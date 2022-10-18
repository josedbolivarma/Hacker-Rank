function timeConversion(s) {
    // Write your code here
    if (s.indexOf('PM') > -1) // then do smth with PM
    console.log(s.indexOf('PM') > -1);
    // const arr = s.slice(0,8).split(':');
    
    const arr = s.slice(0,8).split(':');

      arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) 
         :
         (arr[0] == 12 ? '00' : arr[0]);

      return arr.join(':');

    // console.log(arr);

    // PM case
    // if( arr[0] == 12) {  // as 12 is the string I use ==, but you can rewrite it like === '12'
    //     arr[0] = '12';
    // } else {
    //     arr[0] = Number(arr[0]) + 12; // if we add number to string we will get new string like '1312'
    // }

    // AM case
    // if (arr[0] == 12) {
    //     arr[0] = '00';
    // }
    // In other cases AM is the same as 24h format

}

const str = '12:05:45PM';

timeConversion(str);