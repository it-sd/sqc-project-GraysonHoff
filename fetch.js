fetch('/get_data')
  .then(response => response.json())
  .then(data => {
    // do something with the data
  })
fetch('/write_data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'some data' })
})
