
declare function handleRequest(url: string, method: 'GET' | 'POST'): void;

const req = { url: 'http://google.com', method:'GET' as 'GET'};

handleRequest(req.url, req.method);