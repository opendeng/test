var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        {message: 'foo' },
        {message: 'Bar' },
        {message: 'Bar' },
        {message: 'Bar' },
        {message: 'Bar' },
        {msg: '123456' },
        {msg: '123456' },
        {msg: '123456' },
        {msg: '123456' },
        {msg: '123456' },
        {msg: '123456' },
        {msg: '123456' },
        
      ],
      numbers: [ 1, 2, 3, 4, 5 ],
      object: {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30
      }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
  })