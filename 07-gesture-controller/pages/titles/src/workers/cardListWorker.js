 // Main responsability is to exec all the heavy process in background
 onmessage = ({ data }) => { // Global function
     console.log({ data });

     console.log('activating blocking operation...')
     console.time('blocking-op')
         // blocking function
         // 1e5 = 100.000
     for (let counter = 0; counter < 1e5; counter++) console.log('.')
     console.timeEnd('blocking-op')

     postMessage({ response: 'ok' }) // Anwser who requested
 };