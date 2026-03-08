import http from 'http'

const sumHandler = (req, res) => {
    console.log('Sum Process Started!');

    const body = []

    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk)
    });

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        res.setHeader('content-type', 'text/html')
        res.write(`
                
            <h1> Welcome to the Result Page </h1>
            <h1> Your Result is "${result}" </h1>
            <a href='/'>Go To Home</a>
    
        `)

        return res.end()
    });


}


export default sumHandler;